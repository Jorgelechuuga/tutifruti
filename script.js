var proceso;
var contadordepulsaciones=0;
var cont=10;
var contadordetiempo;
document.getElementById("boton").addEventListener('click',empezar);

function empezar(){  
document.getElementById("count").addEventListener('click',contar);
  cont=10;

    proceso = setInterval(function() {
    cont--;
    document.getElementById("time").innerHTML=cont+ "sg";
    console.log("El valor es: "+cont);
  if(cont==0){
  clearInterval(proceso); 
    document.getElementById("count").removeEventListener('click',contar);
  }
  }, 1000);
}

  function contar() {
  contadordepulsaciones++;
document.getElementById("count").innerHTML = contadordepulsaciones;
  }

  function temporizador(){
    var link = document.getElementById("time").value;
  
}