class Shopping {
   
    handleClear() {
        var test = document.querySelector('.big-shopping');
        test.classList.add('test');
        var sss = document.querySelector('.pocket');
        sss.classList.remove('shopping-blackout');
        var smooth = document.querySelector('.big-shopping');
        smooth.classList.add('shopping-smooth-active');
    }

    handlerOpenLikeButs() {
        {
            let x = 0
            var joke = document.querySelector('.like-btn-0');
            if (x == 0) {
                joke.classList.toggle('is-active');
            }
        }
    }
  
    handlerOpenLikeButss() {
        {
            var butter = document.querySelector('.like-btn-1');
            butter.classList.toggle('is-active');
        }
    }
    handlerOpenLikeButsss() {
        {
            var banana = document.querySelector('.like-btn-2');
            banana.classList.toggle('is-active');
        }
    }
    handlerOpenLikeButssss() {
        {
            var apple = document.querySelector('.like-btn-3');
            apple.classList.toggle('is-active');
        }
    }
    delBtn() {
        shoppingPage.render();
        function addClickListener(card) {
            {
                card.classList.add('selected');
                var fixx = document.querySelector('.products-element__btn');
                fixx.classList.remove('products-element__btn_active');
            };
        }
        var cards = document.querySelector('.shopping-container');
        for (var i = 0; i < cards.length; i++) {
            addClickListener(cards[i]);
            
        }
        // var cards1 = document.querySelector('.container-1');
        // for (var i = 0; i < cards1.length; i++) {
        //     addClickListener(cards1[i]);
        // }
    }
    GetProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return []
    }
    handleSetLocationStorage(element, id) {
        ProductsPage.render();
        const { pushProduct, products } = localStorageUtil.putProducts(id);
        

        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
            
                
            
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
            
        }
        headerPage.render(products.length)
    }
    render() {
        const productsStore = localStorageUtil.GetProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;
        let zxc = 0
        let wordd = 's'
        CATALOG.forEach(({ id, name, price,}) => {
            if (productsStore.indexOf(id) !== -1) {

                htmlCatalog += `
                <tr>
                   <div class="container-${zxc}">
                    <div id="item">
        <div class="buttons">
          <span class="delete-btn"onclick="shoppingPage.handleSetLocationStorage(this, '${id}');shoppingPage.delBtn();"></span>
          <span class="like-btn-${zxc}" onclick="shoppingPage.handlerOpenLikeBut${wordd}()"></span>
        </div>
        <div class="description">
          <span class="shopping-element__name">⭐️ ${name}</td></span>
        </div>
        <div class="shopping-element__price">${price.toLocaleString()} UAH</div>   
        </div>   
      </div>  
    </div>         
                </tr>
                </div>
                `;
                
                wordd += 's'
                zxc += 1
                sumCatalog += price;
                
            }
            
                
        })
        
       ;
       
        const html = `
        
            <div class="shopping-container">
            
            <div class="cart-header">
              <p>Shopping cart</p>
             </div>
            <div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
                <table>
                    ${htmlCatalog}
                    <p class="no-items-in-cart">no items in cart</td>
                <div class="shopping-element__tr">
                    <p class="shopping-element__sumname">💰 Сумма:</td>
                    <p class="shopping-element__sumprice">${sumCatalog.toLocaleString()} UAH</td>
                </div>
                </table>
            </div>
            
            
        `;
        
        ROOT_SHOPPING.innerHTML = html;
        if (zxc > 0) {
            {
                var jokeee = document.querySelector('.no-items-in-cart');
                jokeee.classList.toggle('shopping-disappear');
            };
        }
    }
}
const shoppingPage = new Shopping();

