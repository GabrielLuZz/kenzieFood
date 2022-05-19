import { UserService } from '../services/UserService.js'
import { FormHandler } from '../handlers/FormHandler.js'
import { AuthHandler } from '../handlers/AuthHandler.js';
import { Mostrar } from '../handlers/DashBoardHandler.js';

const registerProduct = document.getElementById("optionAddProduct");
registerProduct.addEventListener("click", ()=>{Mostrar.addClassList("modal__product")});

const closeModalButton = document.getElementById("fechar_modal");
closeModalButton.addEventListener("click", ()=>{Mostrar.removeClassList("modal__product")});

const openModalEdit = document.getElementById("edit");
openModalEdit.addEventListener("click", ()=>{Mostrar.addClassList("modal__edit--product")});

const openRemoveProduct = document.getElementById("fechar_modal--edit");
openRemoveProduct.addEventListener("click", ()=>{Mostrar.removeClassList("modal__edit--product")});

const openModalRemove = document.getElementById("remove");
openModalRemove.addEventListener("click", ()=>{Mostrar.addClassList("modal__remove--product")});

const closeModalRemove = document.getElementById("fechar_modal--remove");
closeModalRemove.addEventListener("click", ()=>{Mostrar.removeClassList("modal__remove--product")});