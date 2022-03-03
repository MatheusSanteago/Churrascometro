var buttonReset = document.getElementById('reset');
buttonReset.addEventListener('click', reset );

var buttonSend = document.getElementById('button');
buttonSend.addEventListener('click',createDiv)



function valores(n1,n2) {   
   media = n1 * n2;
   return media;
}

function getData() {

    var qtdHoras = document.getElementById('qtd_horas').value;
    let qtdAdultos = document.getElementById('qtd_adultos').value;
    let qtdAdultosAlcool = document.getElementById('qtd_adultos_alcool').value;
    let qtdKids = document.getElementById('qtd_crianca').value;
    
    if (qtdAdultos == 0 && qtdKids == 0 && qtdHoras == 0){
        alert('Insira algum valor!');
        window.location.reload();
    } 
    else if (qtdAdultos < 0 || qtdKids < 0 ){
        alert('Digite valores Positivos'); 
        window.location.reload();
    } else {
        if (qtdHoras >= 6){
            var CARNE_FIXO_ADULTO = 650.0;
            var CARNE_FIXO_CRIANCA = 300.0;
            var REFRI_FIXO = 1600; // litros refri 
            var BEBIDAS_FIXO = 7; // LATAS
        } else if (qtdHoras < 6){
            var CARNE_FIXO_ADULTO = 400.0;
            var CARNE_FIXO_CRIANCA = 200.0;
            var REFRI_FIXO = 1250; // litros refri 
            var BEBIDAS_FIXO = 4; // LATAS
        }
    
    
        let adultosAll = parseInt(qtdAdultos) + parseInt(qtdAdultosAlcool);
        var kidsMoreAdults = adultosAll + parseInt(qtdKids); 
        console.log(adultosAll + " são adultos");
        console.log(qtdKids + " são Crianças");
        console.log(kidsMoreAdults + '');
    
        //CÁLCULOS CARNE 
    
        var calcCarneAdultos = valores(CARNE_FIXO_ADULTO,adultosAll);
    
        var calcCarneKids = valores(CARNE_FIXO_CRIANCA,qtdKids);
    
        var calcCarneGeral = parseInt(calcCarneAdultos) + parseInt(calcCarneKids);
    
        var calcBebidas = valores(BEBIDAS_FIXO,qtdAdultosAlcool); // qtdAdultosAlcool
        var calcRefri = valores(REFRI_FIXO,kidsMoreAdults - qtdAdultosAlcool); //PESSOAS + CRIANÇAS 
        
    
        qtdSoda.innerHTML = calcRefri + " litros ou " +  (Math.ceil(calcRefri / 2000)) + " garrafa(s) de 2L";
        qtdBeef.innerHTML = calcCarneGeral + "g de Carne equivalente à " + (calcCarneGeral / 1000) + " kg";
        qtdBeer.innerHTML = calcBebidas + " latas equivalente à " + ((calcBebidas * 350)/1000) + "L";
        span.innerHTML =  "para " + kidsMoreAdults + " pessoa(s)";
    }

}

function createDiv(){

    let body = document.getElementById('body')

    let div = document.createElement('div');
    div.setAttribute('id','containerJS')

    let h2 = document.createElement('h2');
    h2.innerHTML = "Quantidade necessária";

    let span = document.createElement('span');
    span.setAttribute('id', 'span')

    let imgBeef = document.createElement('img');
    imgBeef.src ="/CSS/assets/carne.png"
    let p_beef = document.createElement('p');
    p_beef.innerHTML = "Quantidade de Carne necessária: ";
    let qtdBeef = document.createElement('p');
    qtdBeef.setAttribute('id','qtdBeef')

    let imgSoda = document.createElement('img');
    imgSoda.src = "/CSS/assets/refri.png";
    let p_soda = document.createElement('p');
    p_soda.innerHTML = 'Quantidade de Bebidas necessárias:';
    let qtdSoda = document.createElement('p');
    qtdSoda.setAttribute('id','qtdSoda')
    
    let imgBeer = document.createElement('img');
    imgBeer.src = "/CSS/assets/cerveja.png";
    let p_beer = document.createElement('p');
    p_beer.innerHTML = 'Quantidade de Cervejas necessárias:';
    let qtdBeer = document.createElement('p');
    qtdBeer.setAttribute('id','qtdBeer');



    // VIEW APPEND
    body.appendChild(div);
    div.appendChild(h2);
    div.appendChild(span)
    // IMG APPEND;
    div.appendChild(imgBeef);
    div.appendChild(p_beef);
    div.appendChild(qtdBeef)

    div.appendChild(imgSoda);
    div.appendChild(p_soda);
    div.appendChild(qtdSoda);

    div.appendChild(imgBeer);
    div.appendChild(p_beer);
    div.appendChild(qtdBeer);

    addEventListener('click',getData);  
}   

function reset(){
    window.location.reload();
}
