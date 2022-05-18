import { ShowHandler } from "../handlers/ShowHandler.js";
import { AuthHandler } from "../handlers/AuthHandler.js";

const verify = await AuthHandler.userVerify();
let menuFilters = document.querySelectorAll('.menu__item')

ShowHandler.headerMain(verify)
const products = await ShowHandler.getProducts(verify);

ShowHandler.showProducts(products,verify)





menuFilters.forEach((filter) => {
    filter.addEventListener('click', (e) => {
        let category = filter.innerText        
        const arrFiltered = ShowHandler.filterPerCategory(products,category)
        ShowHandler.showProducts(arrFiltered,verify)        
    })
})

let searchBar = document.querySelector(".rightSide__field")

searchBar.addEventListener('keyup', (e) => {
    let text = searchBar.value
    const arrSearched = ShowHandler.searchedProducts(text,products)    
    ShowHandler.showProducts(arrSearched,verify)
})