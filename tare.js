

function verificar() {
    var vA = document.getElementById('id-valorA');
    var vB = document.getElementById('id-valorB');
    var res = document.getElementById('res');
    var res1 = document.getElementById('res1')

    if(vB.value < vA.value) {
        res.innerHTML = `[ERRO], valor de B não pode ser menor que A`
        res.style.border = '1px solid red'
    } else {
        res1.innerHTML = `Estar tudo certo com os valores!`
        res1.style.border = '1px solid rgb(37, 192, 148'
    }
}