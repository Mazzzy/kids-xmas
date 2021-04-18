import { FC, useContext } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { CartContext, InitContext } from '@/lib/context/provider';
import { WishItem, QuickPreview } from '@/lib/types';
import WishListItem from './WishListItem';
import NoResults from '@/components/molecules/noresults';
interface WishListProps {
  openModal: (product: QuickPreview) => void;
  wishlistData: any;
}

const WishList: FC<WishListProps> = ({ wishlistData, openModal }) => {
  const { searchTerm } = useContext<InitContext>(CartContext);
  const staticUserNames = [
    { staticUserId: 0, name: '' },
    { staticUserId: 1, name: 'Anna' },
    { staticUserId: 2, name: 'Sam' },
    { staticUserId: 3, name: 'Sameer' },
    { staticUserId: 4, name: 'Richie' },
    { staticUserId: 5, name: 'Mike' },
  ];

  // search by text criteria
  // const term = searchTerm;
  const term = '';
  console.log('searchTerm', searchTerm);
  const searchingFor = (searchText: string) => {
    return (x: any) => {
      return x.name.toLowerCase().includes(searchText.toLowerCase()) || !searchText;
    };
  };
  const filteredWithUserNames = staticUserNames.filter(searchingFor(term));
  const filteredWishListData = wishlistData.filter((el) => {
    return filteredWithUserNames.some((f) => {
      return f.staticUserId === el.id;
    });
  });

  // display searched by name wishlist data
  const wishlistCollection = filteredWishListData.map((wishListItem: WishItem) => {
    const { staticUserId, name } = staticUserNames.find((item) => item.staticUserId === wishListItem.id);
    return [
      <WishListItem
        key={wishListItem?.id}
        item={wishListItem}
        openModal={openModal}
        staticUserName={name}
        staticUserId={staticUserId}
      />,
    ];
  });

  let wishListView;
  if (wishlistCollection.length === 0) {
    wishListView = <NoResults />;
  } else {
    wishListView = <TransitionGroup component="div">{wishlistCollection}</TransitionGroup>;
  }
  return <>{wishListView}</>;
};

export default WishList;
