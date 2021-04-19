import { FC, useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchProduct } from '@/lib/queries';
import { QuickPreview, ProductLocal } from '@/lib/types';

import Counter from '@/components/molecules/counter';
import HeadingText from '@/components/atoms/heading';
import styles from './product.module.css';

interface WishItemProductProps {
  addToCart: (product: ProductLocal) => void;
  mapProductToUser: (productId: number) => void;
  openModal: (product: QuickPreview) => void;
  productItem: any;
}

const WishItemProduct: FC<WishItemProductProps> = ({ addToCart, openModal, productItem, mapProductToUser }) => {
  const { productId, quantity } = productItem;
  const { status, data, error } = useQuery(['product', productId], () => fetchProduct(productId));
  const [itemQuantity, updateItemQuantity] = useState<number>(quantity);
  const [isAdded, setAddState] = useState<boolean>(false);
  useEffect(() => {
    if (!isAdded) {
      return;
    }
    const timer1 = setTimeout(() => setAddState(false), 1500);
    // this will clear Timeout when component unmount like in willComponentUnmount
    return () => {
      clearTimeout(timer1);
    };
  }, [isAdded]);

  const addButtonClicked = (
    imageLocal: string,
    titleLocal: string,
    priceLocal: number,
    idLocal: number,
    quantityLocal: number
  ) => {
    const selectedProduct = {
      image: imageLocal,
      title: titleLocal,
      price: priceLocal,
      id: idLocal,
      quantity: quantityLocal,
    };
    addToCart(selectedProduct);
    setTimeout(() => mapProductToUser(idLocal), 1500);

    setAddState(true);
  };

  const quickView = (quickImage: string, quickTitle: string, quickPrice: number, quickId: number) => {
    const quickViewProduct = {
      image: quickImage,
      title: quickTitle,
      price: quickPrice,
      id: quickId,
    };
    openModal(quickViewProduct);
  };

  const renderProductDetails = () => {
    const { title, price, image } = data;
    return (
      <div className={styles.product_wrapper}>
        <div className={styles.product}>
          <div className={styles.outline}>
            <div
              className={styles.product_image}
              onClick={() => quickView(image, title, price, productId)}
              onKeyDown={() => quickView(image, title, price, productId)}
              role="button"
              tabIndex={productId}
            >
              <img src={image} alt={title} />
            </div>
            <h4 className={styles.product_name}>{`${title}`}</h4>
            <p className={styles.product_price}>{price}</p>
            <Counter minVal={1} maxVal={quantity} productQuantity={itemQuantity} updateQuantity={updateItemQuantity} />
            <div className={styles.productAction}>
              <button
                className={!isAdded ? '' : styles.added}
                type="button"
                onClick={() => {
                  addButtonClicked(image, title, price, productId, itemQuantity);
                }}
              >
                {!isAdded ? 'APPROVE IT ?' : '✔ APPROVED'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {status === 'loading' ? <HeadingText title="Loading Product details..." /> : data && renderProductDetails()}
      {status === 'error' && error && <HeadingText title={'Error in fetching productc'} />}
    </>
  );
};

export default WishItemProduct;
