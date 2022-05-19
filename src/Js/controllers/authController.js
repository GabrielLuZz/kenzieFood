import { UserService } from '../services/UserService.js'
import { FormHandler } from '../handlers/FormHandler.js'
import { AuthHandler } from '../handlers/AuthHandler.js';


const goRegister = document.getElementById("optionRegister");
goRegister.addEventListener("click", () => {
    const modal = document.getElementById("modal_cadastro");
    modal.classList.add("show");
});


const closeModalButton = document.getElementById("fechar_modal");
closeModalButton.addEventListener("click", () => {
    const modal = document.getElementById("modal_cadastro");
    modal.classList.remove("show");
});


const formLogin = document.getElementById("form_Login");
const form = document.getElementById("form_Cadastro");

form.addEventListener("submit", async(event) => {
    event.preventDefault();
    const data = FormHandler.receiveData(event);

    if (await AuthHandler.register(data)) {
        alert("Cadastrado com sucesso");
        window.location.href = "../../index.html"
    } else {
        alert("Usuário já existente!")
    }
});

formLogin.addEventListener("submit", async(event) => {
    event.preventDefault();
    const dados = FormHandler.receiveData(event);

    if (await AuthHandler.login(dados)) {
        window.location.href = "../../index.html"

    } else {
        alert("Email e/ou senha incorretos!")
    }
});