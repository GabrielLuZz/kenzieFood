import { ShowHandler } from "../handlers/ShowHandler.js";
import { AuthHandler } from "../handlers/AuthHandler.js";

const verify = await AuthHandler.userVerify();
let menuFilters = document.querySelectorAll('.menu__item')

ShowHandler.headerMain(verify)
const products = await ShowHandler.getProducts(verify);

ShowHandler.showProducts(products)



menuFilters.forEach((filter) => {
    filter.addEventListener('click', (e) => {
        e.preventDefault()
        let category = filter.innerText        
        ShowHandler.filterPerCategory(products,category)        
    })
})

let searchBar = document.querySelector(".rightSide__field")

searchBar.addEventListener('keyup', (e) => {
    let text = searchBar.value
    ShowHandler.searchedProducts(text,products)    
})