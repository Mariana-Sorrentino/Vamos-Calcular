function calcImc() {
    var name = document.getElementById("name").value;
    var weigh = document.getElementById("weigh").value;
    var height = document.getElementById("height").value;

   var imcCalc = weigh / (height * 2) 
   
   var imc = imcCalc.toFixed(1);
    
    document.getElementById("results").innerHTML = imc + " Kg/m²";

    console.log(`Incrível ${name}. Seu imc é: ${imc}!`);

    
        var baixo = "Cuidado, " + name + ". Você está abaixo do peso!";
        var normal = "incrível, " + name + ". Você está com peso ideal!";
        var sobrepeso = "Cuidado, " + name + ". Você está com sobrepeso!";
        var obesidadeI= "Cuidado, " + name + ". Você está com Obesidade I!"; 
        var obesidadeII= "Cuidado, " + name + ". Você está com Obesidade II!"; 
        var obesidadeIII= "Cuidado, " + name + ". Você está com Obesidade III!";  
    
        if (imc <= 18.5) {
            document.getElementById("classification").innerHTML = baixo;
            document.getElementById("classification").style.background = "#79ffa1";
        } else if (imc > 18.5 && imc <= 24.9) {
            document.getElementById("classification").innerHTML = normal;
            document.getElementById("classification").style.background = "#009c2f";
        } else if (imc > 24.9 && imc <= 29.9) {
            document.getElementById("classification").innerHTML = sobrepeso;
            document.getElementById("classification").style.background = "#fffb00";
        }  else if (imc > 29.9 && imc <= 34.9) {
            document.getElementById("classification").innerHTML = obesidadeI;
            document.getElementById("classification").style.background = "#ffaa2b";
        } else if (imc > 34.9 && imc <= 39.9) {
            document.getElementById("classification").innerHTML = obesidadeII;
            document.getElementById("classification").style.background = "#ff7300";
        } else if (imc > 39.9) {
            document.getElementById("classification").innerHTML = obesidadeIII;
            document.getElementById("classification").style.background = "#ff0000";
        }
    }
