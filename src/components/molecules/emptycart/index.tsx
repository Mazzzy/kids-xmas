import { FC } from 'react';
import styles from './emptycart.module.css';

const EmptyCart: FC = () => {
  return (
    <div className={styles.empty_cart}>
      <img src="https://res.cloudinary.com/sivadass/image/upload/v1495427934/icons/empty-cart.png" alt="empty-cart" />
      <h2>You cart is empty!</h2>
    </div>
  );
};

export default EmptyCart;
