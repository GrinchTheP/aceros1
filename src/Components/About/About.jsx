import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>Aceros INGE-PRO</h3>
        <h2>Impulsados por nuestro compromiso con la excelencia y la innovación, en Aceros Inge-Pro nos guía una visión clara y una misión firme que reflejan nuestra esencia y propósito.</h2>
        <p>
        <b>Visión</b> <br></br>
        Ser líderes en la fabricación y suministro de piezas, elementos y estructuras metálicas en acero al carbono, reconocidos por nuestra excelencia técnica, innovación y compromiso con la calidad, contribuyendo al desarrollo de la industria y generando valor sostenible para nuestros clientes, colaboradores y la comunidad.
        </p>
        <p>
        <b>Misión</b><br></br>
         Proporcionar soluciones integrales en la fabricación de piezas, elementos y estructuras metálicas en acero al carbono, utilizando tecnología avanzada, equipos de alta precisión y la experiencia de nuestro equipo humano. Nos comprometemos a cumplir con los más altos estándares de calidad y seguridad, satisfaciendo las necesidades específicas de nuestros clientes y fomentando relaciones de confianza a largo plazo.
        </p>
      </div>
      
    </div>
  )
}

export default About