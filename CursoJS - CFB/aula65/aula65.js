const pessoa = {
    nome: "Bruno",
    canal: "CFB Cursos",
    curso: "JavaScript",
    aulas: {
        aula01: "Intrudoução",
        aula02: "Variáveis",
        aula03: "Condicional"
    }
}

const string_pessoa = `{"nome":"Bruno","canal":"CFB Cursos","curso":"JavaScript","aulas":{"aula01":"Intrudoução","aula02":"Variáveis","aula03":"Condicional"}}`

const s_json_pessoa = JSON.stringify(pessoa)  // converte obejto em string JSON
const o_json_pessoa = JSON.parse(s_json_pessoa) // converte string JSON em objeto


console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa)