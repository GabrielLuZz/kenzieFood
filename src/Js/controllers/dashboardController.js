import { UserService } from "../services/UserService.js";
import { ShowHandler } from "../handlers/ShowHandler.js";
import { FormHandler } from "../handlers/FormHandler.js";
import { AuthHandler } from "../handlers/AuthHandler.js";

import { DashBoardHandler } from "../handlers/DashBoardHandler.js";

const verify = await AuthHandler.userVerify();

ShowHandler.headerMain(verify);

DashBoardHandler.listProductsinDashboard();

const modal__close = document.querySelector("#modal__close");
modal__close.addEventListener("click", (event) => {
  event.preventDefault();
  DashBoardHandler.closeModal();
});

const modal__forfeit = document.querySelector("#modal__forfeit");
modal__forfeit.addEventListener("click", (event) => {
  event.preventDefault();
  DashBoardHandler.closeModal();
});

const modal__save = document.querySelector("#modal__save");
modal__save.addEventListener("click", (event) => {
  event.preventDefault;
  DashBoardHandler.sendModal(event);
});
