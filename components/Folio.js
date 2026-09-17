// Folio: el encabezado de página de una publicación. Da contexto impreso a
// cada recorrido sin añadir ruido al titular.
const Folio = ({ section }) => (
  <div className="folio">
    <div className="site-container folio-inner">
      <span>SoftCraft Bolivia</span>
      <span>{section}</span>
    </div>
  </div>
);

export default Folio;
