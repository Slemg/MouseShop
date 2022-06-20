// const { count } = require("console");

class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
        var sss = document.querySelector('.pocket');
        sss.classList.add('shopping-blackout');
        var smooth = document.querySelector('.big-shopping');
        smooth.classList.remove('shopping-smooth-active');
        
    }
    
    render(count) {
        const html = `
    <div class="header-container">
         <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();"> 
         🛒${count}  
         </div>          
         </div>
         `;
         
         
        
        
            ROOT_HEADER.innerHTML = html;

    }
}

const headerPage = new Header();
headerPage.render();

