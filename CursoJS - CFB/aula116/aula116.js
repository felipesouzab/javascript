const long  = document.getElementById("long")
const lati  = document.getElementById("lati")


if(navigator.geolocation){

  navigator.geolocation.getCurrentPosition(mostrarLocalização,erroLocalização)
    


} else {
    console.log("Geolocalização não suportada")
}


function mostrarLocalização (pos){
    lati.innerHTML = `Latitude: ${pos.coords.latitude}`
    long.innerHTML = `Longitude ${pos.coords.longitude}`
   

}

function erroLocalização (){
    console.log("Erro ao obter a localização")
}