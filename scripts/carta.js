const boton = document.querySelector(".boton");
const parteArriba = document.querySelector(".parte-arriba");
const cartaCerrada = document.querySelector(".carta-cerrada-container");
const cartaAbierta = document.querySelector(".carta-container");
const hoja = document.querySelector(".hoja");
const body = document.querySelector(".body");

boton.addEventListener("click", (e) => {
	boton.style.animation = "boton-animacion 2s ease-in-out forwards";
	parteArriba.style.animation = "parte-arriba-animacion 2s ease-in-out 1s forwards";
	cartaCerrada.style.animation = "carta-cerrada-animacion 2s ease-in-out 1s forwards";
	cartaAbierta.style.animation = "carta-abierta-animacion 2s ease-in-out 2s forwards";
	hoja.style.animation = "hoja-animacion 2s ease-in-out 1s forwards";
	setTimeout(() => {
		body.classList.remove("hidden");
		cartaCerrada.style.display = "none";
		body.style.height = "280vh";
	}, 3500);
});
