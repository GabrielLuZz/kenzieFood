
import { ProductService } from "../services/ProductService.js";
import { ShowHandler } from "./ShowHandler.js";
import { WarningHandler } from "./WarningHandler.js";

export class DashBoardHandler {

  static addClassList(id) {
    const modal = document.getElementById(id);
    modal.classList.add("show");
  }

  static setEventFilters(products) {
    const filters = document.querySelectorAll(".menu__item");

    filters.forEach((filter) => {
      filter.addEventListener("click", (event) => {
        const children = event.currentTarget.children;
        const category = children[children.length - 1].innerText;

        const filtered = ShowHandler.filterPerCategory(products, category);

        this.listProductsInDashboard(filtered);
        ShowHandler.changeTheSelected(event.currentTarget);
      });
    });
  }

  static setEventSearch(products) {
    const rightSide__field = document.querySelector(".rightSide__field");

    rightSide__field.addEventListener("keyup", (event) => {
      const text = event.currentTarget.value;

      if (text) {
        const searched = ShowHandler.searchedProducts(text, products);
        this.listProductsInDashboard(searched);
      } else {
        this.listProductsInDashboard(products);
      }
    });
  }

  static removeClassList(id) {
    const modal = document.queryComma(id);
    modal.classList.remove("show");
  }


  static async listProductsInDashboard(privateProducts) {
    if (!privateProducts) {
      privateProducts = await ProductService.getPrivateProducts(
        localStorage.getItem("Token")
      );

      this.setEventFilters(privateProducts);
      this.setEventSearch(privateProducts);
    }

    const mainBody = document.querySelector(".body");
    mainBody.innerText = "";

    privateProducts.forEach((product) => {
      const card = document.createElement("article");
      const card__product = document.createElement("div");
      const card__image = document.createElement("img");
      const card__title = document.createElement("h3");
      const card__categories = document.createElement("div");
      const card__category = document.createElement("span");
      const card__description = document.createElement("div");
      const card__text = document.createElement("p");
      const card__actions = document.createElement("div");
      const card__btnEdit = document.createElement("button");
      const card__btnRemove = document.createElement("button");

      card.classList.add("card");
      card__product.classList.add("card__product");
      card__image.classList.add("card__image");
      card__image.src = product.imagem;
      card__image.alt = product.nome;
      card__title.classList.add("card__title");
      card__title.innerText = product.nome;
      card__categories.classList.add("card__categories");
      card__category.classList.add("card__category");
      card__category.innerText = product.categoria;
      card__description.classList.add("card__description");
      card__text.classList.add("card__text");
      card__text.innerText = product.descricao;
      card__actions.classList.add("card__actions");
      card__btnEdit.classList.add("card__btn");
      card__btnEdit.classList.add("card__btn--edit");
      card__btnEdit.innerHTML =
        '<img src="../assets/images/edit.png" alt="edit image">';
      card__btnRemove.classList.add("card__btn");
      card__btnRemove.classList.add("card__btn--remove");
      card__btnRemove.innerHTML =
        '<img src="../assets/images/trash.png" alt="trash image">';

      card__btnEdit.addEventListener("click", (event) => {
        this.modalDashboard(event, product);
      });

      card__btnRemove.addEventListener("click", (event) => {
        this.modalDashboard(event, product);
      });

      card.append(
        card__product,
        card__categories,
        card__description,
        card__actions
      );
      card__product.append(card__image, card__title);
      card__categories.appendChild(card__category);
      card__description.appendChild(card__text);
      card__actions.append(card__btnEdit, card__btnRemove);

      mainBody.appendChild(card);
    });
  }

