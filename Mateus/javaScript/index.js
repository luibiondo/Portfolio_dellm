// Puxando os objetos pelo id
const rmoscow = document.getElementById("rMoscow");
const moscow = document.getElementById("moscow");
const rst = document.getElementById("rSt");
const st = document.getElementById("st");
const cVan = document.getElementById("cVan");
const imgVan = document.getElementById("vancouver");
const atiSp = document.getElementById("atiSp");
const spSc = document.getElementById("spSc");
const spPeruibe = document.getElementById("spPerui");
const atibaia = document.getElementById("atibaia");
const saocarlos = document.getElementById("saocarlos");
const peruibe = document.getElementById("peruibe");

// função para fazer com que quando o mouse entra, passa por cima, ele mostra e quando ele sai, a imagem volta a ficar escondida
function ativarHover(hover, img) {
  hover.addEventListener("mouseenter", () => {
    img.style.display = "block";
  });

  hover.addEventListener("mouseleave", () => {
    img.style.display = "none";
  });
}

// aqui eu chamo a função
ativarHover(rmoscow, moscow);
ativarHover(atiSp, atibaia);
ativarHover(spSc, saocarlos);
ativarHover(cVan, imgVan);
ativarHover(spPeruibe, peruibe);
ativarHover(rst, st);

// Espera o HTML da página ser completamente carregado
//  os arquivos id não estavam entrando antes, ent deixei assim para conseguir rodar
document.addEventListener("DOMContentLoaded", () => {
  // Pega o elemento
  const tylerLink = document.getElementById("tylerLink");
  const tyler = document.getElementById("tyler");

  //mesma função de antes, agora para o tyler
  tylerLink.addEventListener("mouseenter", () => {
    tyler.style.display = "block";
  });
  tylerLink.addEventListener("mouseleave", () => {
    tyler.style.display = "none";
  });
});
