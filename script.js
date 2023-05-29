function convertDegree() {
  var userinput = document.getElementById("temp").value;

  var userselction = document.getElementById("u").value;

  var convertas = 0;
  
  var output= document.getElementById("resultcontainer");

  if ( userselction === "cel") {
    convertas = (userinput * 9 / 5) + 32;
    output.innerHTML =  " = " + convertas+ " °F";
  } else if ( userselction === "fah") {
    convertas = (userinput - 32) * 5 / 9;
    output.innerHTML = " = " + convertas + " °C";
  } else if ( userselction === "kel") {
    convertas = userinput - 273.15;
    output.innerHTML =  " = " + convertas + " °C";
  }
  
}
 