  static createForm(product = null) {
    const modal__body = document.querySelector(".modal__body");
    modal__body.innerText = "";

    if (product === null) {
      modal__body.innerHTML = `
        <form class="modal__form" action="">
          <label class="modal__label">
              <div class="modal__category">Nome do Produto</div>
              <input class="modal__field modal__field--input" type="text" placeholder="Pizza Vegetariana de Brócolis" name="nome">
          </label>

          <label class="modal__label">
              <div class="modal__category">Descrição</div>
              <textarea class="modal__field modal__field--textarea" name="descricao" placeholder="Esse é um dos sabores de pizza mais pedidos por quem não come carne"></textarea>
          </label>

          <label class="modal__label">
            <div class="modal__category">Categorias</div>
            
            <label class="modal__field modal__field--radio modal__field--salmon" id="panificadora">
                <input type="radio" name="categoria" value="Panificadora" >
                Panificadora
            </label>

            <label class="modal__field modal__field--radio modal__field--gray" id="frutas">
                <input type="radio" name="categoria" value="Frutas" >
                Frutas
            </label>

            <label class="modal__field modal__field--radio modal__field--gray" id="bebidas">
                <input type="radio" name="categoria" value="Bebidas">
                Bebidas
            </label>
          </label>

          <label class="modal__label">
              <div class="modal__category">Valor do Produto</div>
              <input class="modal__field modal__field--input" type="number" name="preco" placeholder="50.00" >
          </label>

          <label class="modal__label">
              <div class="modal__category">Link da imagem</div>
              <input class="modal__field modal__field--input" type="url" name="imagem" placeholder="https://images.unsplash.com/" >
          </label>

        </form>      
      `;

      const selecionado = document.querySelector(".modal__field");
      selecionado.focus();
    } else {
      modal__body.innerHTML = `
          <form class="modal__form" action="">
            <label class="modal__label">
                <div class="modal__category">Nome do Produto</div>
                <input class="modal__field modal__field--input" type="text" placeholder="Pizza Vegetariana de Brócolis" name="nome" value="${
                  product.nome
                }">
            </label>
  
            <label class="modal__label">
                <div class="modal__category">Descrição</div>
                <textarea class="modal__field modal__field--textarea" name="descricao" placeholder="Esse é um dos sabores de pizza mais pedidos por quem não come carne">${
                  product.descricao
                }</textarea>
            </label>
  
            <label class="modal__label">
              <div class="modal__category">Categorias</div>
              
              <label class="modal__field modal__field--radio ${
                product.categoria.toLowerCase() === "panificadora"
                  ? "modal__field--salmon"
                  : "modal__field--gray"
              }" id="panificadora">
                  <input type="radio" name="categoria" ${
                    product.categoria.toLowerCase() === "panificadora"
                      ? "checked"
                      : ""
                  } value="Panificadora" >
                  Panificadora
              </label>
  
              <label class="modal__field modal__field--radio ${
                product.categoria.toLowerCase() === "frutas"
                  ? "modal__field--salmon"
                  : "modal__field--gray"
              }" id="frutas">
                  <input type="radio" name="categoria" ${
                    product.categoria.toLowerCase() === "frutas"
                      ? "checked"
                      : ""
                  } value="Frutas" >
                  Frutas
              </label>
  
              <label class="modal__field modal__field--radio ${
                product.categoria.toLowerCase() === "bebidas"
                  ? "modal__field--salmon"
                  : "modal__field--gray"
              }" id="bebidas">
                  <input type="radio" name="categoria" ${
                    product.categoria.toLowerCase() === "bebidas"
                      ? "checked"
                      : ""
                  } value="Bebidas">
                  Bebidas
              </label>
            </label>
  
            <label class="modal__label">
                <div class="modal__category">Valor do Produto</div>
                <input class="modal__field modal__field--input" type="number" name="preco" value="${
                  product.preco
                }" placeholder="50.00" >
            </label>
  
            <label class="modal__label">
                <div class="modal__category">Link da imagem</div>
                <input class="modal__field modal__field--input" type="url" name="imagem" value="${
                  product.imagem
                }" placeholder="https://images.unsplash.com/" >
            </label>
  
          </form>      
        `;
    }

    document.querySelectorAll(".modal__field--radio").forEach((radio) => {
      radio.addEventListener("click", (e) => {
        document.querySelectorAll(".modal__field--radio").forEach((item) => {
          item.classList.remove("modal__field--salmon");
        });

        e.currentTarget.classList.add("modal__field--salmon");
      });
    });
  }

