import './Contacto.css';
import useContactMessage from '../../hooks/useContactMessage';

function Contacto() {
  const { formData, status, handleChange, handleSubmit } = useContactMessage();

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
              <p>+591 62982552</p>
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
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Seleccione el tipo de proyecto...
                </option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="Web Corporativa">Web Corporativa</option>
                <option value="Portafolio Web">Portafolio Web</option>
                <option value="Software a medida">Software a medida</option>
                <option value="Integracion de IA">Integración de IA</option>
                <option value="Aplicacion movil">Aplicación móvil</option>
                <option value="Hosting">Hosting</option>
                <option value="Integracion de Servicios web">Integración de Servicios web</option>
              </select>
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