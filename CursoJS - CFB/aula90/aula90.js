const objetos = document.getElementById("objetos")

const computador = {
    cpu:"i9",
    ram:"64gb",
    hd:"2tb",
    info:function(){
        
    }

}

const computadores = [
    {
        cpu:"i9",
        ram:"64gb",
        hd:"2tb"
    }, 
    {
        cpu:"i7",
        ram:"32gb",
        hd:"2tb"
    },
    {
        cpu:"i5",
        ram:"16gb",
        hd:"1tb"
    }
]

console.log(computadores)

objetos.innerHTML = JSON.stringify(computadores)