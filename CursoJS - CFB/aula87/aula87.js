const url = document.getElementById("url")
const btn_url = document.getElementById("btn_url")

btn_url.addEventListener("click",(evt)=>{
    window.location = "https://google.com.br"
    // window.location.replace("https://google.com.br")
    // window.location.assign("https://google.com.br")
    // window.location.reload()
    // window.history.forward()
    // window.history.go(1)
    // console.log(url.value)
    // window.location = url.value
})