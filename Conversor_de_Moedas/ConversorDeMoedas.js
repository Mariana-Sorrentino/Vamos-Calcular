function ConverterDolar (){
    var valorElementoDolar = document.getElementById("valorDolar");
    var valorDolarUn = document.getElementById("valorDolarUn").value;


    var valor = valorElementoDolar.value;
    var valorEmDolarNumerico = parseFloat(valor);
      
    var valorEmRealCalc = valorEmDolarNumerico * valorDolarUn    
    var valorEmReal = valorEmRealCalc.toFixed(2);
    
    var elementoValorConvertidoDolar =  document.getElementById("valorConvertidoDolar");
    var valorConvertidoDolar = valorEmReal;
    elementoValorConvertidoDolar.innerHTML = "R$ " + valorConvertidoDolar;
  }
  
  function ConverterEuro (){
    var valorElementoEuro = document.getElementById("valorEuro");
    var valorEuroUn = document.getElementById("valorEuroUn").value;

    var valor = valorElementoEuro.value;
    var valorEmEuroNumerico = parseFloat(valor);
      
    var valorEmRealCalc = valorEmEuroNumerico * valorEuroUn
    var valorEmReal = valorEmRealCalc.toFixed(2);
     
    
    var elementoValorConvertidoEuro =  document.getElementById("valorConvertidoEuro");
    var valorConvertidoEuro = valorEmReal;
    elementoValorConvertidoEuro.innerHTML = "R$ " + valorConvertidoEuro ;
  }