import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function MyApp({ Component, pageProps }) {
    return (    
        <>
          <Head>
            {/*Fixing title on next/head */}
            <title>Unlock Dashboard</title>
          </Head>
          <Component {...pageProps} />

        </>    
    )
  }