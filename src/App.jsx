import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Aboutt from './Components/Aboutt/Aboutt'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Nuestra empresa' title='Nosotros'/>
        <About/>
        <Title subTitle='Servicios que realizamos' title='Que ofrecemos'/>
        <Aboutt/>
        <Title subTitle='Diseños recientes' title='Proyectos'/>
        <Campus/>
        <Title subTitle='Contactanos' title='Estamos a un click'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App