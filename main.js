var qtdAdultos = document.getElementById('qtd_adultos').value;
var qtdKids = document.getElementById('qtd_crianca').value;
var kidsMoreAdults = parseInt(qtdAdultos) + parseInt(qtdKids);

var buttonReset = document.getElementById('button_reset');
buttonReset.removeEventListener('click',createDiv);

var buttonSend = document.getElementById('button');
buttonSend.addEventListener('click',createDiv)

function valores(n1,n2) {   
   media = n1 * n2;
   return media;
}

function getData() {

    const CARNE_FIXO_ADULTO = 400.0;
    const CARNE_FIXO_CRIANCA = 200.0;
    const REFRI_FIXO = 1500; // litros refri 
    const BEBIDAS_FIXO = 4; // LATAS


    let qtdAdultos = document.getElementById('qtd_adultos').value;
    let qtdAdultosAlcool = document.getElementById('qtd_adultos_alcool').value;
    let qtdKids = document.getElementById('qtd_crianca').value;

    kidsMoreAdults = parseInt(qtdAdultos) +  (parseInt(qtdKids) - 0.5); // 0,5 - EVITAR EXCESSO
    console.log(kidsMoreAdults);

    //CÁLCULOS CARNE 
    var calcCarneAdultos = valores(CARNE_FIXO_ADULTO,qtdAdultos);
    var calcCarneAdultosAlcool = valores(CARNE_FIXO_ADULTO,qtdAdultosAlcool);
    let carneAdultos = (calcCarneAdultos + calcCarneAdultosAlcool);
    
    var calcCarneKids = valores(CARNE_FIXO_CRIANCA,qtdKids);
    var calcCarneGeral = parseInt(carneAdultos) + parseInt(calcCarneKids);

    var calcBebidas = valores(BEBIDAS_FIXO,qtdAdultosAlcool); // qtdAdultosAlcool
    var calcRefri = valores(REFRI_FIXO,kidsMoreAdults); //PESSOAS + CRIANÇAS 
    

    qtdSoda.innerHTML = calcRefri + " litros ou " +  (Math.ceil(calcRefri / 2000)) + " garrafa(s) de 2L";
    qtdBeef.innerHTML = calcCarneGeral + "g de Carne equivalente à " + (calcCarneGeral / 1000) + " kg";
    qtdBeer.innerHTML = calcBebidas + " latas equivalente à " + ((calcBebidas * 350)/1000) + "L";


}

function createDiv(){

    let body = document.getElementById('body')

    let div = document.createElement('div');
    div.setAttribute('id','containerJS')

    let h2 = document.createElement('h2');
    h2.innerHTML = "Quantidade necessária";

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

function infoOVER(){
    let alert = document.getElementById('textbox');

    alert.innerHTML = " Desenvolvido por<span></span><br> <a href='https://www.linkedin.com/in/matheus-santeago-443016226/'> Matheus Santeago! </a>";
}
function infoOUT(){
    let alert = document.getElementById('textbox');

    alert.innerHTML = "Insira todos os valores<span></span><br> mesmo que seja igual a zero";
}
  
  

