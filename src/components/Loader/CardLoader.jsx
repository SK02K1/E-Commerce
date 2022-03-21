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
        color='#e8eaed'
        loading={true}
        size={20}
        css={override}
        speedMultiplier={3}
      />
    </div>
  );
};
