
import { ProductService } from "../services/ProductService.js";

export class DashBoardHandler {
    static addClassList(id) {
        const modal = document.getElementById(id);
        modal.classList.add("mostrar");
    }

    static removeClassList(id) {
        const modal = document.getElementById(id);
        modal.classList.remove("mostrar");
    }

    static async listProductsinDashboard() {
        const mainBody = document.querySelector('.body');
        mainBody.innerText = '';

        const privateProducts = await ProductService.getPrivateProducts(localStorage.getItem('Token'));

        privateProducts.forEach(product => {
            const card = document.createElement('article');
            const card__product = document.createElement('div');
            const card__image = document.createElement('img');
            const card__title = document.createElement('h3');
            const card__categories = document.createElement('div');
            const card__category = document.createElement('span');
            const card__description = document.createElement('div');
            const card__text = document.createElement('p');
            const card__actions = document.createElement('div');
            const card__btnEdit = document.createElement('button');
            const card__btnRemove = document.createElement('button');

            card.classList.add('card');
            card__product.classList.add('card__product');
            card__image.classList.add('card__image');
            card__image.src = product.imagem;
            card__image.alt = product.nome;
            card__title.classList.add('card__title');
            card__title.innerText = product.nome;
            card__categories.classList.add('card__categories');
            card__category.classList.add('card__category');
            card__category.innerText = product.categoria;
            card__description.classList.add('card__description');
            card__text.classList.add('card__text');
            card__text.innerText = product.descricao;
            card__actions.classList.add('card__actions');
            card__btnEdit.classList.add('card__btn');
            card__btnEdit.classList.add('card__btn--edit');
            card__btnEdit.innerHTML = '<img src="../assets/images/edit.png" alt="edit image">';
            card__btnRemove.classList.add('card__btn')
            card__btnRemove.classList.add('card__btn--remove');
            card__btnRemove.innerHTML = '<img src="../assets/images/trash.png" alt="trash image">'

            card__btnEdit.addEventListener('click', (event) => {
                this.modalDashboard(event, product);
            })

            card__btnRemove.addEventListener('click', (event) => {
                this.modalDashboard(event, product);
            })


            card.append(card__product, card__categories, card__description, card__actions);
            card__product.append(card__image, card__title);
            card__categories.appendChild(card__category);
            card__description.appendChild(card__text);
            card__actions.append(card__btnEdit, card__btnRemove);

            mainBody.appendChild(card)
        })
    }
}

