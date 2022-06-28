// import {
//   bags,
//   B_Tshirt,
//   jeans,
//   jeans_Cloathing,
//   jeans_Dress,
//   jeans_Jacket,
//   Shoes,
//   T_Shirts,
//   W_Tshirt,
// } from "../../assets";

import {
  bags,
  B_Tshirt,
  Jeans,
  Jeans_Cloathing,
  Jeans_Dress,
  Jeans_jacket,
  Shoes,
} from "../../assets";

const initState = {
  products: [
    {
      id: 1,
      name: "Boys T-Shirts",
      image: B_Tshirt,
      price: 20,
      discount: 2,
      discountPrice: 20 - (2 / 100) * 20,
      quantity: 1,
      desc: "Perfect Shoping site for people",
    },
    {
      id: 2,
      name: "Hand Bags",
      image: bags,
      price: 30,
      discount: 3,
      discountPrice: 30 - (3 / 100) * 30,
      quantity: 1,
      desc: "Perfect Shoping site for people",
    },
    {
      id: 3,
      name: "Jeans Wearings",
      image: Jeans_Cloathing,
      price: 25,
      discount: 2,
      discountPrice: 25 - (2 / 100) * 25,
      quantity: 5,
      desc: "Perfect Shoping site for people",
    },
    {
      id: 4,
      name: "Jeans Dress",
      image: Jeans_Dress,
      price: 20,
      discount: 2,
      discountPrice: 20 - (2 / 100) * 20,
      quantity: 2,
      desc: "Perfect Shoping site for people",
    },
    {
      id: 5,
      name: "Jeans Jackets",
      image: Jeans_jacket,
      price: 40,
      discount: 2,
      discountPrice: 40 - (2 / 100) * 40,
      quantity: 10,
      desc: "Perfect Shoping site for people",
    },
    {
      id: 6,
      name: "Jeans",
      image: Jeans,
      price: 10,
      discount: 2,
      discountPrice: 10 - (2 / 100) * 10,
      quantity: 7,
      desc: "Perfect Shoping site for people",
    },
    {
      id: 7,
      name: "Shoes",
      image: Shoes,
      price: 20,
      discount: 2,
      discountPrice: 20 - (2 / 100) * 20,
      quantity: 1,
      desc: "Perfect Shoping site for people",
    },
    {
      id: 8,
      name: "White T-Shirts",
      image: bags,
      price: 20,
      discount: 2,
      discountPrice: 20 - (2 / 100) * 20,
      quantity: 1,
      desc: "Perfect Shoping site for people",
    },
    {
      id: 9,
      name: "T-Shirts",
      image: bags,
      price: 50,
      discount: 2,
      discountPrice: 50 - (2 / 100) * 50,
      quantity: 8,
      desc: "Perfect Shoping site for people",
    },
  ],
};
const ProductsReducers = (state = initState, action) => {
  switch (action.type) {
    default:
      return initState;
  }
};

export default ProductsReducers; 
