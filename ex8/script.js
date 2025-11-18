function cor(){
    let t = document.getElementById("t")
    if(t.style.color == "white"){
        t.style.color = "black"
        t.innerText = "TEMA CLARO"
        document.body.style.backgroundColor = "white"
    }else{
        t.style.color = "white"
        t.innerText = "TEMA ESCURO"
        document.body.style.backgroundColor = "black"
    }
}