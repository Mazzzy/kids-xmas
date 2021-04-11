import { FC } from 'react';
import HeadingText from '@/components/atoms/heading';
import WishList from '@/components/molecules/wishlist';
import { WishItem } from '@/lib/types';
import styles from './dashboard.module.css';

interface DashboardContentProps {
  wishListData?: WishItem[];
  queryStatus?: string;
  errorData?: any;
}
const DashboardContent: FC<DashboardContentProps> = ({ wishListData, queryStatus, errorData }) => {
  return (
    <div className={styles.main_contents}>
      {queryStatus === 'loading' ? (
        <HeadingText title="Loading wishlist..." />
      ) : (
        wishListData && <WishList wishlistData={wishListData} />
      )}
      {queryStatus === 'error' && errorData && <HeadingText title={errorData} />}
    </div>
  );
};

export default DashboardContent;
