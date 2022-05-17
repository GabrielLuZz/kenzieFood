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
closeModalButton.addEventListener("click", ()=>{closeModal("modal_cadastro")})


