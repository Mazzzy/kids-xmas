import { FC } from 'react';
import { useQuery } from 'react-query';
import { fetchProduct } from '@/lib/queries';

import HeadingText from '@/components/atoms/heading';
import Card from '@/components/atoms/card';
import Label from '@/components/atoms/label';
import styles from './product.module.css';

interface WishItemProductProps {
  productItem: any;
}

const WishItemProduct: FC<WishItemProductProps> = ({ productItem }) => {
  const { productId, quantity } = productItem;
  const { status, data, error } = useQuery(['product', productId], () => fetchProduct(productId));

  const renderProductDetails = () => {
    const { title, price, image } = data;
    return (
      <Card className={styles.product_box}>
        <div className={styles.product_box_item}>
          <div className={styles.product_box_head}>
            <Label>{title}</Label>
          </div>
          <img src={image} alt={`product-thumbnail-${productId}`} className={styles.product_thumbnail} />
          <div className={styles.product_box_footer}>
            <Label>{price && '$:' + price}</Label>
            <Label>{quantity && '#:' + quantity}</Label>
          </div>
        </div>
      </Card>
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
