function mercado(){
    let produto = [
        'Banana','abacate','mamao'
    ]
    let descricao = [
        'verde','caroco','amarelo'
    ]
    function contagem(){
        return produto.length
    }
    function idProduto(id){
        return produto[id]
    }
    function idDescricao(id){
        return descricao[id]
    }
    return{
        contagem: contagem,
        idDescricao: idDescricao,
        idProduto: idProduto
    }
}
function carrinho(){
    let carrinho = []
    function addCarrinho(id){
        carrinho.push(id)
    }
    function verItem(id){
        return carrinho[id]
    }
    return{
        addCarrinho: addCarrinho,
        verItem: verItem
    }
}
let compra = carrinho()
let mercadin = mercado()

let produtos = document.getElementById('produtos')

let esc = Number(prompt("Digite o que deseja 1 compra,2 ver compra"))
switch(esc){
    case 1:
        for(let i=0;i<mercadin.contagem();i++){
            produtos.innerHTML += `${mercadin.idProduto(i)} -- ${mercadin.idDescricao(i)}<br>`
        }
        break;
}