import { FC, useContext } from 'react';
import { CartContext, InitContext } from '@/lib/context/provider';
import { ProductLocal } from '@/lib/types';
import { ruleForDiscount } from '@/lib/utils';

import EmptyCart from '@/components/molecules/emptycart';
import styles from './cartcontent.module.css';

const CartContent: FC = () => {
  const { cart, totalAmount, removeProduct, removeProductToUser } = useContext<InitContext>(CartContext);
  let totalUnits = 0;
  let finalAmountToCheckout = 0;
  let totalDiscountAmount = 0;
  const cartItems = cart.map((product: ProductLocal) => {
    const discountFraction = ruleForDiscount(product.quantity);
    const actualProductTotal = product.quantity * product.price;
    const discountAmount = actualProductTotal * discountFraction;
    const finalProductAmount = actualProductTotal - discountAmount;
    totalDiscountAmount += discountAmount;
    finalAmountToCheckout += finalProductAmount;
    totalUnits += product.quantity;
    return (
      <ul key={product.id} className={styles.cart_item_list}>
        <li className={styles.cart_item} key={product.title}>
          <img className={styles.product_image} src={product.image} alt="product" />
          <div className={styles.product_info}>
            <p className={styles.product_name}>{product.title}</p>
            <p className={styles.cart_item_info}>
              Unit price: <span className={styles.product_price}>{product.price.toFixed(2)}</span>
            </p>
            <p className={styles.cart_item_info}>
              {`Discounted price ${discountFraction * 100}% `}
              <span className={`${styles.product_price} ${styles.discount_price}`}>{discountAmount.toFixed(2)}</span>
            </p>
          </div>
          <div className={styles.product_total}>
            <p className={styles.quantity}>
              {product.quantity} {product.quantity > 1 ? 'Nos.' : 'No.'}{' '}
            </p>
            <p className={styles.cart_item_info}>
              Actual amount:{' '}
              <span className={`${styles.amount} ${styles.actual_amount}`}>{actualProductTotal.toFixed(2)}</span>
            </p>
            <p className={styles.cart_item_info}>
              After discount: <span className={styles.amount}>{finalProductAmount.toFixed(2)}</span>
            </p>
          </div>
          <button
            className={styles.product_remove}
            onClick={() => {
              removeProduct(product.id);
              removeProductToUser(product.id);
            }}
            type="button"
          >
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
          <span>Total actual amount : </span>
          <span className={`${styles.numeric_info} ${styles.cart_total} ${styles.actual_amount}`}>
            {totalAmount.toFixed(2) || ''}
          </span>
        </div>

        <div className={styles.checkout_block}>
          <span>Total discount: </span>
          <span className={`${styles.numeric_info} ${styles.cart_total} ${styles.discount_price}`}>
            {totalDiscountAmount.toFixed(2) || ''}
          </span>
        </div>

        <div className={styles.checkout_block}>
          <span>Final amount to pay: </span>
          <span className={`${styles.numeric_info} ${styles.cart_total}`}>
            {finalAmountToCheckout.toFixed(2) || ''}
          </span>
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
