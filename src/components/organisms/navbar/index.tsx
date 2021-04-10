import { FC, useState, MouseEvent } from 'react';

import NavBrand from '@/components/molecules/navbrand';
import NavMenu from '@/components/molecules/navmenu';
import styles from './navbar.module.css';

const Navbar: FC = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState('all');
  const setActiveTabClick = (e: MouseEvent<HTMLAnchorElement>, name: string) => {
    setActiveTab(name);
  };

  return (
    <nav className={styles.navbar} role="navigation" aria-label="main navigation">
      <NavBrand />
      <NavMenu activeTab={activeTab} setActiveTabClick={setActiveTabClick} />
    </nav>
  );
};

export default Navbar;
