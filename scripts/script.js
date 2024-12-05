function cascadaImagen() {
	let cascada = document.createElement("span");
	let size = Math.random() * 200;
	let seccion = document.querySelector(".modal-images-container");

	let imagenes = [
		'url("./images/modal-01.webp"',
		'url("./images/modal-02.webp"',
		'url("./images/modal-03.webp"',
		'url("./images/modal-04.webp"',
		'url("./images/modal-05.webp"',
		'url("./images/modal-06.webp"',
	];

	let contenedor = seccion.getBoundingClientRect();

	let width = 50 + size;
	let height = 50 + size;

	let maxLeft = contenedor.width - width;

	cascada.style.left = Math.random() * maxLeft + "px";

	let background = imagenes[Math.floor(Math.random() * imagenes.length)];

	cascada.style.width = width + "px";
	cascada.style.height = height + "px";
	cascada.style.backgroundImage = background;

	seccion.appendChild(cascada);

	setTimeout(() => {
		cascada.remove();
	}, 20000);
}
