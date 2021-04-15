import { FC } from 'react';
import Card from '@/components/atoms/card';
import Badge from '@/components/atoms/badge';
import Label from '@/components/atoms/label';

import { getDate } from '@/lib/utils';
import { Product } from '@/lib/types';
import WishItemProduct from './product';
import styles from './wishlistitem.module.css';

interface WishListItemProps {
  item: any;
}
const staticUserNames = ['Anna', 'Sam', 'Carolina', 'Richie', 'Mike'];

const WishListItem: FC<WishListItemProps> = ({ item }) => {
  const { id, userId, date, products } = item;
  return (
    <Card>
      <div className={styles.wish_list}>
        <div className={styles.wish_list_box}>
          <p>
            <Badge title={getDate(date)} className={styles.wish_list_date} />
            <Label>{staticUserNames[userId + 1] || ''}</Label>
          </p>
        </div>
        <div className={styles.wish_list_box}>
          {products.map((item: Product, indx: number) => (
            <WishItemProduct key={`product-item-${id}-${indx}`} productItem={item} />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default WishListItem;
