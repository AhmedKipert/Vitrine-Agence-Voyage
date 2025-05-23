const sidebar = document.querySelector("aside");
const sideCheck = document.querySelector("#sideCheck");
const container = document.querySelector(".conteneur-principal");
sideCheck.addEventListener("change", () => {
  if (sideCheck.checked) {
    sidebar.style.right = "0px";
    sidebar.style.opacity = "1";
    container.style.filter = "blur(2px)";
  } else {
    sidebar.style.right = "-250px";
    sidebar.style.opacity = "0";
    container.style.filter = "blur(0px)";
  }
});

function confetis() {
  const conf = document.createElement("div");
  const colors = [
    "red",
    "gold",
    "goldenrode",
    "orange",
    "lime",
    "green",
    "white",
    "black",
    "blue",
    "pink",
    "navy",
    "brown",
    "orangered",
    "purple",
    "orange",
  ];
  conf.classList.add("pluie");
  const taille = Math.floor(Math.random() * 15);
  conf.style.position = "fixed";
  conf.style.width = taille + "px";
  conf.style.height = taille + "px";
  conf.style.top = 0;
  conf.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
  conf.style.left = Math.floor(Math.random() * 100) + "vw";
  const duree = Math.floor(Math.random() * 5);
  conf.style.animationDuration = duree + "s";

  conf.style.zIndex = "50";
  if(Math.floor(Math.random() * 5) <= 3) {
    conf.style.borderRadius = "50%"
  }
  document.querySelector("body").appendChild(conf);
  setTimeout(() => {
    conf.remove();
  }, duree * 1000);

  console.log("taille", taille);
}

function boom() {
  for (let i = 0; i < 300; i++) {
    setTimeout(confetis, i * 10);
  }
}
boom()

// Lancer des confetis
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault()
  for (let i = 0; i < 300; i++) {
    setTimeout(confetis, i * 10);
  }
});


