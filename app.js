var rafa = { nome: "Rafa",foto:"https://avatars.githubusercontent.com/u/54322854?v=4", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
var paulo = { nome: "Paulo", foto:"https://pbs.twimg.com/profile_images/930602367887822850/2v0lXfIR_400x400.jpg",vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };
var gui = { nome: "Gui", foto:"https://www.alura.com.br/assets/img/imersoes/instrutores/guilherme_lima.1636535198.jpg",vitorias: 1, empates: 1, derrotas: 2, pontos: 0 }; 
var novoJogador = {nome:"" , foto: "", vitorias:0 ,empates:0, derrotas:0, pontos:0};

function adicionarJogador() {
    var nomeJogador = document.getElementById("nomeJogador").value;
    document.getElementById("nomeJogador").value = "";
    var fotoJogador = document.getElementById("fotoJogador").value;
    document.getElementById("fotoJogador").value = "";
    
    novoJogador.nome = nomeJogador
    novoJogador.foto = fotoJogador
    jogadores.push(novoJogador)
    exibeJogadoresNaTela(jogadores)
  }
function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);

var jogadores = [rafa, paulo, gui];

console.log(jogadores);

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td><img src=" + jogadores[i].foto + "></td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      " <td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    (" </tr>");
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;

  exibeJogadoresNaTela(jogadores);
}

function resetarJogo() {
    for (var i = 0; i < jogadores.length; i++) {
      jogadores[i].vitorias = 0;
      jogadores[i].derrotas = 0;
      jogadores[i].empates = 0;
      jogadores[i].pontos = 0;
    }
    exibeJogadoresNaTela(jogadores);
  }