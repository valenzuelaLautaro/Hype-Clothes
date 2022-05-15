import React from 'react'
import ItemCount from './ItemCount'
import CartContextProvider from '../context/CartContext'

const ItemDetail = ( {item} ) => {
  return (
    <CartContextProvider>
      <div className="containter mt-3 w-75 mx-auto">
        <div className="card mb-3 bg-ligth text-dark">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={item.pictureUrl} className="img-fluid rounded-start" alt={item.name} />
            </div>
            <div className="col-md-8">
              <div className="card-body w-50">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text"><small className="text-muted">{item.price}USD</small></p>
                <ItemCount initial={1} stock={item.stock} onAdd={1} item={item} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CartContextProvider>
  )
}

export default ItemDetail