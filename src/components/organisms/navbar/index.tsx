import { FC, useState, MouseEvent, useContext } from 'react';
import { CartContext, InitContext } from '@/lib/context/provider';

import HeadingText from '@/components/atoms/heading';
import NavBrand from '@/components/molecules/navbrand';
import NavSearch from '@/components/molecules/navsearch';
import NavMenu from '@/components/molecules/navmenu';
import styles from './navbar.module.css';

const Navbar: FC = (): JSX.Element => {
  const { addSearchTerm } = useContext<InitContext>(CartContext);
  const [activeTab, setActiveTab] = useState('all');
  const [term, setTerm] = useState<string>('');

  // nav item click
  const setActiveTabClick = (e: MouseEvent<HTMLAnchorElement>, name: string) => {
    setActiveTab(name);
  };
  // search by keyword
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target?.value;
    if (searchTerm) {
      setTerm(searchTerm);
      addSearchTerm(searchTerm);
    }
  };

  // mobile search reset
  const resetSearch = () => {
    setTerm('');
  };

  return (
    <nav className={styles.navbar} role="navigation" aria-label="main navigation">
      <NavBrand />
      <HeadingText title="X-mas wishlist" />
      <NavSearch handleSearch={handleSearch} resetSearch={resetSearch} searchValue={term} />
      <NavMenu activeTab={activeTab} setActiveTabClick={setActiveTabClick} />
    </nav>
  );
};

export default Navbar;
