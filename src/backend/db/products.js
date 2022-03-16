import { v4 as uuid } from 'uuid';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: 'DJI Mavic 3',
    price: 2199.0,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/drones/DJI-Mavic-3.jpeg',
    type: 'drone',
    rating: 3,
  },
  {
    _id: uuid(),
    name: 'Moment Wide 18mm Lens',
    price: 129.99,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/lenses/Moment-Wide-18mm-Lens.jpeg',
    type: 'lens',
    rating: 3.5,
  },

  {
    _id: uuid(),
    name: 'Zhiyun CRANE 2S Camera Gimbal',
    price: 599.0,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/gimbals/Zhiyun-CRANE-2S.jpeg',
    type: 'gimbal',
    rating: 4.2,
  },
  {
    _id: uuid(),
    name: 'Fujifilm X-E4 APS-C Mirrorless Camera',
    price: 1049.95,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/cameras/fujifilm-X-E4.jpeg',
    type: 'camera',
    rating: 4,
  },
  {
    _id: uuid(),
    name: 'DJI RSC 2 Camera Gimbal',
    price: 739.0,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/gimbals/DJI-RSC-2.jpeg',
    type: 'gimbal',
    rating: 4.5,
  },
  {
    _id: uuid(),
    name: 'Sony Alpha a7 IV Full-Frame Mirrorless Camera',
    price: 2698.0,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/cameras/sony-alpha-a7-IV.jpeg',
    type: 'camera',
    rating: 5,
  },
  {
    _id: uuid(),
    name: 'Moment X-T30 II Mirrorless Camera with XC15-45mm Lens Kit',
    price: 999.0,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/cameras/X-130-II.jpeg',
    type: 'camera',
    rating: 4.2,
  },
  {
    _id: uuid(),
    name: 'Zhiyun Smooth Q3 Smartphone Gimbal',
    price: 84.99,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/gimbals/Zhiyun-Smooth-Q3.jpeg',
    type: 'gimbal',
    rating: 3.8,
  },
  {
    _id: uuid(),
    name: 'Sony FE 24-70mm f/2.8 GM Lens',
    price: 1998.0,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/lenses/Sony-FE-24-70mm.jpeg',
    type: 'lens',
    rating: 5,
  },
  {
    _id: uuid(),
    name: 'DJI Action 2 Power Combo / Dual Screen Combo',
    price: 519.0,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/cameras/DJI-Action-2.jpeg',
    type: 'camera',
    rating: 1.5,
  },

  {
    _id: uuid(),
    name: 'DJI Mini SE Compact Drone',
    price: 299.0,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/drones/DJI-Mini-SE.jpeg',
    type: 'drone',
    rating: 3.4,
  },
  {
    _id: uuid(),
    name: 'Fujifilm GF 110mm F2 R LM WR Lens',
    price: 2799.0,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/lenses/Fujifilm-GF-110mm-F2-R.jpeg',
    type: 'lens',
    rating: 2,
  },
  {
    _id: uuid(),
    name: 'Fujifilm GFX 100S Medium Format Mirrorless Camera Body',
    price: 5999.0,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/cameras/fujifilm-GFX-100S.jpeg',
    type: 'camera',
    rating: 4.5,
  },
];
