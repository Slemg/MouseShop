class Products {
    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Добавить в корзину'
        this.labelRemove = 'Убрать из корзины'
    }

        handleSetLocationStorage(element, id) {
            const { pushProduct, products } = localStorageUtil.putProducts(id);
            
            if (pushProduct) {
                element.classList.add(this.classNameActive);
                element.innerHTML = this.labelRemove;
            } else {
                element.classList.remove(this.classNameActive);
                element.innerHTML = this.labelAdd;
            }
            console.log(pushProduct)
            headerPage.render(products.length) 
            
           
        }

    render () {
        const productsStore = localStorageUtil.GetProducts();
        let htmlCatalog = '';
    CATALOG.forEach(({id, name, price, img }) => {
        let activeClass = '';
        let activeText = '';
        
        if (productsStore.indexOf(id) == -1) {
            activeText = "Добавить в корзину";
        } else {
            activeClass = ' '+this.classNameActive;
            activeText = this.labelRemove;
        }
        htmlCatalog += `
        <li class="products-element">
            <span class="products-element__name">${name}</span>
            <img class="products-element__img" src="${img}" />
            <span class="products-element__price">💸 ${price.toLocaleString()} UAH</span>
            <button class="products-element__btn${activeClass}" onclick="ProductsPage.handleSetLocationStorage(this, '${id}');">${activeText}</button>
        </li>
        `;
        });

        const html = `
        <ul class="products-container">
            ${htmlCatalog}
        </ul>
        `;
        
        ROOT_PRODUCTS.innerHTML = html;
    }
}

const ProductsPage = new Products();


