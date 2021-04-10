import { FC } from 'react';
import Link from 'next/link';
import Head from 'next/head';
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
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
      </nav>
    </header>
    {children}
  </div>
);
export default Layout;
