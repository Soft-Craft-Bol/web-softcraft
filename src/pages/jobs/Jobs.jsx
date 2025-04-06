import { useState } from "react";
import './Trabajos.css';
import ImagenesApp from '../../assets/ImagenesApp';

const trabajosData = [
    { id: 1, categoria: 'disenio', img: ImagenesApp.samba, titulo: 'Administrador Samba para OpenSuse', tecnologias: ['python'] },
    { id: 2, categoria: 'programacion', img: ImagenesApp.AlquilerAmigos, titulo: 'Alquiler de amigos', tecnologias: ['html', 'css', 'javascript', 'React js', 'Python', 'Django', 'Postgre SQL'] },
    { id: 3, categoria: 'programacion', img: ImagenesApp.km, titulo: 'Km', tecnologias: ['html', 'css', 'javascript', 'React js', 'Node js', 'Express', 'Mongo db'] },
];

function Trabajos() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');

    const filtrarTrabajos = (categoria) => {
        setCategoriaSeleccionada(categoria);
    };

    const trabajosFiltrados = categoriaSeleccionada === 'todos'
        ? trabajosData
        : trabajosData.filter(trabajo => trabajo.categoria === categoriaSeleccionada);

    return (
        <section className="trabajos" id="trabajos">
            <div className="trabajos-container">
                <h2 className="trabajos-titulo">Nuestros Trabajos</h2>
                <p className="trabajos-subtitulo">Explora nuestros proyectos destacados</p>
                
                <nav className="trabajos-filtros">
                    <button 
                        className={`trabajos-filtro-btn ${categoriaSeleccionada === 'todos' ? 'active' : ''}`} 
                        onClick={() => filtrarTrabajos('todos')}
                    >
                        Todos
                    </button>
                    <button 
                        className={`trabajos-filtro-btn ${categoriaSeleccionada === 'disenio' ? 'active' : ''}`} 
                        onClick={() => filtrarTrabajos('disenio')}
                    >
                        Diseño
                    </button>
                    <button 
                        className={`trabajos-filtro-btn ${categoriaSeleccionada === 'programacion' ? 'active' : ''}`} 
                        onClick={() => filtrarTrabajos('programacion')}
                    >
                        Programación
                    </button>
                    <button 
                        className={`trabajos-filtro-btn ${categoriaSeleccionada === 'animaciones' ? 'active' : ''}`} 
                        onClick={() => filtrarTrabajos('animaciones')}
                    >
                        Animaciones
                    </button>
                </nav>

                <div className="trabajos-galeria">
                    {trabajosFiltrados.map(trabajo => (
                        <div key={trabajo.id} className="trabajo-item">
                            <div className="trabajo-img-container">
                                <img 
                                    src={trabajo.img} 
                                    alt={trabajo.titulo} 
                                    className="trabajo-img" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="trabajo-info">
                                <h3 className="trabajo-titulo">{trabajo.titulo}</h3>
                                <div className="trabajo-tecnologias">
                                    {trabajo.tecnologias.map((tec, index) => (
                                        <span key={index} className="tecnologia-badge">{tec}</span>
                                    ))}
                                </div>
                                <a href="#" className="trabajo-enlace">Ver Detalles →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Trabajos;