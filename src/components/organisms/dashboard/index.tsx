import { FC } from 'react';
import HeadingText from '@/components/atoms/heading';
import WishList from '@/components/molecules/wishlist';
import styles from './dashboard.module.css';

const DashboardContent: FC = () => {
  const loading = false;
  const wishListData: any = [
    {
      id: 1,
      userId: 1,
      date: '2020-03-02T00:00:02.000Z',
      products: [
        { productId: 1, quantity: 4 },
        { productId: 2, quantity: 1 },
        { productId: 3, quantity: 6 },
      ],
      __v: 0,
    },
    {
      id: 2,
      userId: 1,
      date: '2020-01-02T00:00:02.000Z',
      products: [
        { productId: 2, quantity: 4 },
        { productId: 1, quantity: 10 },
        { productId: 5, quantity: 2 },
      ],
      __v: 0,
    },
    {
      id: 3,
      userId: 2,
      date: '2020-03-01T00:00:02.000Z',
      products: [
        { productId: 1, quantity: 2 },
        { productId: 9, quantity: 1 },
      ],
      __v: 0,
    },
    { id: 4, userId: 3, date: '2020-01-01T00:00:02.000Z', products: [{ productId: 1, quantity: 4 }], __v: 0 },
    {
      id: 5,
      userId: 3,
      date: '2020-03-01T00:00:02.000Z',
      products: [
        { productId: 7, quantity: 1 },
        { productId: 8, quantity: 1 },
      ],
      __v: 0,
    },
  ];
  const error = false;
  return (
    <div className={styles.main_contents}>
      {loading ? <HeadingText title="Loading wishlish..." /> : wishListData && <WishList wishlistData={wishListData} />}
      {error && <HeadingText title={error} />}
    </div>
  );
};

export default DashboardContent;
