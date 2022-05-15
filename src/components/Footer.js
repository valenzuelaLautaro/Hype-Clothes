import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid fixed-bottom">
        <div className="row p-2 bg-dark text-white text-center">
            <div className="col-xs-12 col-md-6 col-lg-4">
                <p className="h5 mb-3">Tienda</p>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4">
                <p className="h5 mb-3">Nosotros</p>
                <div className="mb-2">
                    <p className="text-secondary">Direccion: Guatemala 1100</p>
                </div>  
                <div className="mb-2">
                    <p className="text-secondary">Instagram: HypeClothes</p>
                </div>  
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4">
                <p className="h5 mb-3">Contacto</p>
                <div className="mb-2">
                    <p className="text-secondary">hypeclothes@gmail.com</p>
                </div>      
                <div className="mb-2">     
                    <p className="text-secondary">+54 1166443322</p>       
                </div>      
            </div>
            <div className="col-xs-12 pt-3">
                <p className="text-white text-center">Copyrigth - All rights reserved © 2022</p>       
            </div>
        </div>
    </div>
  )
}

export default Footer