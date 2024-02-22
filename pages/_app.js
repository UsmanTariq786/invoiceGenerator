// `pages/_app.js`
import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material';
import Head from 'next/head';

const theme = createTheme({
  // typography: {
  //   fontFamily: ['Montserrat', 'cursive'].join(','),
  // },
});

export default function App({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Head>
        {/* <link href='https://fonts.googleapis.com/css2?family=Chilanka&display=swap' rel='stylesheet' /> */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>

      </Head>
      <Component {...pageProps} />;
      </ThemeProvider>
    </>
  )
}
