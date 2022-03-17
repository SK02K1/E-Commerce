import { ClipLoader } from 'react-spinners';

const override = `
  display: block;
  margin: 2rem auto;
  color: #6b7280;
`;

export const Loader = () => {
  return (
    <ClipLoader loading={true} size={15} css={override} speedMultiplier={2} />
  );
};
