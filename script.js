function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var input = document.getElementById("input").value;
    var output = document.getElementById("output").value;
    var result = document.getElementById("result");

  
    if (input === "celsius" && output==="fahrenheit") {
      var fahrenheit = (temperature * 9/5) + 32;
      result.innerHTML= "Fahrenheit: " + fahrenheit + "°F";
    } else if (input === "celsius" && output=="kelvin") {
      var kelvin = (temperature - 32) * 5/9 + 273.15;
      result.innerHTML = "Kelvin: " + kelvin + "K";
    } else if (input === "celsius" && output=="celsius") {
      var celsius =temperature;
      result.innerHTML = "Celsius: " + celsius +"C";
    }
      else if(input=="fahrenheit" && output=="celsius") {
        var celsius=((temperature-32)*5)/9;
        result.innerHTML="Celsius:" + celsius + "C";
      }
      else if(input=="fahrenheit" && output=="kelvin"){
        var kelvin=((temperature-32)*5/9)+273.15;
        result.innerHTML="Kelvin:" + kelvin +"K";
      }
      else if(input=="fahrenheit" && output=="fahrenheit"){
        var fahrenheit=temperature;
        result.innerHTML="Fahrenheit:" + fahrenheit +"F";
      }
      else if(input=="kelvin" && output=="celsius"){
        var celsius=temperature-273.15;
        result.innerHTML="Celsius:" + celsius + "C";
      }
      else if(input=="kelvin" && output=="fahrenheit"){
        var fahrenheit=((temperature-273.15)*9/5)+32;
        result.innerHTML="Fahrenheit:" + fahrenheit +"F";
      }
      else if(input=="kelvin" && output=="kelvin"){
        var kelvin=temperature;
        result.innerHTML="Kelvin:" + kelvin + "K";
      }    
    
  }