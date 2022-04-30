const form = document.querySelector(".contact-main");
const inputs = document.querySelectorAll(".contact-input");
const iconErrors = document.querySelectorAll(".contact-error");
const expressions = {
	username: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telphone: /^\d{7,14}$/ // 7 a 14 numeros.
}
const validarFormulario = (e) => {	
	switch (e.target.name) {
		case "username":
			validarCampo(expressions.username, e.target, "username");
		break
		case "name":
			validarCampo(expressions.name, e.target, "name");
		break
		case "pass":
			validarCampo(expressions.password, e.target, "pass");
		break
		case "pass2":
			validarPassword(expressions.password, e.target, "pass2");
		break
		case "email":
			validarCampo(expressions.email, e.target, "email");
		break
		case "telphone":
			validarCampo(expressions.telphone, e.target, "telphone");
		break
	};
};


const validarCampo = (voiced, input, campo) => {
	if(voiced.test(input.value)){
		document.getElementById(`contact-${campo}`).classList.remove("contact-seccion-incorrect");
		document.getElementById(`contact-${campo}`).classList.add("contact-seccion-correct");
		document.querySelector(`#contact-${campo} i`).classList.add("fa-circle-check");
		document.querySelector(`#contact-${campo} i`).classList.remove("fa-circle-xmark");
		document.querySelector(`#contact-${campo} .input-error`).classList.remove("input-error-activo");

	} else{
		document.getElementById(`contact-${campo}`).classList.add("contact-seccion-incorrect");
		document.getElementById(`contact-${campo}`).classList.remove("contact-seccion-correct");
		document.querySelector(`#contact-${campo} i`).classList.add("fa-circle-xmark");
		document.querySelector(`#contact-${campo} i`).classList.remove("fa-circle-check");
		document.querySelector(`#contact-${campo} .input-error`).classList.add("input-error-activo");

	}	
}

const validarPassword = () => {
	const inputPassword1 = document.getElementById("password1")
	const inputPassword2 = document.getElementById("password2")

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById("contact-pass2").classList.add("contact-seccion-incorrect");
		document.getElementById("contact-pass2").classList.remove("contact-seccion-correct");
		document.querySelector(`#contact-${campo} i`).classList.add("fa-circle-xmark");
		document.querySelector(`#contact-${campo} i`).classList.remove("fa-circle-check");
		document.querySelector(`#contact-${campo} .input-error`).classList.add("input-error-activo");
	}
};

inputs.forEach((input) =>{
	input.addEventListener("keyup", validarFormulario);
	input.addEventListener("blur", validarFormulario);
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
} );