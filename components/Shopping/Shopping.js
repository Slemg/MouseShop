class Shopping {
    handleClear() {
        ROOT_SHOPPING.innerHTML = '';
        document.body.classList.remove('dark-theme');
    }
    

    handlerOpenLikeBut() {
        shoppingPage.render();
        alert(1)
    }
    
    deleteItems() {
        
        var deleteElement = item.querySelectorAll('div');
        for (let i = 0; i < deleteElement.length; i++) {
          deleteElement[i].remove();
        }
      }
        
    
    render() {
        const productsStore = localStorageUtil.GetProducts();
        let htmlCatalog = '';
        
        let sumCatalog = 0;
        
        CATALOG.forEach(({id, name, price,img }) => { 
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                <tr>
                   
                    <div id="item">
        <div class="buttons">
          <span class="delete-btn"onclick="shoppingPage.deleteItems()"></span>
          <span id="like-btn" onclick="shoppingPage.handlerOpenLikeBut()"></span>
        </div>
 
        <div class="image">
        <img class="shopping-element__img" src="${img}" />
        </div>
 
        <div class="description">
          <span class="shopping-element__name">⭐️ ${name}</td></span>
        </div>
 
        <div class="quantity">
          <button class="plus-btn" type="button" name="button">
            
          </button>
          <input type="text" name="name" value="1">
          <button class="minus-btn" type="button" name="button">
            
          </button>
        </div>
 
        <div class="total-price">
        <p class="shopping-element__price">${price.toLocaleString()} UAH</p>
        </div>
      </div>
 
      

                </tr>
                `;
                
                sumCatalog += price;
               
            }

        });
        
        const html = `
        <div class="item">
            <div class="shopping-container">
            <div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
                <table>
                    ${htmlCatalog}
                <div class="shopping-element__tr">
                    <p class="shopping-element__name">💰 Сумма:</td>
                    <p class="shopping-element__price">${sumCatalog.toLocaleString()} UAH</td>
                </div>
                </table>
            </div>
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();

