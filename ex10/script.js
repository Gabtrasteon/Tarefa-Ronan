const tabela = document.getElementById("presencas");
const totalAlunos = document.getElementById("totalAlunos");
const presentes = document.getElementById("presentes");
const faltantes = document.getElementById("faltantes");
const btnRelatorio = document.getElementById("gerar");
const saida = document.getElementById("saida");

function atualizarResumo() {
    const linhas = tabela.querySelectorAll("tr");
    const marcados = tabela.querySelectorAll(".presente:checked");

    totalAlunos.innerText = linhas.length;
    presentes.innerText = marcados.length;
    faltantes.innerText = linhas.length - marcados.length;
    linhas.forEach(tr => {
        const chk = tr.querySelector(".presente");
        if (chk.checked) {
            tr.classList.add("ok");
        } else {
            tr.classList.remove("ok");
        }
    });
}
const checks = tabela.getElementsByClassName("presente");
for (let chk of checks) {
    chk.addEventListener("change", atualizarResumo);
}


btnRelatorio.addEventListener("click", () => {
    const linhas = tabela.querySelectorAll("tr");
    let html = "<ol id='relatorio'>";

    linhas.forEach(tr => {
        const nome = tr.querySelector("td.nome").innerText;
        const chk = tr.querySelector(".presente");

        if (!chk.checked) {
            html += "<li>" + nome + "</li>";
        }
    });

    html += "</ol>";
    saida.innerHTML = html;
});

atualizarResumo();