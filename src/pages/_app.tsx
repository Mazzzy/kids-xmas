import type { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';

import { Hydrate } from 'react-query/hydration';
import queryClient from '@/lib/rquery-client';
import { CartProvider } from '@/lib/context/provider';

import '@/lib/styles.css';

function XmasApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
export default XmasApp;
