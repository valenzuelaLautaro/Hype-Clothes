import { React, useEffect, useState } from 'react'
import ItemList from './ItemList'
import { clothes as clothesData } from '../data/clothes'

import './styles/ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
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
    console.log(greeting)
    return (
        <div className="item-list-container">
           <ItemList clothesData={clothes} />
        </div>
    );
}

export default ItemListContainer;   