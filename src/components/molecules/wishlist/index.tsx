import { FC } from 'react';
import { WishItem } from '@/lib/types';
import WishListItem from './WishListItem';

interface WishListProps {
  wishlistData: any;
}

const WishList: FC<WishListProps> = ({ wishlistData }) => {
  // render wish list
  const wishlistCollection = wishlistData.map((wishListItem: WishItem) => [
    <WishListItem key={wishListItem?.id} item={wishListItem} />,
  ]);

  return <>{wishlistCollection.length === 0 ? 'No wishlist available' : wishlistCollection}</>;
};

export default WishList;
