let Arrproducts=[
    
    {
        id:1,
        image:"/static/image/bed2.jpg",
        price:"Rs,35000"
        },
        {
            id:2,
            image:"/static/image/bed3.jpg",
            price:"Rs,45000"
            },
            {
                id:3,
                image:"/static/image/bed4.jpg",
                price:"Rs,35000"
                },
                {
                    id:4,
                    image:"/static/image/back1.jpg",
                    price:"Rs,85000"
                    },
                    {
                        id:5,
                        image:"/static/image/chair1.jpg",
                        price:"Rs,35000"
                        },
                        {
                            id:6,
                            image:"/static/image/chair2.jpg",
                            price:"Rs,15000"
                            },
                            {
                                id:7,
                                image:"/static/image/chair3.jpg",
                                price:"Rs,25000"
                                },
                                {
                                    id:8,
                                    image:"/static/image/chair4.jpg",
                                    price:"Rs,10000"
                                    },
                                    {
                                        id:9,
                                        image:"/static/image/chair5.jpg",
                                        price:"Rs,35000"
                                        },
                                        {
                                            id:10,
                                            image:"/static/image/lamp1.jpg",
                                            price:"Rs,35000"
                                            },
                                            {
                                                id:11,
                                                image:"/static/image/lamp2.jpg",
                                                price:"Rs,35000"
                                                },
                                                {
                                                    id:12,
                                                    image:"/static/image/lamp3.jpg",
                                                    price:"Rs,35000"
                                                    },
                                                    {
                                                        id:13,
                                                        image:"/static/image/lamp4.jpg",
                                                        price:"Rs,35000"
                                                        },
                                                        {
                                                            id:14,
                                                            image:"/static/image/lamp5.jpg",
                                                            price:"Rs,35000"
                                                            },
                                                            {
                                                                id:15,
                                                                image:"/static/image/sofa1.jpg",
                                                                price:"Rs,35000"
                                                                },
                                                                {
                                                                    id:16,
                                                                    image:"/static/image/sofa2.jpg",
                                                                    price:"Rs,35000"
                                                                    },
                                                                    {
                                                                        id:17,
                                                                        image:"/static/image/sofa3.jpg",
                                                                        price:"Rs,35000"
                                                                        },
                                                                        {
                                                                            id:18,
                                                                            image:"/static/image/sofa4.jpg",
                                                                            price:"Rs,35000"
                                                                            },
                                                                            {
                                                                                id:19,
                                                                                image:"/static/image/sofa5.jpg",
                                                                                price:"Rs,35000"
                                                                                },
                                                                                {
                                                                                    id:20,
                                                                                    image:"/static/image/pic 1.jpg",
                                                                                    price:"Rs,35000"
                                                                                    },
                                                                                    {
                                                                                        id:21,
                                                                                        image:"/static/image/pic 5.jpg",
                                                                                        price:"Rs,35000"
                                                                                        },
                                                                                        {
                                                                                            id:22,
                                                                                            image:"/static/image/pic2.jpg",
                                                                                            price:"Rs,35000"
                                                                                            },
                                                                                            {
                                                                                                id:23,
                                                                                                image:"/static/image/pic3.jpg",
                                                                                                price:"Rs,35000"
                                                                                                },
                                                                                                {
                                                                                                    id:24,
                                                                                                    image:"/static/image/pic4.jpg",
                                                                                                    price:"Rs,35000"
                                                                                                    },
                                                                                                    {
                                                                                                        id:25,
                                                                                                        image:"/static/image/bed5.jpg",
                                                                                                        price:"Rs,35000"
                                                                                                        },

];
export default Arrproducts;

export function saveCartToLocalStorage(cartItems) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Function to get cart items from local storage
export function getCartFromLocalStorage() {
    return JSON.parse(localStorage.getItem("cartItems")) || [];
}

let cartItems = getCartFromLocalStorage();

function addToCart(productId) {
    const product = Arrproducts.find(item => item.id === productId);
    if (product) {
        cartItems.push(product);
        saveCartToLocalStorage(cartItems);
        console.log(`Product with ID: ${productId} added to cart.`);
    }
}
export function setCartInLocalStorage(cartItems) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
export { cartItems, addToCart };


