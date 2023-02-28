const resultadopessoa = document.querySelector('#txt4')
const resultadototal = document.querySelector('#txt5')

const b5 = document.querySelector('#botao5')
var b10 = document.querySelector('#botao10')
var b15 = document.querySelector('#botao15')
var b25 = document.querySelector('#botao20')
var b50 = document.querySelector('#botao50')


function calcularGor5() {

    const valor = document.querySelector('#input-bill');
    const people = document.querySelector('#input-people');

    if (valor.value !== "" && people.value !== "") {

        valorGorjetaPessoa = ((valor.value / 100) * 5) / people.value;
        valorTotalpessoa = (valor.value / valor.value) + valorGorjetaPessoa;

        resultadopessoa.innerHTML= `\$ ${valorGorjetaPessoa.toFixed(2)}`;
        resultadototal.innerHTML= `\$ ${valorTotalpessoa.toFixed(2)}`;
        console.log(valor.value)

    } else {
        alert('Preencha todos os campos')
    }
}

b5.addEventListener("click", () => {
    calcularGor5();
})