  static modalDashboard(event, product) {
    const btn__class = event.currentTarget.classList;
    const modal = document.querySelector(".modal");
    const aside = document.querySelector("aside");
    const modal__title = document.querySelector(".modal__title");
    const cancelButton = document.querySelector(".modal__btn--gray");
    const sendButton = document.querySelector(".modal__btn--salmon");
    const modal__body = document.querySelector(".modal__body");
    modal__body.classList.remove("modal__remove");

    sendButton.removeEventListener("click", this.sendModal);

    aside.classList.add("show");
    if (btn__class.contains("card__btn--edit")) {
      modal.setAttribute("data-id", product.id);
      modal__title.innerText = "Edição de produto";
      this.createForm(product);
      modal.setAttribute("data-acao", "editar");
    } else if (btn__class.contains("card__btn--remove")) {
      modal.setAttribute("data-id", product.id);
      modal__title.innerText = "Exclusão de produto";
      modal__body.innerHTML = "";
      modal__body.innerHTML =
        '<strong style="font-weight:500;">Tem certeza que deseja exluir este produto?</strong>';
      modal__body.classList.add("modal__remove");

      modal.setAttribute("data-acao", "excluir");
    } else {
      modal__title.innerText = "Cadastro de produto";
      modal.setAttribute("data-acao", "adicionar");
      DashBoardHandler.createForm();
    }

    cancelButton.addEventListener("click", () => {
      aside.classList.remove("show");
    });

    sendButton.addEventListener("click", DashBoardHandler.sendModal);
  }

  static async sendModal(event) {
    event.currentTarget.removeEventListener("click", this.sendModal);
    const acao = event.currentTarget
      .closest(".modal")
      .getAttribute("data-acao");
    const modal = document.querySelector(".modal");
    const aside = document.querySelector("aside");

    const selected = document.querySelector(".menu__item--selected");

    if (!selected.classList.contains("menu__item--all")) {
      selected.classList.remove("menu__item--selected");
      const all = document.querySelector(".menu__item--all");
      all.classList.add("menu__item--selected");
    }

    WarningHandler.clearWarnings();
    if (acao === "editar" || acao === "adicionar") {
      const data = Object.fromEntries(
        new FormData(document.querySelector(".modal__form")).entries()
      );
      const product__id = modal.getAttribute("data-id");
      if (acao === "editar") {
        const response = await ProductService.editProduct(
          localStorage.getItem("Token"),
          data,
          product__id
        );

        if (response === "Produto Atualizado") {
          WarningHandler.showWarning("Produto atualizado com sucesso!", false);
          aside.classList.remove("show");
          DashBoardHandler.listProductsInDashboard();
        } else {
          WarningHandler.showWarning("Ocorreu um erro :(");
        }
      } else {
        const response = await ProductService.createProduct(
          localStorage.getItem("Token"),
          data
        );

        if (response.id) {
          WarningHandler.showWarning("Produto adicionado com sucesso!", false);
          aside.classList.remove("show");
          DashBoardHandler.listProductsInDashboard();
        } else {
          WarningHandler.showWarning("Ocorreu um erro :(");
        }
      }
    } else {
      const product__id = modal.getAttribute("data-id");

      const response = await ProductService.deleteProduct(
        localStorage.getItem("Token"),
        product__id
      );

      if (response) {
        WarningHandler.showWarning("Produto excluído com sucesso!", false);
        aside.classList.remove("show");
        DashBoardHandler.listProductsInDashboard();
      } else {
        WarningHandler.showWarning("Ocorreu um erro :(");
      }
    }
  }

  static closeModal() {
    const aside = document.querySelector("aside");
    aside.classList.remove("show");
  }

}
