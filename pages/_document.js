import { Html, Head, Main, NextScript } from 'next/document';

const themeScript = `
  (function () {
    try {
      var savedTheme = window.localStorage.getItem('softcraft-theme');
      var systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      document.documentElement.dataset.theme = savedTheme || systemTheme;
    } catch (error) {
      document.documentElement.dataset.theme = 'dark';
    }
  })();
`;

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta charSet="UTF-8" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
