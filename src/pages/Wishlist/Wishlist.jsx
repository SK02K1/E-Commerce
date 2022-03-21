import { WishlistItemCard } from '../../components';
import { useWishlist } from '../../contexts';

export const Wishlist = () => {
  const {
    wishlistState: { wishlist },
  } = useWishlist();

  return (
    <div>
      <h1 className='text-lg text-center m-lg-tb'>
        My Wishlist ({wishlist.length})
      </h1>
      <div className='grid-container auto'>
        {wishlist.map((wishlistItem) => (
          <WishlistItemCard key={wishlistItem._id} product={wishlistItem} />
        ))}
      </div>
    </div>
  );
};
