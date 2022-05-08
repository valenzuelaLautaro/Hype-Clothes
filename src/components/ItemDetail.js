import React from 'react'

const ItemDetail = ( {name, description, price, pictureUrl} ) => {
  return (
    <div className="containter">
      <div className="card mb-3 bg-ligth text-dark">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={pictureUrl} className="img-fluid rounded-start" alt={name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">{price}USD</small></p>
              <button className="btn btn-primary">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail