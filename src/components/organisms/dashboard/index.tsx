import { FC, useState, useContext } from 'react';
import { CartContext, InitContext } from '@/lib/context/provider';
import { WishItem, QuickPreview } from '@/lib/types';

import HeadingText from '@/components/atoms/heading';
import WishList from '@/components/molecules/wishlist';
import QuickView from '@/components/molecules/quickview';
import CardContent from '@/components/molecules/cartcontent';

import styles from './dashboard.module.css';

interface DashboardContentProps {
  wishListData?: WishItem[];
  queryStatus?: string;
  errorData?: any;
}
const DashboardContent: FC<DashboardContentProps> = ({ wishListData, queryStatus, errorData }) => {
  const [modalActive, flipModelState] = useState<boolean>(false);
  const { activeTab } = useContext<InitContext>(CartContext);
  const initQuickPreview = {
    image: 'blank',
    id: 0,
    price: 0,
    title: 'blank',
  };

  const [quickViewProduct, setQuickViewProduct] = useState<QuickPreview>(initQuickPreview);

  // open Modal
  const openModal = (product: QuickPreview) => {
    setQuickViewProduct(product);
    flipModelState(true);
  };

  // close Modal
  const closeModal = () => {
    flipModelState(false);
  };

  const wishListContent = (
    <div className={styles.main_contents}>
      {queryStatus === 'loading' ? (
        <HeadingText title="Loading wishlist..." />
      ) : (
        wishListData && <WishList wishlistData={wishListData} openModal={openModal} />
      )}
      {queryStatus === 'error' && errorData && <HeadingText title={errorData} />}
      <QuickView product={quickViewProduct} openModalState={modalActive} closeModal={closeModal} />
    </div>
  );

  const cartContent = <CardContent />;

  return activeTab === 'cart' ? cartContent : wishListContent;
};

export default DashboardContent;
