// const { count } = require("console");

class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
        
        // document.body.classList.add('dark-theme');
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

