import { ClipLoader } from 'react-spinners';
import './Loader.css';

const override = `
position: absolute;
top: 10rem;
z-index: 3;
`;

export const CardLoader = ({ showLoader }) => {
  return (
    <div className={`card-loader-wrapper card-loader-active-${showLoader}`}>
      <ClipLoader
        color='#3b82f6'
        loading={true}
        size={30}
        css={override}
        speedMultiplier={3}
      />
    </div>
  );
};
