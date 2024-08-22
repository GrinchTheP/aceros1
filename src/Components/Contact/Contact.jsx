import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando...");
    const formData = new FormData(event.target);

    formData.append("access_key", "48ea2675-71f1-43d8-a068-e1d80c93daf6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Mensaje enviado satisfactoriamente");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return (
    
    <div className='contact'>
        <div className="contact-col">
            <h3>Envianos un mensaje <img src={msg_icon} alt="" /></h3>
            <p>Si necesitas un presupuesto o si tienes alguna duda mandanos un mensaje, 
            sera respondido a la brevedad.</p>
            <ul>
                <li><img src={mail_icon} alt="" />wgr@acerosingepro.cl</li>
                <li><img src={phone_icon} alt="" />+56 9 4001 0761</li>
                <li><img src={location_icon} alt="" />Cacique Colín KM 9650, Lampa.</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Nombre</label>
                <input type="text" name='name' placeholder='Ingresa tu nombre' required />
                <label>Numero de telefono</label>
                <input type="tel" name='phone' placeholder='Ingresa tu numero de telefono' required />
                <label>Escribe tu mensaje</label>
                <textarea name="message" rows="6" placeholder='Ingresa tu mensaje' required></textarea>
                <button type='submit' className='btn'>Enviar mensaje <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact