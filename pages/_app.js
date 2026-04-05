import '../styles/globals.css';
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
        <title>Soluciones Tecnológicas Personalizadas | SoftCraft</title>
        <meta
          name="description"
          content="Creamos soluciones tecnológicas personalizadas, especializándonos en inteligencia artificial y desarrollo de software."
        />
        <meta
          name="keywords"
          content="desarrollo de software, inteligencia artificial, soluciones tecnológicas, Bolivia"
        />
        <meta name="author" content="SoftCraft Bolivia" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Soluciones Tecnológicas Personalizadas | SoftCraft" />
        <meta
          property="og:description"
          content="Creamos soluciones tecnológicas personalizadas, especializándonos en inteligencia artificial y desarrollo de software."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_BO" />
        <meta property="og:image" content="/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Soluciones Tecnológicas Personalizadas | SoftCraft" />
        <meta
          name="twitter:description"
          content="Creamos soluciones tecnológicas personalizadas, especializándonos en inteligencia artificial y desarrollo de software."
        />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>

      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.pathname} className="w-full h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;