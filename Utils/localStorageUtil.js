class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
       
    
    }

    GetProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return []
    }
    putProducts(id) {
        let products = this.GetProducts();
        let pushProduct = false;
        const index = products.indexOf(id);

        if (index == -1) {
            products.push(id);
            pushProduct = true;
        } else {
            products.splice(index, 1)
        }
        if (products.length > 3) {
            alert("Достигнуто максимальное значение товаров.Убираю последний из списка")
            products.splice(index, 1)
            location.reload()
            
        }
       
        
        
        
        localStorage.setItem(this.keyName, JSON.stringify(products));

        return { pushProduct, products }
     }
}


const localStorageUtil = new LocalStorageUtil();


