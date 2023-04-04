const objs = document.getElementsByTagName("div")


let num = [10, 20, 30, 40, 50]

for (o of objs) {    // pega os elementos que estão dentro
    console.log(o.innerHTML = "curso")
}

for (o in objs) { // pega a posição dos elementos 
    console.log(objs[o].innerHTML)
}