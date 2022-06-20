function render () {
    const productsStore = localStorageUtil.GetProducts();
    shoppingPage.render();
    headerPage.render(productsStore.length);
    ProductsPage.render();    
}

let CATALOG = []

fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        render();
    })
    .catch(error => {
        console.log(error);
    });