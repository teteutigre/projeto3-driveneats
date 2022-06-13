let cont = 0;

let pudim_price = 0;
let cola_price = 0;
let chicken_price = 0;

function chicken(chicken) {
  const bord = document.querySelector(".chicken.selected");
  if (bord) {
    bord.classList.remove("selected");
    cont--;
  }

  chicken.classList.add("selected");
  cont++;

  const price_chicken = document.querySelector(".selected strong");
  chicken_price = Number(price_chicken.innerText);

  console.log(chicken_price);
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

  const price_cola = document.querySelector(".selected strong");
  cola_price = Number(price_cola.innerText);

  console.log(cola_price);
  confirmed();
}

function pudim(pudim) {
  const bord = document.querySelector(".pudim.selected");
  if (bord) {
    bord.classList.remove("selected");
    cont--;
  }

  pudim.classList.add("selected");
  cont++;

  const price_pudim = document.querySelector(".selected strong");
  pudim_price = Number(price_pudim.innerText);

  console.log(pudim_price);
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
  const zap = `Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada\n- Sobremesa: Pudim\nTotal: R$ ${pudim_price},${chicken_price},${cola_price}
  }`;

  const url = "https://wa.me/5581996087547?text=";

  const codification = encodeURIComponent(zap);

  console.log(codification);

  window.open(url + codification, "_blank");
}

function gerazap(f, d, p) {}
