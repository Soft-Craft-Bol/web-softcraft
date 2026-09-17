import { Head, Html, Main, NextScript } from 'next/document';

// El tema se resuelve antes del primer pintado: sin destello oscuro para quien
// eligió claro, y sin depender de la hidratación de React.
const themeScript = `(function(){try{var s=window.localStorage.getItem('softcraft-theme');var t=s==='light'||s==='dark'?s:(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`;

const Document = () => (
  <Html lang="es">
    <Head>
      <meta charSet="UTF-8" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
