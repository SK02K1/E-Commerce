import CategoryCardStyles from './CategoryCard.module.css';

export const CategoryCard = ({ data: { categoryName, imgURL } }) => {
  return (
    <a href='/' className={CategoryCardStyles.categoryCard}>
      <div className={CategoryCardStyles.overlay}>
        <h2>{categoryName}</h2>
      </div>
      <img src={imgURL} alt={categoryName} />
    </a>
  );
};
