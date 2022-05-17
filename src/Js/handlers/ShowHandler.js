export class Filter{
    static filterPerCategory(products,category){
        const filterProducts = products.filter((product) => product.categoria === category)
        return filterProducts
    }
}





















