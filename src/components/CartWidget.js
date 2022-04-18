import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return (
        <div className='cart-widget'>
            <FontAwesomeIcon icon={faCartShopping} size='6px' color='white' />
        </div>
    );
}

export default CartWidget;