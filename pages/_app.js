import '../styles/globals.css';
import '../styles/personality.css';
import Head from 'next/head';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>SoftCraft Bolivia | Software a medida e IA aplicada</title>
        <meta
          name="description"
          content="SoftCraft Bolivia convierte problemas de operación en software a medida, automatización e IA aplicada con acompañamiento continuo."
        />
        <meta
          name="keywords"
          content="desarrollo de software, inteligencia artificial, soluciones tecnológicas, Bolivia"
        />
        <meta name="author" content="SoftCraft Bolivia" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="SoftCraft Bolivia | Software a medida e IA aplicada" />
        <meta
          property="og:description"
          content="Soluciones de software a medida, automatización e IA aplicada para problemas reales."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_BO" />
        <meta property="og:image" content="/LogoOficial.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SoftCraft Bolivia | Software a medida e IA aplicada" />
        <meta
          name="twitter:description"
          content="Soluciones de software a medida, automatización e IA aplicada para problemas reales."
        />
        <meta name="twitter:image" content="/LogoOficial.png" />
      </Head>

      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.asPath} className="route-view">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
