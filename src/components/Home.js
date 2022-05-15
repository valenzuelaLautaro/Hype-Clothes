import React from 'react'

import './styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
        <img src='https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Home image' className='home-img opacity-50'/>
        <div className='home-text'>  
            <h3 className='text-center mt-5 text-uppercase'>Nosotros somos Hype Clothes</h3>
            <p className='text-center mt-2 w-50'>Somos el primer local hype de la Argentina, con más de 10 años coleccionando. Como amantes de la cultura proveemos la sabiduría para traerles los mejores productos 100% originales.</p>
        </div>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col'>
                    <img src='https://images.pexels.com/photos/3812433/pexels-photo-3812433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Home image' className='img-local rounded'/>
                </div>
                <div className='col'>
                    <img src='https://images.pexels.com/photos/4914807/pexels-photo-4914807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Home image' className='img-local rounded'/>
                </div>
                <div className='col'>
                    <img src='https://images.pexels.com/photos/2447042/pexels-photo-2447042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Home image' className='img-local rounded'/>  
                </div>
                <br></br>
                <br></br>
            </div>
        </div>
    </div>
  )
}

export default Home