import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return (
        <div className='cart-widget'>
            <a className='btn'>
                <FontAwesomeIcon icon={faCartShopping} size='6px' color='white' />
            </a>
        </div>
    );
}

export default CartWidget