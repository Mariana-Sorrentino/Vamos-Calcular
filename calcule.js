//COD MAH
/*var abrir = true; //Variável que vai manipular o botão Exibir/ocultar

function exibir() {
    document.getElementById('open').style.display = "flex";
}

function ocultar() {
    document.getElementById('open').style.display = "none";
}

function openMenu() { // Quando clicar no botão.

    if (abrir) {//Se a variável visibilidade for igual a true, então...
        document.getElementById('open').style.display = "none";//Ocultamos a div
        abrir = false;//alteramos o valor da variável para falso.
    } else {//ou se a variável estiver com o valor false..
        document.getElementById('open').style.display = "flex";//Exibimos a div..
        abrir = true;//Alteramos o valor da variável para true.
    }
}*/

//COD FER
//  var cont = 0;   
   
//  function openMenu(){
//     cont = cont + 1;
//      if(cont %2 !=0){
//          document.getElementById('open').style.display = "none";           
//       }else{
//          document.getElementById('open').style.display = "flex";
//       }
//  }


// Cod Fer + animação
var cont = 0;  
   
function openMenu() {
    var target = document.getElementById('open');
    var player = target.animate([
    {transform: 'translate(700px, 0)'},
    {transform: 'translate(0, 0)'}
    ], 500);
    player.addEventListener('finish', function() {
    target.style.transform = 'translate(0, 0)';    
    });

    cont = cont + 1;
    if(cont %2 !=0){
        document.getElementById('open').style.display = "none";
        document.getElementById('btnMenu').innerHTML = "Menu";     
    }else{
        document.getElementById('open').style.display = "flex";
        document.getElementById('btnMenu').innerHTML = "Fechar Menu";         
    }
}