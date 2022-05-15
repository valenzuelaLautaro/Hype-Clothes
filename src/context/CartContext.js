import { createContext, useState } from "react";

export const CartContext = createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {},
    clear: () => {},
    isInCart: () => {}
})

const CartContextProvider = ({ children }) => {

    const [items, setItems] = useState([])

    const isInCart = (item) => {
        return items.includes(item)
    }
    const addItem = ( cloth, quantity ) => {
        setItems(currentItems => {
            console.log(items)
            return currentItems.concat({cloth, quantity})
        })
    }
    const removeItem = ( cloth, quantity ) => {
        setItems(currentItems => {
            if(isInCart(cloth)) {
                
            } else {
                return currentItems.concat({cloth, quantity})
            }
        })
    }
    const clear = ( cloth, quantity ) => {
        setItems(currentItems => {
            if(isInCart(cloth)) {
                
            } else {
                return currentItems.concat({cloth, quantity})
            }
        })
    }

    const context = { items, addItem, removeItem, clear, isInCart }

  return (
    <CartContext.Provider value={ context }>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider