import { FC, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import Card from '@/components/atoms/card';
import Badge from '@/components/atoms/badge';
import Label from '@/components/atoms/label';

import { getDate } from '@/lib/utils';
import { Product, QuickPreview } from '@/lib/types';
import { CartContext, InitContext } from '@/lib/context/provider';

import WishItemProduct from './product';
import styles from './wishlistitem.module.css';

interface WishListItemProps {
  item: any;
  openModal: (product: QuickPreview) => void;
}
const staticUserNames = ['Anna', 'Sam', 'Carolina', 'Richie', 'Mike'];

const WishListItem: FC<WishListItemProps> = ({ item, openModal }) => {
  const { addProduct } = useContext<InitContext>(CartContext);
  const { id, userId, date, products } = item;
  return (
    <Card>
      <div className={styles.wish_list_box}>
        <p>
          <Badge title={getDate(date)} className={styles.wish_list_date} />
          <Label>{staticUserNames[userId + 1] || ''}</Label>
        </p>
      </div>
      <div className={styles.wish_list_box}>
        {products.map((item: Product, indx: number) => (
          <CSSTransition
            key={`wishlist-id-${id}-${indx}`}
            classNames="fadeIn"
            timeout={{
              enter: 300,
              exit: 500,
            }}
          >
            <WishItemProduct productItem={item} addToCart={addProduct} openModal={openModal} />
          </CSSTransition>
        ))}
      </div>
    </Card>
  );
};

export default WishListItem;
