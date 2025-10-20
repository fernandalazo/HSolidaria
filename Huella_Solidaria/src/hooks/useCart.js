import { useEffect, useState, useMemo } from 'react'
import db from '../data/db.js' //importo base de datos

export const useCart = () => {

    const initialCart = () => { //inicializo el carrito

        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [data] = useState(db)
    const [cart, setCart] = useState(initialCart)

    //defino el máximo y mínimo de items que utilizará el carrito
    const MAX_ITEMS = 8
    const MIN_ITEMS = 1

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    //función para agregar productos al carrito
    function addToCart(item){
        const itemExists = cart.findIndex(data =>data.id === item.id)
        if (itemExists >= 0) { //si el item existe en el carrito
            if (cart [itemExists].quantity >= MAX_ITEMS) return
            const updateCart = [...cart]
            updateCart[itemExists].quantity ++
            setCart(updateCart)
        }else{ //si el item no existe en el carrito
            item.quantity = 1
            setCart([...cart, item])
        }
    }

    function removeFromCart(id) {
        setCart(prevCart => prevCart.filter(producto => producto.id !== id))
    }

    function decreaseQuantity(id) {
        const updatedCart = cart.map(item => {
            if(item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            // Devuelve una copia del item para asegurar la inmutabilidad del array
            return {...item}; 
        });
        setCart(updatedCart)
    }

    function increaseQuantity(id) {
        const updatedCart = cart.map(item => {
            if(item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            // Devuelve una copia del item para asegurar la inmutabilidad del array
            return {...item};
        });
        setCart(updatedCart)
    }

    function clearCart() {
        setCart([])
    }

    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart
    }
}