import React, {useState, useContext} from 'react'

import { CartContext } from '../context/CartContext'

const ItemCount = ({initial, stock, onAdd, item}) => {

    const [count, setCount] = useState(initial)

    const { addItem } = useContext(CartContext)

    const onAddHandler = () => {
      if(count < stock){
      setCount(currentCount => {
        return currentCount += onAdd
      })}
    }
    const onSustractHandler = () => {
      if(count > initial){
      setCount(currentCount => {
        return currentCount -= onAdd
      })}
    }

  return (
    <>
      <div>
        <button className="btn m-2" onClick={onSustractHandler}>-</button>
        <span className="m-2">{count}</span>
        <button className="btn m-2" onClick={onAddHandler}>+</button>
        <button className="btn btn-primary" onClick={addItem(item, count)}>Agregar al carrito</button>
      </div>
    </>

  )
}

export default ItemCount