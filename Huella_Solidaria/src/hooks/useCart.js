import { useEffect, useState, useMemo } from 'react'
import {db} from '../data/db' //importo base de datos

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

    return {
        data,
        cart,
        addToCart
    }
}