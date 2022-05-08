import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Item.css'

const Item = ({id ,name, description, price, pictureUrl}) => {
  return (
    <>
        <div className="card text-center">
            <img src={pictureUrl} className="card-img-top" alt="Item img" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}USD</p>  
          </div>
          <div className="card-footer">
            <Link to={`/productos/${id}`} className="btn btn-primary">Ver Detalles</Link>
          </div>
        </div>      
    </>
  )
}

export default Item