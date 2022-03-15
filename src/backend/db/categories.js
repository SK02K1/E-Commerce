import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'Drones',
    imgURL: 'https://focus-store-sk02k1.netlify.app/assets/category/drone.jpeg',
  },
  {
    _id: uuid(),
    categoryName: 'Gimbals',
    imgURL:
      'https://focus-store-sk02k1.netlify.app/assets/category/gimbal.jpeg',
  },
  {
    _id: uuid(),
    categoryName: 'Cameras',
    imgURL:
      'https://focus-store-sk02k1.netlify.app/assets/category/camera.jpeg',
  },
  {
    _id: uuid(),
    categoryName: 'Lenses',
    imgURL:
      'https://focus-store-sk02k1.netlify.app/assets/category/lenses.jpeg',
  },
];
