import Arrproducts, { addToCart } from './cart.js';

const productsContainer = document.querySelector(".products");

function onInIt() {
    Arrproducts.forEach((item) => {
        let div = document.createElement("div");
        div.classList.add("item");

        let img = document.createElement("img");
        img.src = item.image;
        img.width = 200;
        img.height = 200;
        div.appendChild(img);

        let p = document.createElement("p");
        p.textContent = `Rs. ${item.price}`;

        let button = document.createElement("button");
        button.textContent = "Add to Cart";
        button.addEventListener("click", () => addToCart(item.id));

        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(button);
        
        productsContainer.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", onInIt);



        

        