import { FC, useContext } from 'react';
import { CartContext, InitContext } from '@/lib/context/provider';
import { ProductLocal } from '@/lib/types';

import EmptyCart from '@/components/molecules/emptycart';
import styles from './cartcontent.module.css';

const CartContent: FC = () => {
  const { cart, totalAmount, removeProduct } = useContext<InitContext>(CartContext);
  let totalUnits = 0;
  const cartItems = cart.map((product: ProductLocal) => {
    totalUnits += product.quantity;
    return (
      <ul key={product.id} className={styles.cart_item_list}>
        <li className={styles.cart_item} key={product.title}>
          <img className={styles.product_image} src={product.image} alt="product" />
          <div className={styles.product_info}>
            <p className={styles.product_name}>{product.title}</p>
            <p className={styles.product_price}>{product.price}</p>
          </div>
          <div className={styles.product_total}>
            <p className={styles.quantity}>
              {product.quantity} {product.quantity > 1 ? 'Nos.' : 'No.'}{' '}
            </p>
            <p className={styles.amount}>{product.quantity * product.price}</p>
          </div>
          <button className={styles.product_remove} onClick={() => removeProduct(product.id)} type="button">
            ×
          </button>
        </li>
      </ul>
    );
  });

  let cartView;
  if (cartItems.length <= 0) {
    cartView = <EmptyCart />;
  } else {
    cartView = (
      <>
        {cartItems}
        <div className={styles.checkout_block}>
          <span>Total number of Units: </span>
          <span className={styles.numeric_info}>{totalUnits || ''}</span>
        </div>
        <div className={styles.checkout_block}>
          <span>Total amount to pay: </span>
          <span className={`${styles.numeric_info} ${styles.cart_total}`}>{totalAmount || ''}</span>
        </div>

        <div className={styles.action_block}>
          <button type="button" className={cart.length > 0 ? ' ' : styles.disabled}>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </>
    );
  }

  return <div className={styles.cart_content}>{cartView}</div>;
};

export default CartContent;
