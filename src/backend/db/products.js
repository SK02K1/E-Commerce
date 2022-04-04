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
    description:
      'Capture stunning imagery with the legendary Hasselblad camera and enjoy a smooth flight with omnidirectional obstacle sensing. Every improvement on Mavic 3 sets a higher standard for aerial photography. Fly with Mavic 3 and discover imaging above everything.',
  },
  {
    _id: uuid(),
    name: 'Moment Wide 18mm Lens',
    price: 129.99,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/lenses/Moment-Wide-18mm-Lens.jpeg',
    type: 'lens',
    rating: 3.5,
    description:
      'The Wide 18mm M-series Lens is an everyday, go-to wide-angle lens for mobile photographers and filmmakers. The cinema quality glass and wide angle design allows your phone to capture 2x more picture. The most advanced lens we’ve ever made, the Wide 18mm Lens captures smartphone photos and videos that are beautiful, crisp, and straight, with no fisheye distortion.',
  },

  {
    _id: uuid(),
    name: 'Zhiyun CRANE 2S Camera Gimbal',
    price: 599.0,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/gimbals/Zhiyun-CRANE-2S.jpeg',
    type: 'gimbal',
    rating: 4.2,
    description:
      'Widely recognized as the best of 3-axis handheld gimbals for professional filmmakers, the CRANE 2 series is proud to present the newest masterpiece CRANE 2S. Featuring high load capacity and modular design, the CRANE 2S is keen on delivering reliable and excellent performance, even in the most challenging environments. Improved responsiveness of each axis while maintaining dynamic stabilization the CRANE 2S handles large cameras such as the BMPCC 6K, Panasonic S1H, Canon EOS 1DX Mark II with total ease.',
  },
  {
    _id: uuid(),
    name: 'Fujifilm X-E4 APS-C Mirrorless Camera',
    price: 1049.95,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/cameras/fujifilm-X-E4.jpeg',
    type: 'camera',
    rating: 4,
    description:
      'The Fujifilm X-E4 Mirrorless Camera brings the best of the legendary X Series products together into one camera that is the perfect storytelling tool for everyday photographers, videographers, and content creators who want results to be proud of. This lightweight, compact camera features the same 26.1-megapixel, X-Trans CMOS 4 sensor, 0.02 sec autofocus, and fantastic color science that can be found in the professional X Series cameras, but makes these features easily accessible to everyone.',
  },
  {
    _id: uuid(),
    name: 'DJI RSC 2 Camera Gimbal',
    price: 739.0,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/gimbals/DJI-RSC-2.jpeg',
    type: 'gimbal',
    rating: 4.5,
    description:
      'The DJI RSC 2 is an entry-level stabilizer with a weight-to-payload ratio that outperforms similar products on the market. What makes it even more advanced is the new foldable design that allows you to swiftly transform into one of six configurations for dynamic shooting and convenient storage. Once folded, it is as small as a sheet of A5 paper, making it easy to take along anywhere that your shooting requires. Upgraded based on Ronin-SC, DJI RSC 2 to provide higher payload capability. The budget-friendly DJI RSC 2 is perfect for on-the-go pros and beginners alike.',
  },
  {
    _id: uuid(),
    name: 'Sony Alpha a7 IV Full-Frame Mirrorless Camera',
    price: 2698.0,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/cameras/sony-alpha-a7-IV.jpeg',
    type: 'camera',
    rating: 5,
    description:
      'The new Alpha 7 IV is an exceptional hybrid camera packed with outstanding still image quality and evolved video technology with advanced autofocus, enhanced operability and improved workflow capability. The model was developed with the environment in mind by using Sony’s original recycled plastic SORPLAS™ for the camera body and packaging with recyclable materials and less plastic.',
  },
  {
    _id: uuid(),
    name: 'Moment X-T30 II Mirrorless Camera with XC15-45mm Lens Kit',
    price: 999.0,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/cameras/X-130-II.jpeg',
    type: 'camera',
    rating: 4.2,
    description:
      'Cleverly weaving proven technology with a vintage aesthetic, X-T30 II has much to offer stills photographers and videographers of all levels. The 26.1MP back-illuminated X-Trans sensor and X-Processor 4 imaging engine combine to deliver exceptional performance, with autofocusing down to -7EV in just 0.02 secs – and detail-packed results full of vibrant color. Pick up and start creating in seconds by flicking over to the Advanced SR Auto mode, or take more control over your output. X-T30 II has the features and functions to fit your creative style and mood, including the ability to share your work in seconds, via Wi-Fi or Bluetooth.',
  },
  {
    _id: uuid(),
    name: 'Zhiyun Smooth Q3 Smartphone Gimbal',
    price: 84.99,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/gimbals/Zhiyun-Smooth-Q3.jpeg',
    type: 'gimbal',
    rating: 3.8,
    description:
      'This 3-axis smartphone stabilizer features a built-in LED video light with three brightness settings, allowing you to record smooth, professional-looking videos with your phone. You can also use the app to set up creative movements such as Simplified Dolly Zoom, as well as Advanced Smart Tracking and one-tap live streaming.',
  },
  {
    _id: uuid(),
    name: 'Sony FE 24-70mm f/2.8 GM Lens',
    price: 1998.0,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/lenses/Sony-FE-24-70mm.jpeg',
    type: 'lens',
    rating: 5,
    description:
      'The Sony FE 24-70mm f/2.8 GM is the ultimate choice for professional portrait, travel, and event photographers seeking the highest possible optical performance. The XA element reduces aberration and delivers the ultimate resolution throughout the entire zoom range and aperture range, as well as from corner to corner of all image files.',
  },
  {
    _id: uuid(),
    name: 'DJI Action 2 Power Combo / Dual Screen Combo',
    price: 519.0,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/cameras/DJI-Action-2.jpeg',
    type: 'camera',
    rating: 1.5,
    description:
      "DJI Action 2 isn't just ultra-versatile, it's also our most powerful action camera yet. The innovative magnetic design lets you effortlessly swap out accessories as you capture life on the go. From parkour to park walks, break the mold with DJI Action 2.",
  },

  {
    _id: uuid(),
    name: 'DJI Mini SE Compact Drone',
    price: 299.0,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/drones/DJI-Mini-SE.jpeg',
    type: 'drone',
    rating: 3.4,
    description:
      'The compact-yet-powerful DJI Mini SE is the perfect creative companion, capturing your moments in a way that effortlessly elevates the ordinary. Together with the easy-to-use DJI Fly app, you’ll enjoy a simplified flying experience and a perspective unlike any other.',
  },
  {
    _id: uuid(),
    name: 'Fujifilm GF 110mm F2 R LM WR Lens',
    price: 2799.0,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/lenses/Fujifilm-GF-110mm-F2-R.jpeg',
    type: 'lens',
    rating: 2,
    description:
      'The FUJINON GF110mmF2 R LM WR is a medium telephoto lens for portraits. With a focal length equivalent to 87mm in the 35mm format, it achieves a brightness of F2.0 when used wide open to deliver beautiful bokeh. The high resolving power of the area in focus and the rich bokeh unique to medium format fast lenses depicts portraits with a realistic three-dimensional feel. It features fast and quiet AF due to a linear motor, is dust and weather-resistant, and is capable of operating in environments as cold as -10°C. The lens combines high performance and reliability as a professional work tool.',
  },
  {
    _id: uuid(),
    name: 'Fujifilm GFX 100S Medium Format Mirrorless Camera Body',
    price: 5999.0,
    img: 'https://focus-store-sk02k1.netlify.app/assets/product/cameras/fujifilm-GFX-100S.jpeg',
    type: 'camera',
    rating: 4.5,
    description:
      'The Fujifilm GFX100S is a new generation of large format digital camera, designed to suit a new generation of creators. The 102MP back-illuminated CMOS sensor combines with the X-Processor 4 quad-core CPU to deliver images of astonishing quality and professional 4K/30p video. The camera’s five-axis In-Body Image Stabilization provides up to 6 stops of vibration reduction, while phase detection autofocus pixels, covering nearly 100% of the frame, work at speeds of up to 0.16 sec in light as low as -5.5EV. Have the freedom to create, even when the light begins to fade, and do it knowing that Fujifilm’s legendary color science will deliver the beautiful tones it is renowned for time and time again.',
  },
];
