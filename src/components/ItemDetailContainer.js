import React from 'react'
import { clothes as clothesData} from '../data/clothes'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const { itemId } = useParams()

    const [cloth, setCloth] = useState({})

    useEffect(() => {
        (async () => {
            const clothData = await getClothDetail()
            setCloth(clothData)
            console.log(itemId)
        })()
    }, [itemId])

    const getClothDetail = () => {
        return new Promise((resolve) => {
            setTimeout(()=> {
                resolve(clothesData.find( c => c.id == itemId))
            }, 3000)
        })
    }

  return (
    <div>
        <ItemDetail name={cloth.name} description={cloth.description} price={cloth.price} pictureUrl={cloth.pictureUrl}></ItemDetail>
    </div>
  )
}

export default ItemDetailContainer