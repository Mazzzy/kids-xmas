import { FC } from 'react';

import Card from '@/components/atoms/card';
import Badge from '@/components/atoms/badge';
import Label from '@/components/atoms/label';

import { getDate } from '@/lib/utils';
import styles from './wishlistitem.module.css';

interface WishListItemProps {
  item: any;
}

const WishListItem: FC<WishListItemProps> = ({ item }) => {
  const { id, userId, date } = item;

  return (
    <Card>
      <div className={styles.box}>
        <div className={styles.box_item}>
          <p>
            {item?.completed ? <Badge title="Completed" /> : ' '}
            <Label className="box-item-head">{`For person ${userId}`}</Label>
          </p>
        </div>
        <div className="box-item">
          <p>
            Id:
            <Label>{id}</Label>
          </p>
          <p>
            User ID:
            <Label>{userId}</Label>
          </p>
          <p>Date:</p>
          <Label>{getDate(date)}</Label>
        </div>
      </div>
    </Card>
  );
};

export default WishListItem;
