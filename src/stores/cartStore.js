import { defineStore } from 'pinia'
import productsStore from "./productsStore.js"

export default defineStore('cart', {
    state: () => ({
        cart:[]
    }),
    actions: {
        addToCart(productId, qty = 1) {
            const currentCart = this.cart.find((item) => item.productId === productId)
            if (currentCart) {
                currentCart.qty += qty
            } else {
                //console.log(productId, qty)
                this.cart.push({
                    id:new Date().getTime(),
                    productId,
                    qty
                })
            }

            //console.log(this.cart)
        },
        removeCartItem(id) {
            const index = this.cart.findIndex((item) => item.id === id)
            this.cart.splice(index,1)
        },
        setCartQty(id, event) {
            //console.log(id, event)
            const currentCart = this.cart.find((item) => item.id === id)
            console.log(currentCart)
            currentCart.qty = event.target.value * 1
            //console.log(event.target.value,typeof event.target.value)
        },
    },
    getters: {
        cartList: ({cart}) => {
            const { products } = productsStore();
            // console.log(products)
            // console.log(cart)
            const carts = cart.map((item) => {
                //console.log(item)
                const product = products.find((product) => product.id === item.productId)
                //console.log('相同ID的產品', product)
                return {
                    ...item,
                    product,
                    subtotal: product.price * item.qty
                }
            })
            const total = carts.reduce((a, b) => a + b.subtotal, 0)
            //console.log(total)
            return {
                carts,
                total,
            }
        }
    }
})