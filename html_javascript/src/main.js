const formWrapper = document.getElementById('form-wrapper');
const nome = [];
const tel = [];
const email = [];
let linhas = '';

formWrapper.addEventListener('submit', function(e) {
    e.preventDefault()

    addContato();
    atualizarListaDeContatos()
} )

function addContato() {

    const inputNome = document.getElementById('input-nome');
    const inputTel = document.getElementById('input-tel');
    const inputEmail = document.getElementById('input-email');

    if (nome.includes(inputNome.value)) {
        alert(`O nome ${inputNome.value} já existe em seus contatos`)
    }else if (tel.includes(parseInt(inputTel.value))) {
        alert(`O número ${inputTel.value} já existe em seus contatos`)
    }else if (email.includes(inputEmail.value)) {
        alert(`O email ${inputEmail.value} já existe em seus contatos`)
    }else {
         
        nome.push(inputNome.value);
        tel.push(parseInt(inputTel.value));
        email.push(inputEmail.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${parseInt(inputTel.value)}</td>`;
        linha += `<td>${inputEmail.value}</td>`
        linha += `</tr>`

        linhas += linha
    }


    inputNome.value = '';
    inputTel.value = '';
    inputEmail.value = '';
};

function atualizarListaDeContatos() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
};

