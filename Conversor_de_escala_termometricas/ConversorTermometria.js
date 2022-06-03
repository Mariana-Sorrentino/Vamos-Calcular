function ConverterCeusiusK() {
    var valorElementoCeusiusK = parseFloat(document.getElementById("valorCeusiusK").value); 
  
    var valorEmCeusiusK = valorElementoCeusiusK + 273;
    
     var valorEmCeusiusK = valorEmCeusiusK.toFixed(1);
  
    var elementoValorConvertidoCeusiusK = document.getElementById(
      "valorConvertidoCeusiusK"
    );
    var valorConvertidoCeusiusK = valorEmCeusiusK;
    elementoValorConvertidoCeusiusK.innerHTML = valorConvertidoCeusiusK;
  }
  
  
  
  function ConverterKelvinC() {
    var valorElementoKelvinC = parseFloat(document.getElementById("valorKelvinC").value);
  
    var valorEmKelvinC = valorElementoKelvinC - 273;
    
    var valorEmKelvinC = valorEmKelvinC.toFixed(1);
  
    var elementoValorConvertidoKelvinC = document.getElementById(
      "valorConvertidoKelvinC"
    );
    var valorConvertidoKelvinC = valorEmKelvinC;
    elementoValorConvertidoKelvinC.innerHTML = valorConvertidoKelvinC;
  }
  
  
  
  function ConverterCeusiusF() {
    var valorElementoCeusiusF = parseFloat(document.getElementById("valorCeusiusF").value);
   
    var valorEmCeusiusF = valorElementoCeusiusF * 1.8 + 32;
    
    var valorEmCeusiusF =valorEmCeusiusF.toFixed(1);
  
    var elementoValorConvertidoCeusiusF = document.getElementById(
      "valorConvertidoCeusiusF"
    );
    var valorConvertidoCeusiusF = valorEmCeusiusF;
    elementoValorConvertidoCeusiusF.innerHTML = valorConvertidoCeusiusF;
  }
  
  
  
  function ConverterFahrenheitC() {
    var valorElementoFahrenheitC = parseFloat(document.getElementById("valorFahrenheitC").value); 
  
    var valorEmFahrenheitC = (valorElementoFahrenheitC - 32) / 1.8;
  
    var valorEmFahrenheitC = valorEmFahrenheitC.toFixed(1);
  
    var elementoValorConvertidoFahrenheitC = document.getElementById(
      "valorConvertidoFahrenheitC"
    );
    var valorConvertidoFahrenheitC = valorEmFahrenheitC;
    elementoValorConvertidoFahrenheitC.innerHTML = valorConvertidoFahrenheitC;
  }
  
  
  
  function ConverterKelvinF() {
    var valorElementoKelvinF = parseFloat(document.getElementById("valorKelvinF").value);  
  
    var valorEmKelvinF = ((valorElementoKelvinF - 273) * 1.8) + 32;
  
    var valorEmKelvinF = valorEmKelvinF.toFixed(1);
  
    var elementoValorConvertidoKelvinF = document.getElementById(
      "valorConvertidoKelvinF"
    );
    var valorConvertidoKelvinF = valorEmKelvinF;
    elementoValorConvertidoKelvinF.innerHTML = valorConvertidoKelvinF;
  }
  
  
  
  function ConverterFahrenheitK() {
    var valorElementoFahrenheitK = parseFloat(document.getElementById("valorFahrenheitK").value);
   
    var valorEmFahrenheitK = ((valorElementoFahrenheitK - 32) * 5) / 9 + 273;
    
    var valorEmFahrenheitK = valorEmFahrenheitK.toFixed(1);
  
    var elementoValorConvertidoalorEmFahrenheitK = document.getElementById(
      "valorConvertidoFahrenheitK"
    );
  
    var valorConvertidoFahrenheitK = valorEmFahrenheitK;
    elementoValorConvertidoalorEmFahrenheitK.innerHTML = valorConvertidoFahrenheitK;
  }
  