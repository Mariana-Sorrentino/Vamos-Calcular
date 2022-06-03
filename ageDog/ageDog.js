function calcDogAge() {
    var dogName = document.getElementById("dogName").value;
    var dogAge = document.getElementById("dogAge").value;


    //Os primeiros dois anos de vida de um cão contam como 10,5 anos cada.
    let earlyYears  = 2;
    earlyYears *= 10.5;

    // retirando 2 anos da minha idade
    let laterYears = dogAge - 2;

    //Multiplique a variável laterYears por 4 para calcular o número de anos do cão contabilizados pelos seus últimos anos. 
    laterYears *=4;

    console.log(earlyYears);
    console.log(laterYears);

    //Adicione earlyYears e laterYears e armazene isso em uma variável chamada myAgeInDogYears.

    let ageInHumanYears = earlyYears + laterYears;

    document.getElementById("results").innerHTML = ageInHumanYears + " anos";

    console.log(`Incrível ${dogName}. Sua idade de doquinho é ${dogAge} e em humanos seria ${ageInHumanYears} anos.`);

    
        var jovem = "Incrível, o(a) " + dogName + " ainda é bem jóvem!";
        var maduro = "incrível, o(a) " + dogName + " está na flor da idade!";
        var velho = "Que pena, o(a) " + dogName + " está ficando velhinho(a)!";
        var idoso= "Que pena, o(a) " + dogName + " já é bem velhinho(a)!";          
    
        if (ageInHumanYears < 30) {
            document.getElementById("classification").innerHTML = jovem;
            document.getElementById("classification").style.background = "#009c2f";
        } else if (ageInHumanYears >=30 && ageInHumanYears < 50) {
            document.getElementById("classification").innerHTML = maduro;
            document.getElementById("classification").style.background = "#00b7ff";
        } else if (ageInHumanYears >= 50 && ageInHumanYears < 70) {
            document.getElementById("classification").innerHTML = velho;
            document.getElementById("classification").style.background = "#2b6eff";
        }else if(ageInHumanYears >= 70) {
            document.getElementById("classification").innerHTML = idoso;
            document.getElementById("classification").style.background = "#c70000";
        }
    }
