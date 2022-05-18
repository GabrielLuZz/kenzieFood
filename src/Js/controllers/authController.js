import { UserService } from '../services/UserService.js'
import { FormHandler } from '../handlers/FormHandler.js'
import { AuthHandler } from '../handlers/AuthHandler.js';

const initModal = (modalId)=>{
  const modal = document.getElementById(modalId);
  modal.classList.add("mostrar");
}

const goRegister = document.getElementById("optionRegister");
goRegister.addEventListener("click", ()=> {initModal("modal_cadastro")});

const closeModal = (modalId)=>{
    const modal = document.getElementById(modalId);
    modal.classList.remove("mostrar");
}

const closeModalButton = document.getElementById("fechar_modal");
closeModalButton.addEventListener("click", ()=>{closeModal("modal_cadastro")});


const toHome = ()=>{
    localStorage.clear();
    window.location.href = "http://127.0.0.1:5500/index.html";
}


const buttonGoHome = document.getElementById("goHome");
buttonGoHome.addEventListener("click", toHome);

const formLogin = document.getElementById("form_Login");
const form = document.getElementById("form_Cadastro");

form.addEventListener("submit", async (event)=>{
    event.preventDefault();
    const data = FormHandler.receiveData(event);

    if(await AuthHandler.register(data)){
        alert("Cadastrado com sucesso");
        window.location.href = "http://127.0.0.1:5500/index.html"
    }else{
        alert("Usuário já existente!")
    }
});

formLogin.addEventListener("submit", async (event)=>{
   event.preventDefault();
   const dados = FormHandler.receiveData(event); 
   
   if(await AuthHandler.login(dados)){
    window.location.href = "http://127.0.0.1:5500/index.html"
   }else{
    alert("Email e/ou senha incorretos!")
   }
});


