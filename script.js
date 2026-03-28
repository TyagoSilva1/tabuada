function gerar() {
    var num = document.getElementById('num').value
    var limite = document.getElementById('limite').value
    var res = document.getElementById('res')

    res.innerHTML = ''

    if (num == '' || limite == '') {
        alert('Preencha os campos!')
        return
    }

    num = Number(num)
    limite = Number(limite)

    for (var i = 1; i <= limite; i++) {
        var li = document.createElement('li')
        li.textContent = `${num} x ${i} = ${num * i}`
        res.appendChild(li)
    }
}

function limpar() {
    document.getElementById('res').innerHTML = ''
    document.getElementById('num').value = ''
    document.getElementById('limite').value = ''
}