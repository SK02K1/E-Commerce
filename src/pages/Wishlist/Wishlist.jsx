import { useWishlist } from '../../contexts';

export const Wishlist = () => {
  const {
    state: { wishlist },
  } = useWishlist();

  return (
    <div>
      <h1 className='text-lg text-center m-lg-tb'>
        My Wishlist ({wishlist.length})
      </h1>
    </div>
  );
};
