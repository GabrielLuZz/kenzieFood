export class ShowHandler{
    static filterPerCategory(products,category){
        const filterProducts = products.filter((product) => product.categoria.toLowerCase() === category.toLowerCase())
        return filterProducts
    }

    static searchedProducts(texto,products){
        const searchedProducts = []
        products.forEach(product => {
            if(product.nome.toLowerCase().includes(texto)){
                searchedProducts.push(product)
            }
            else if (product.categoria.toLowerCase().includes(texto)){
                searchedProducts.push(product)
            }
            else if (product.descricao.toLowerCase().includes(texto)){
                searchedProducts.push(product)
            }
        });
        return searchedProducts

    }

}





















