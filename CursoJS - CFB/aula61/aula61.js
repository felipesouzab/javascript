const Pessoa = {
    nome : document.querySelector("#f_nome"),
    idade : document.querySelector("#f_idade"),
    
    getNome:function(){
        return this.nome
    },getIdade:function(){
        return this.idade
    },
    setNome:function(nome){
        this.nome = nome
    }
    ,
    setIdade:function(idade){
        this.idade = idade
    }
}

const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

btn_add.addEventListener("click",()=>{
    const div = document.createElement("div")
    div.setAttribute("class","pessoa")
    div.innerHTML = `Nome: ${Pessoa.getNome().value} <br> Idade: ${Pessoa.getIdade().value}`
    res.appendChild(div)

    Pessoa.setNome = ""
    Pessoa.setIdade = ""
    Pessoa.getNome().value = ""
    Pessoa.getIdade().value = ""
    Pessoa.getNome().focus()

    

})
