import type { AppProps } from 'next/app';
import '@/lib/styles.css';

function XmasApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default XmasApp;
