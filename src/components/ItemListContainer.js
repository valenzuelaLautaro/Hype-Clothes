import React from 'react'

import './styles/ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="itemListContainer">
          <h3>{ greeting }</h3>  
        </div>
    );
}

export default ItemListContainer;   