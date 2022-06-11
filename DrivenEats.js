function pudim(pudim) {
  const bord = document.querySelector(".pudim.selected");
  if (bord !== null) {
    bord.classList.remove("selected");
  }

  pudim.classList.add("selected");
}

function cola(cola) {
  const bord = document.querySelector(".cola.selected");
  if (bord !== null) {
    bord.classList.remove("selected");
  }

  cola.classList.add("selected");
}

function chickey(chickey) {
  const bord = document.querySelector(".chickey.selected");
  if (bord !== null) {
    bord.classList.remove("selected");
  }

  chickey.classList.add("selected");
}
