const tela = document.getElementById("telaJogo");
const ctx = tela.getContext("2d");
const pontuancaoTextto = document.getElementById("pontuacao");
const fimDeJogoTexto = document.getElementById("fimDeJogo");
const botaoReiniciar = document.getElementById("botaoReiniciar")
let pontuacao = 0;
fimDeJogo = false;

class Raquete {
    constructor() {
        this.largura = 100;
        this.altura = 10;
        this.x = (tela.width - this.largura) /2;
        this.y = tela.height - this.altura - 10;
        this.velocidade = 8;
        this.dx = 0
    }
    
    desenhar() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.largura,this.altura); 
    }

    mover() {
        this.x += this.x = 0;
        if (this.x + this.largura > tela.widht) this.x = tela.widht - this.largura;
        if (this.x + this.largura > tela.widht) this.x = tela.widht- this.largura;
    }
}