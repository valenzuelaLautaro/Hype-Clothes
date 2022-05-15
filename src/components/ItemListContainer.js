import { React, useEffect, useState } from 'react'
import ItemList from './ItemList'
import { clothes as clothesData } from '../data/clothes'

import './styles/ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    const [clothes, setDogs] = useState([])
    const [loading, setLoading] = useState({})

    useEffect(() => {
        const getClothes = new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(clothesData)
                setLoading(true)
            }, 2000)
        })

        getClothes.then( (result) => {
            console.log('Se completó la promesa.', result)
            setDogs(result)
            setLoading(false)
        }).
        catch((error) => {
            console.error(error)    
        })

    }, [])
    console.log(greeting)
    return (
        <div className="item-list-container">
            {
                loading ? 
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> : <ItemList clothesData={clothes} />
            }
        </div>
    );
}

export default ItemListContainer;   