//Array = VETOR
let nome_cursos = ["S.I", "FISICA", "AGRONOMIA"];
let desc_cursos = [
  "Curso de programação",
  "Curso de fazer conta",
  "Curso de carpi um lote",
];

function monta_card() {
  let conteudo = document.getElementById("conteudo");
  let botao = document.getElementById("botao");

  for (let i = 0; i < nome_cursos.length; i++) {
    let montagem = `<div class="card">
      <h3>${nome_cursos[i]}</h3>
      <p> ${desc_cursos[i]}</p>
    </div>`;

    conteudo.innerHTML += montagem;
  }
  botao.style.display = "none";
}
