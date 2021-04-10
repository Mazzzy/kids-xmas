import { FC } from 'react';
import Head from 'next/head';
import Navbar from '@/components/organisms/navbar';
import Footer from '@/components/organisms/footer';

import styles from './layout.module.css';
type LayoutProps = {
  title?: string;
};
const Layout: FC<LayoutProps> = ({ children, title }) => (
  <div className={styles.layout_container}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navbar />
    </header>
    <div>{children}</div>
    <Footer />
  </div>
);
export default Layout;
