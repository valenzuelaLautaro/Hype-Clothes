import React from 'react'
import './styles/Item.css'

const Item = ({name, description, price, pictureUrl}) => {
  return (
    <div>
        <div className="card h-100">
            <img src={pictureUrl} className="card-img-top" alt="Item img" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{price}USD</p>  
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Comprar</button>
          </div>
        </div>
    </div>
  )
}

export default Item