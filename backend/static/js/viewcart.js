import Arrproducts, { getCartFromLocalStorage, setCartInLocalStorage } from './cart.js';

const cartContainer = document.querySelector(".cart-items");

function updateCartDisplay() {
    const cartItems = getCartFromLocalStorage();
    cartContainer.innerHTML = ""; // Clear previous content

    cartItems.forEach((item, index) => {
        let cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");

        let cartItemImg = document.createElement("img");
        cartItemImg.src = item.image;

        let cartItemInfo = document.createElement("div");
        cartItemInfo.classList.add("cart-item-info");

        let cartItemName = document.createElement("p");
        cartItemName.textContent = `Product ID: ${item.id}`;

        let cartItemPrice = document.createElement("p");
        cartItemPrice.textContent = `Price: ${item.price}`;

        let quantityControls = document.createElement("div");
        quantityControls.classList.add("quantity-controls");

        let decreaseButton = document.createElement("button");
        decreaseButton.innerHTML = `<i class="fas fa-minus"></i>`;
        decreaseButton.addEventListener('click', () => updateQuantity(index, item.quantity - 1));

        let cartItemQuantity = document.createElement("input");
        cartItemQuantity.type = "number";
        cartItemQuantity.value = item.quantity;
        cartItemQuantity.min = 1;
        cartItemQuantity.addEventListener('change', () => updateQuantity(index, cartItemQuantity.value));

        let increaseButton = document.createElement("button");
        increaseButton.innerHTML = `<i class="fas fa-plus"></i>`;
        increaseButton.addEventListener('click', () => updateQuantity(index, item.quantity + 1));

        let removeButton = document.createElement("button");
        removeButton.innerHTML = `<i class="fas fa-trash"></i>`;
        removeButton.addEventListener('click', () => removeCartItem(index));

        let buyButton = document.createElement("button");
        buyButton.textContent = "Buy";
        buyButton.addEventListener('click', () => buyCartItem(item));
        

        quantityControls.appendChild(decreaseButton);
        quantityControls.appendChild(cartItemQuantity);
        quantityControls.appendChild(increaseButton);

        cartItemInfo.appendChild(cartItemName);
        cartItemInfo.appendChild(cartItemPrice);
        cartItemInfo.appendChild(quantityControls);
        cartItemInfo.appendChild(buyButton);

        cartItemDiv.appendChild(cartItemImg);
        cartItemDiv.appendChild(cartItemInfo);
        cartItemDiv.appendChild(removeButton);

        cartContainer.appendChild(cartItemDiv);
    });
}

function updateQuantity(index, newQuantity) {
    if (newQuantity < 1) return; // Prevent setting quantity below 1
    const cartItems = getCartFromLocalStorage();
    cartItems[index].quantity = parseInt(newQuantity, 10);
    setCartInLocalStorage(cartItems);
    updateCartDisplay();
}

function removeCartItem(index) {
    let cartItems = getCartFromLocalStorage();
    cartItems.splice(index, 1);
    setCartInLocalStorage(cartItems);
    updateCartDisplay();
}
function buyCartItem(item) {
     fetch('/checkout/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCSRFToken(), // Include CSRF token
        },
        body: JSON.stringify(item), // Send the selected item as JSON
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Parse JSON response
        } else {
            throw new Error('Checkout failed. Please try again later.');
        }
    })
    .then(data => {
        alert(data.message); // Show success message from server
        // Optionally, redirect or perform other actions
       
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while processing your request. Please try again later.');
    });
}

// Function to get CSRF token from cookies
function getCSRFToken() {
    const cookieValue = document.cookie
        .split('; ')
        .find(cookie => cookie.startsWith('csrftoken='))
        .split('=')[1];
    return cookieValue;
}



document.addEventListener("DOMContentLoaded", updateCartDisplay);
