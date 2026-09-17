// Marca de registro: el punto de calce de la imprenta. Se usa en las esquinas
// de bloques compuestos, nunca como decoración suelta.
const RegisterMark = ({ className = '', position = 'tl' }) => {
  const classes = ['reg-mark', `reg-mark--${position}`, className].filter(Boolean).join(' ');

  return (
    <svg className={classes} viewBox="0 0 28 28" aria-hidden="true" focusable="false">
      <circle cx="14" cy="14" r="6.5" />
      <path d="M14 1.5v6M14 20.5v6M1.5 14h6M20.5 14h6" />
    </svg>
  );
};

export default RegisterMark;
