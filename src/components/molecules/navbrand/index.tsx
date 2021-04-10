import { FC } from 'react';
import NavItem from '@/components/atoms/navitem';
import Logo from '@/components/atoms/logo';
import styles from './navbrand.module.css';

interface NavBrandProps {
  brandLogo?: string;
}

const NavBrand: FC<NavBrandProps> = ({ brandLogo }) => {
  return (
    <div className={styles.navbar_brand}>
      <NavItem href="#">
        <Logo url={brandLogo} />
      </NavItem>
    </div>
  );
};

export default NavBrand;
