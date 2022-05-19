import { ProductService } from "../services/ProductService.js";

export class ShowHandler {
    static filterPerCategory(products, category) {

        if(category === 'Todos'){
            return products
        }

        const filterProducts = products.filter(
            (product) => product.categoria.toLowerCase() === category.toLowerCase()
        );
        
        return filterProducts;
    }

    static searchedProducts(text, products) {
        const searchedProducts = [];
        products.forEach((product) => {
            if (product.nome.toLowerCase().includes(text)) {
                searchedProducts.push(product);
            } else if (product.categoria.toLowerCase().includes(text)) {
                searchedProducts.push(product);
            } else if (product.descricao.toLowerCase().includes(text)) {
                searchedProducts.push(product);
            }
        });
        return searchedProducts;
    }

    static headerMain(verify) {
        const headerPlace = document.querySelector(".header");
        const container = document.createElement('div');
        const leftSide = document.createElement('section');
        const leftSide__title = document.createElement('h1');
        const rightSide = document.createElement('section');
        const rightSide__search = document.createElement('div');
        const rightSide__icon = document.createElement('span');
        const rightSide__field = document.createElement('input');
        const header = document.createElement('header');

        container.classList.add('container', 'container--header');
        leftSide.classList.add('leftSide');
        leftSide__title.classList.add('leftSide__title');
        leftSide__title.innerHTML = 'Kenzie <small>Food</small';
        rightSide.classList.add('rightSide');
        rightSide__search.classList.add('rightSide__search');
        rightSide__icon.classList.add('rightSide__icon');
        rightSide__icon.innerHTML = '<img src="src/assets/images/search.png" alt="search icon">';
        rightSide__field.classList.add('rightSide__field');
        rightSide__field.placeholder = 'Pesquisar por produto';

        header.appendChild(container);
        container.append(leftSide, rightSide);
        leftSide.appendChild(leftSide__title);
        rightSide.append(rightSide__search)

        if (verify) {
            const rightSide__photo = document.createElement('img');
            rightSide__photo.classList.add('rightSide__photo');
            rightSide__photo.alt = 'profile photo';
            rightSide__photo.src = 'src/assets/images/profile.png';

            rightSide.appendChild(rightSide__photo)

        } else {
            const rightSide__btn = document.createElement('a');
            rightSide__btn.classList.add('rightSide__btn');
            rightSide__btn.innerText = 'Sign in';
            rightSide__btn.href = './src/pages/auth.html';

            rightSide.appendChild(rightSide__btn)
        }

        rightSide__search.append(rightSide__icon, rightSide__field)

        headerPlace.appendChild(header)
    }

    static async showProducts(products, verify) {

        const showcase = document.querySelector('.showcase');
        showcase.innerText = '';



        products.forEach(product => {
            const card = document.createElement('article');
            const card__image = document.createElement('section');
            const img = document.createElement('img');
            const card__info = document.createElement('section');
            const card__title = document.createElement('h3');
            const card__description = document.createElement('p');
            const card__categories = document.createElement('div');
            const card__category = document.createElement('span');
            const card__end = document.createElement('div');
            const card__price = document.createElement('span');
            const card__btn = document.createElement('button');

            card.classList.add('card');
            card__image.classList.add('card__image');
            img.src = product.imagem;
            img.alt = product.nome;
            card__info.classList.add('card__info');
            card__title.classList.add('card__title');
            card__title.innerText = product.nome;
            card__description.classList.add('card__description');
            card__description.innerText = product.descricao;
            card__categories.classList.add('card__categories');
            card__category.classList.add('card__category');
            card__category.innerText = product.categoria;
            card__end.classList.add('card__end');
            card__price.classList.add('card__price');
            card__price.innerText = `R$ ${product.preco}`;
            card__btn.classList.add('card__btn');
            card__btn.innerHTML = '<img src="src/assets/images/littleCart.png" alt="add cart button">';

            card.append(card__image, card__info);
            card__image.appendChild(img);
            card__info.append(card__title, card__description, card__categories, card__end);
            card__categories.appendChild(card__category);
            card__end.append(card__price, card__btn)

            showcase.appendChild(card)

        });
    }

    static async getProducts(verify) {
        let list = [] = await ProductService.getPublicProducts();

        if (verify) {
            list = list.concat(await ProductService.getPrivateProducts(localStorage.getItem("Token")))
        }

        return list;
    }

    static async showProductsDashboard(verify){
        if(verify == true){
        let list = await ProductService.getPrivateProducts(localStorage.getItem("Token"));
        let ul = document.getElementById("list__product");

        list.forEach((element)=>{
            let li = document.createElement("li");

            li.innerHTML =` <section class="content__product" >
            <img src=${element.imagem} alt="" class="img__product">
            <h2 class="name__product">${element.nome}</h2>`
            let section = document.createElement("section") ;
            section.className="categories";
            element.product.categoria.forEach((element)=>{
                let categoria = document.createElement("h3")
                categoria.className = "categories__name";
                categoria.innerText = element;
                section.appendChild(categoria);
            })
            li.appendChild(section);
            li.innerHTML += `<section class="description">
                    <p class="description__text">${element.descricao}</p>  
            </section>
            <section class="actions">
                <button class="edit">edit</button>
                <button class="remove">remove</button>
            </section>
            </section>`
            ul.appendChild(li);
        })
    }
    }
}