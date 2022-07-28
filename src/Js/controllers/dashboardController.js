import { UserService } from "../services/UserService.js";
import { ShowHandler } from "../handlers/ShowHandler.js";

import { FormHandler } from "../handlers/FormHandler.js";
import { AuthHandler } from "../handlers/AuthHandler.js";
import { DashBoardHandler } from "../handlers/DashBoardHandler.js";
import { ProductService } from "../services/ProductService.js";
import { WarningHandler } from "../handlers/WarningHandler.js";

let products = await ProductService.getPrivateProducts(
  localStorage.getItem("Token")
);

const verify = await AuthHandler.userVerify();

if (verify) {
  ShowHandler.headerMain(verify);

  DashBoardHandler.listProductsInDashboard(products);

  const open = document.querySelector(".open");
  const modal__close = document.querySelector(".modal__close");

  // open.addEventListener('click', () => {
  //     aside.style.opacity = 0;

  //     aside.style.display = "flex";

  //     setTimeout(() => {

  //         aside.style.opacity = 1;

  //     }, 200);
  // })

  DashBoardHandler.listProductsInDashboard();

  modal__close.addEventListener("click", (event) => {
    event.preventDefault();
    DashBoardHandler.closeModal();
  });

  // const modal__forfeit = document.querySelector("#modal__forfeit");
  // modal__forfeit.addEventListener("click", (event) => {
  //     event.preventDefault();
  //     DashBoardHandler.closeModal();
  // });

  const productTagAll = document.querySelectorAll(
    ".modal__field.modal__field--radio"
  );
  productTagAll.forEach((tag) => {
    tag.addEventListener("click", (event) => {
      event.preventDefault();
      DashBoardHandler.changeTag(event, productTagAll);
    });
  });

  const add__newProduct = document.querySelector(".open");
  add__newProduct.addEventListener("click", DashBoardHandler.modalDashboard);
} else {
  location.href = "../../index.html";
}
