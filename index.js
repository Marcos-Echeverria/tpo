const form = document.querySelector(".contact-main");
const inputs = document.querySelectorAll(".contact-input");
const iconErrors = document.querySelectorAll(".contact-error");
const expressions = {
	username: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const validarFormulario = (e) => {	
	switch (e.target.name) {
		case "username":
			if(expressions.username.test(e.target.value)){
				document.getElementById("contact-username").classList.remove("contact-seccion-incorrect");
				document.getElementById("contact-username").classList.add("contact-seccion-correct");
				document.querySelector("#contact-username i").classList.add("fa-circle-check")
				document.querySelector("#contact-username i").classList.remove("fa-circle-xmark")
			} else{
				document.getElementById("contact-username").classList.add("contact-seccion-incorrect");
				document.getElementById("contact-username").classList.remove("contact-seccion-correct");
				document.querySelector("#contact-username i").classList.add("fa-circle-xmark")
				document.querySelector("#contact-username i").classList.remove("fa-circle-check")
			}

		break
		case "name":
			
		break
		case "pass":
			
		break
		case "pass2":
			
		break
		case "email":
			
		break
		case "telphon":
			
		break
	};
};
inputs.forEach((input) =>{
	input.addEventListener("keyup", validarFormulario);
	input.addEventListener("blur", validarFormulario);
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
} );