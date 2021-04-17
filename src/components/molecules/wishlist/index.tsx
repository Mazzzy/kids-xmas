import { FC } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { WishItem, QuickPreview } from '@/lib/types';
import WishListItem from './WishListItem';
interface WishListProps {
  openModal: (product: QuickPreview) => void;
  wishlistData: any;
}

const WishList: FC<WishListProps> = ({ wishlistData, openModal }) => {
  const wishlistCollection = wishlistData.map((wishListItem: WishItem) => [
    <WishListItem key={wishListItem?.id} item={wishListItem} openModal={openModal} />,
  ]);

  let wishListView;
  if (wishlistCollection.length === 0) {
    wishListView = <p>No wishlist available</p>;
  } else {
    wishListView = <TransitionGroup component="div">{wishlistCollection}</TransitionGroup>;
  }
  return <>{wishListView}</>;
};

export default WishList;
