import React, { Children } from 'react'
import ItemList from './ItemList'
import { clothes } from '../data/clothes'

import './styles/ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    console.log(greeting)
    return (
        <div className="item-list-container">
           <ItemList clothesData={clothes} />
        </div>
    );
}

export default ItemListContainer;   