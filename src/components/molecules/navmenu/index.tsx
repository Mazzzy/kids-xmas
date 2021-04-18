import React, { FC, MouseEvent, useContext } from 'react';
import { CartContext, InitContext } from '@/lib/context/provider';
import NavItem from '@/components/atoms/navitem';
import styles from './navmenu.module.css';

interface NavMenuProps {
  activeTab?: string;
  setActiveTabClick: (e: MouseEvent<HTMLAnchorElement>, name: string) => void;
}

const NavMenu: FC<NavMenuProps> = ({ activeTab, setActiveTabClick }) => {
  const { totalItems, totalAmount } = useContext<InitContext>(CartContext);
  return (
    <div className={styles.navbar_menu}>
      <div className={styles.navbar_end}>
        <NavItem
          className={`${activeTab === 'wish' ? 'active_navitem' : ''}`}
          clickHandler={(e: MouseEvent<HTMLAnchorElement>) => setActiveTabClick(e, 'wish')}
        >
          Wish items
        </NavItem>
        <NavItem
          className={`${activeTab === 'cart' ? 'active_navitem' : ''}`}
          clickHandler={(e: MouseEvent<HTMLAnchorElement>) => setActiveTabClick(e, 'cart')}
        >
          <div className={styles.navbar_menu_cart}>
            <ul className={styles.navbar_menu_info}>
              <li>
                No. of items: <strong>{totalItems}</strong>
              </li>
              <li>
                Sub Total: <strong className={styles.navbar_info_total}>{totalAmount}</strong>
              </li>
            </ul>
            <img src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png" alt="Cart" />
            {totalItems ? <span className={styles.cartCount}>{totalItems}</span> : ''}
          </div>
        </NavItem>
      </div>
    </div>
  );
};

export default NavMenu;
