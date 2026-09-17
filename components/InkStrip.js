// Tira de tinta: la firma del taller. Los cuatro colores del logo en proporciones
// de impresión, no en partes iguales.
const InkStrip = ({ variant = '', label, className = '' }) => {
  const classes = ['ink-strip', variant, className].filter(Boolean).join(' ');

  return (
    <span className={classes} aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
      {label ? <b>{label}</b> : null}
    </span>
  );
};

export default InkStrip;
