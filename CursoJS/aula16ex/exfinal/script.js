function adicionar() {
    let num = document.getElementById('txtn')
    let n = num.value

    if (n <= 0 || n > 100) {
        alert('Insira um valor entre 1 e 100')
    } else {
        alert('Tudo ok!')
    }
    
}

function finalizar() {
    let tab = document.getElementById('seltab')
    if (tab.value == '') {
    alert('Adicione valores antes de finalizar')
    }
}