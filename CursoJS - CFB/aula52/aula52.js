const caixa = document.querySelector("#caixa")
let cores= ["Azul", "Verde", "Vermelho",["claro", "escuro" , "medio"]]
let cursos = ["HTML", "CSS", "JavaScript", cores]

console.log(cursos[3][3][2])


cursos.map((el)=>{
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})


// cursos.push("C++")  // Adiciona elementos - push()
// cursos.unshift("Python") // Adiciona elemento no INICIO do array
// cursos.pop() // Remove elementos - pop()
// cursos.shift() // Remove elementos do INICIO do array
