import { UserService } from "../services/UserService.js";
import { ShowHandler } from "../handlers/ShowHandler.js";

import { FormHandler } from '../handlers/FormHandler.js';
import { AuthHandler } from '../handlers/AuthHandler.js';
import { DashBoardHandler } from '../handlers/DashBoardHandler.js';
import { ProductService } from '../services/ProductService.js';
import { WarningHandler } from '../handlers/WarningHandler.js';


import { DashBoardHandler } from "../handlers/DashBoardHandler.js";

const verify = await AuthHandler.userVerify();

if (verify) {

    ShowHandler.headerMain(verify);



    const products = await ProductService.getPrivateProducts(localStorage.getItem('Token'));
    console.log(products)
    DashBoardHandler.listProductsinDashboard(products)

    const filters = document.querySelectorAll('.menu__item');
    const rightSide__field = document.querySelector('.rightSide__field');
    const open = document.querySelector('.open');
    const modal__close = document.querySelector('.modal__close');



    filters.forEach(filter => {
        filter.addEventListener('click', (event) => {
            const children = event.currentTarget.children;
            const category = children[children.length - 1].innerText;

            const filtered = ShowHandler.filterPerCategory(products, category);

            DashBoardHandler.listProductsinDashboard(filtered)
            ShowHandler.changeTheSelected(event.currentTarget)
        })
    })

    rightSide__field.addEventListener('keyup', (event) => {

        const text = event.currentTarget.value;

        if (text) {
            const searched = ShowHandler.searchedProducts(text, products);
            DashBoardHandler.listProductsinDashboard(searched);
        } else {
            DashBoardHandler.listProductsinDashboard(products)
        }
    })

    open.addEventListener('click', () => {
        aside.style.opacity = 0;

        aside.style.display = "flex";

        setTimeout(() => {

            aside.style.opacity = 1;

        }, 200);
    })




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
add__newProduct.addEventListener("click", (event) => {
  event.preventDefault();
  DashBoardHandler.modalDashboard(event);
});

} else {
    location.href = '../../index.html'
}

