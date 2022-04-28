import { React, useEffect, useState } from 'react'
import Item from './Item'

const ItemList = ({clothesData}) => {

    const [clothes, setDogs] = useState([])

    useEffect(() => {
        const getClothes = new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(clothesData)
            }, 2000)
        })

        getClothes.then( (result) => {
            console.log('Se completó la promesa.', result)
            setDogs(result)
        }).
        catch((error) => {
            console.error(error)
        })

    }, [])

  return (
    <div className="card-group">
        { clothes.map(cloth => <Item key={cloth.id} name={cloth.name} description={cloth.description} price={cloth.price} pictureUrl={cloth.pictureUrl} />) }
    </div>
  )
}

export default ItemList