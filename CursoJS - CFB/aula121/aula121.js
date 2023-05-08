const f_texto = document.querySelector("#f_texto")
const p_texto = document.querySelector("#p_texto")
const btn_texto = document.querySelector("#btn_texto")

btn_texto.addEventListener("click",(evt)=>{
    
})

let num = 10
const curso = "JavaScript"
// localStorage.setItem("nome","bruno")
// localStorage.setItem("canal","CFB Cursos")
// localStorage.setItem("curso",curso)
// localStorage.setItem("numero",num)
// // alert(localStorage.length)
// alert(localStorage.getItem(localStorage.key(0)))
// localStorage.setItem("numero",33)
// alert(localStorage.getItem("nome"))
// alert(localStorage.getItem("canal"))
// alert(localStorage.getItem("curso"))
localStorage.clear()

sessionStorage.setItem("nome","bruno")
sessionStorage.setItem("canal","CFB Cursos")
sessionStorage.setItem("curso",curso)