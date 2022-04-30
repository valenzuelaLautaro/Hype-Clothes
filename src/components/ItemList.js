import { React,  } from 'react'
import Item from './Item'

const ItemList = ({ clothesData }) => {
  return (
    <div className="card-group">
        { clothesData.map(cloth => <Item key={cloth.id} name={cloth.name} description={cloth.description} price={cloth.price} pictureUrl={cloth.pictureUrl} />) }
    </div>
  )
}

export default ItemList