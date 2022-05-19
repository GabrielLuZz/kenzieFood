import { UserService } from '../services/UserService.js';
import { ShowHandler } from "../handlers/ShowHandler.js";
import { FormHandler } from '../handlers/FormHandler.js';
import { AuthHandler } from '../handlers/AuthHandler.js';
import { DashboardHandler } from '../handlers/DashBoardHandler.js';

const verify = await AuthHandler.userVerify();

ShowHandler.headerMain(verify);

const registerProduct = document.getElementById("open");
registerProduct.addEventListener("click", () => { DashboardHandler.addClassList("modal__cadastrar--edit") });

const closeModalButton = document.getElementById("modal__close");
closeModalButton.addEventListener("click", () => { DashboardHandler.removeClassList("modal__cadastrar--edit") });

const openModalEdit = document.getElementById("btn__edit");
openModalEdit.addEventListener("click", () => { DashboardHandler.addClassList("modal__cadastrar--edit") });

const openRemoveProduct = document.getElementById("modal__close");
openRemoveProduct.addEventListener("click", () => { DashboardHandler.removeClassList("modal__cadastrar--edit") });

const openModalRemove = document.getElementById("btn__remove");
openModalRemove.addEventListener("click", () => { DashboardHandler.addClassList("modal__cadastrar--edit") });

const closeModalRemove = document.getElementById("modal__close");
closeModalRemove.addEventListener("click", () => { DashboardHandler.removeClassList("modal__cadastrar--edit") });