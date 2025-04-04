import './Contacto.css';
import { useState } from 'react';
import { sendMessage } from '../../api/api';

function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    try {
      await sendMessage(formData);
      setStatus('Mensaje enviado con éxito.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      console.log('Mensaje enviado:', formData);
    } catch (error) {
      setStatus('Error al enviar el mensaje. Inténtalo de nuevo.');
      console.error(error);
    }
  };

  return (
    <section className="contacto" id="contacto">
      <div className="contenedor-contacto">
        <h2>Contáctenos</h2>
        <div className="fila">
          <div className="col">
            <div className="info">
              <h3>Email:</h3>
              <p>softcraft2024@gmail.com</p>
            </div>
            <div className="info">
              <h3>Teléfono:</h3>
              <p>+591 71486093</p>
            </div>
            <div className="info">
              <h3>País</h3>
              <p>Bolivia</p>
            </div>
            <div className="info">
              <h3>Ciudad:</h3>
              <p>Cochabamba</p>
            </div>
          </div>
          <div className="col">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name" 
              placeholder="Nombre..."
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo..."
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone" 
              placeholder="Teléfono..."
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              className="textArea"
              name="message" 
              cols="30"
              rows="10"
              placeholder="Mensaje..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button className="btn" type="submit">Enviar</button>
          </form>
            {status && <p>{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;