let cont = 0;

function pudim(pudim) {
  const bord = document.querySelector(".pudim.selected");
  if (bord) {
    bord.classList.remove("selected");
    cont--;
  }

  pudim.classList.add("selected");
  cont++;

  confirmed();
}

function cola(cola) {
  const bord = document.querySelector(".cola.selected");
  if (bord) {
    bord.classList.remove("selected");
    cont--;
  }

  cola.classList.add("selected");
  cont++;

  confirmed();
}

function chicken(chicken) {
  const bord = document.querySelector(".chicken.selected");
  if (bord) {
    bord.classList.remove("selected");
    cont--;
  }

  chicken.classList.add("selected");
  cont++;

  confirmed();
}

function confirmed() {
  if (cont === 3) {
    const confirmed = document.querySelector(".confirmacao");
    confirmed.classList.add("confirmed");

    const link = document.querySelector(".hidden");
    link.classList.remove("hidden");

    const esconder = document.querySelector(".esconder");
    esconder.classList.add("hidden");
  }
}

function zapzap() {
  const mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada\n- Sobremesa: Pudim\nTotal: R$ 27.70`;

  const url = "https://wa.me/5581996087547?text=";

  const codification = encodeURIComponent(mensagem);

  console.log(codification);

  window.open(url + codification, "_blank");
}
