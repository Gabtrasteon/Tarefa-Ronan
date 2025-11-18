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
    function contagem(){
        return carrinho.length
    }

    function verItem(id){
        return carrinho[id]
    }
    return{
        contagem: contagem,
        addCarrinho: addCarrinho,
        verItem: verItem
    }
}
let compra = carrinho()
let mercadin = mercado()

let compras = document.getElementsByClassName('compras')
trocar(compras)
let produtos = document.getElementById('produtos')
let botao = document.getElementsByClassName('botao')
function trocar(valor){
    for(let i=0;i<valor.length;i++){
        if(window.getComputedStyle(valor[i]).display == "inline-block"){
            valor[i].style.display = 'none'
        }else{
            valor[i].style.display = 'inline-block'
        }
    }
}
function comprar(){
    produtos.style.display = 'block'
    produtos.innerHTML = `Digite o numero do produto que deseja<br>`
    for(let i=0;i<mercadin.contagem();i++){
        produtos.innerHTML += `${i} - ${mercadin.idProduto(i)} - ${mercadin.idDescricao(i)}<br>`
    }
    trocar(compras)
    trocar(botao)
}
function enviar(){
    let opcao = Number(document.getElementsByClassName('compras')[0].value) 
    compra.addCarrinho(opcao)
    produtos.style.display = 'none'
    trocar(compras)
    trocar(botao)
}
function verCarrinho(){
    document.getElementById('voltar').style.display = 'block'
    produtos.style.display = 'block'
    produtos.innerHTML = ''
    for(let i=0;i<compra.contagem();i++){
        produtos.innerHTML += `${i+1} - ${mercadin.idProduto(compra.verItem(i))} -- ${mercadin.idDescricao(compra.verItem(i))}<br>`
    }
    trocar(botao)
}
function voltar(){
    document.getElementById('voltar').style.display = 'none'
    trocar(botao)
    produtos.style.display = 'none'

}
