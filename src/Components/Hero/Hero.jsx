import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Procesos, infraestructura e ingeniería</h1>
            <p>Fabricación de piezas, elementos y estructuras metálicas, en aceros al carbono, 
            donde además, contamos con las herramientas, equipos y la experiencia en montaje 
            de estructuras.</p>
            <button className='btn'>Conocenos <img src={dark_arrow} alt="" /></button>
        </div>

    </div>
  )
}

export default Hero