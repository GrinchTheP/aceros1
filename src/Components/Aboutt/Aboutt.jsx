import React from 'react'
import './Aboutt.css'
import about_img from '../../assets/about1.png'

const Aboutt = () => {
  return (
    <div className='aboutt'>
        
        <div className="aboutt-sections">
            
            <div className="aboutt-right">
                <div className="aboutt-para">
                    <h2>Nos especializamos en la fabricación de aceros de alto rendimiento, impulsados por un equipo comprometido que garantiza excelencia y precisión en cada proceso.</h2>
                    <p>Transformamos el acero en soluciones duraderas y de calidad, adaptadas a las necesidades específicas de cada proyecto.</p>
                </div>
                <div className="aboutt-skills">
                    <div className="aboutt-skill"><p>FABRICACIÓN DE ESTRUCTURAS METÁLICAS </p></div>
                    <div className="aboutt-skill"><p>MONTAJE DE ESTRUCTURAS.</p></div>
                    <div className="aboutt-skill"><p>CARPINTERÍA METÁLICA EN GENERAL.</p></div>
                    <div className="aboutt-skill"><p>REALIZACIÓN DE MAQUETAS 3D 'TEKLA'.</p></div>
                    <div className="aboutt-skill"><p>DESARROLLAMOS PLANOS DE FABRICACIÓN Y MONTAJE.</p></div>
                    <div className="aboutt-skill"><p>ASESORES EXTERNOS ESPECIALIZADOS.</p></div>
                </div>
            </div>
            <div className="aboutt-left">
                <img src={about_img} alt="" />
            </div>
        </div>
        <div className="aboutt-achievements">
            <div className="aboutt-achievement">
                <h1>10+</h1>
                <p>AÑOS DE EXPERIENCIA</p>
            </div>
            <hr />
            <div className="aboutt-achievement">
                <h1>20+</h1>
                <p>PROYECTOS REALIZADOS</p>
            </div>
            <hr />
            <div className="aboutt-achievement">
                <h1>15+</h1>
                <p>CLIENTES SATISFECHOS</p>
            </div>
        </div>
    </div>
  )
}

export default Aboutt