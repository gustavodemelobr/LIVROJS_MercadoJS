const frm = document.querySelector("form");
const mostraPromocao = document.querySelector("#outPromocao");
const mostra3Produto = document.querySelector("#out3Produto");

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);

    const prod2 = preco * 2;
    const prod3 = preco * 0.50;
    const total = prod2 + prod3;

    mostraPromocao.innerText = `${produto} - Promoção: Leve 03 por R$: ${total.toFixed(2)}`;
    mostra3Produto.innerText = `O 3º produto custa apenas R$: ${prod3.toFixed(2)}`;

    e.preventDefault();
})