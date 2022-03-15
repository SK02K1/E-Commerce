import WrapperStyles from './Wrapper.module.css';

export const Wrapper = ({ children }) => {
  return <div className={WrapperStyles.wrapper}>{children}</div>;
};
