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

    const teste = document.querySelector(".testando");
    teste.classList.remove("testando");

    const esconder = document.querySelector(".esconder");
    esconder.classList.add("testando");
  }
}
