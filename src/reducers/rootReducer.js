import * as actions from '../actions/actionTypes';

const initialState = {
  myArrayOfItems: [
    {
      id: 1,
      productName: 'iPhone 7',
      productPrice: 200,
      imgSrc: '../assets/iphone-1.jpeg',
    },
    {
      id: 2,
      productName: 'iPhone 12',
      productPrice: 300,
      imgSrc: '../assets/iphone-2.jpg',
    },
    {
      id: 3,
      productName: 'iPhone 6',
      productPrice: 80,
      imgSrc: '../assets/iphone-3.jpeg',
    },
    {
      id: 4,
      productName: 'Bluetooth Headphones',
      productPrice: 250,
      imgSrc: '../assets/headphone-1.jpeg',
    },
    {
      id: 5,
      productName: 'Noise Cancellation Headphones',
      productPrice: 159,
      imgSrc: '../assets/headphone-2.jpeg',
    },
    {
      id: 6,
      productName: 'Sony On-Ear Headphones',
      productPrice: 400,
      imgSrc: '../assets/headphone-3.jpeg',
    },
    {
      id: 7,
      productName: 'HP Envy x360 13',
      productPrice: 950,
      imgSrc: '../assets/laptop-1.jpeg',
    },
    {
      id: 8,
      productName: 'Silver iMac',
      productPrice: 600,
      imgSrc: '../assets/laptop-2.jpg',
    },
    {
      id: 9,
      productName: 'Mac Book Air',
      productPrice: 600,
      imgSrc: '../assets/laptop-3.jpeg',
    },
    {
      id: 10,
      productName: 'VR Goggles',
      productPrice: 160,
      imgSrc: '../assets/console-1.jpg',
    },
    {
      id: 11,
      productName: 'Controllers',
      productPrice: 90,
      imgSrc: '../assets/console-2.jpeg',
    },
    {
      id: 12,
      productName: 'Play Station 4',
      productPrice: 120,
      imgSrc: '../assets/console-3.jpeg',
    },
  ],
  count: 0,
  addedItems: [],
  total: 0,
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TO_CART:
      let addedItem = state.myArrayOfItems.find (item => item.id === action.id);
      let existed_item = state.addedItems.find (item => action.id === item.id);
      if (existed_item) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.productPrice,
        };
      } else {
        addedItem.quantity = 1;
        let newTotal = state.total + addedItem.productPrice;

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
          count: state.count + 1,
        };
      }
    case actions.INCREMENT_COUNT:
      let incrementItem = state.myArrayOfItems.find (
        item => item.id === action.id
      );
      incrementItem.quantity += 1;
      let newTotal = state.total + incrementItem.productPrice;
      return {
        ...state,
        total: newTotal,
      };
    case actions.DECREMENT_COUNT:
      let decrementItem = state.myArrayOfItems.find (
        item => item.id === action.id
      );

      if (decrementItem.quantity === 1) {
        let new_item = state.addedItems.filter (item => item.id !== action.id);
        let newTotal = state.total - decrementItem.productPrice;
        let newCount = state.count - 1;

        return {
          ...state,
          addedItems: new_item,
          total: newTotal,
          count: newCount,
        };
      } else {
        decrementItem.quantity -= 1;
        let newTotal = state.total - decrementItem.productPrice;

        return {
          ...state,
          total: newTotal,
        };
      }
    case actions.DELETE_ITEM:
      let itemDeleted = state.myArrayOfItems.find (
        item => item.id === action.id
      );
      let newList = state.addedItems.filter (item => item.id !== action.id);
      let newTotalOfItem =
        state.total - itemDeleted.productPrice * itemDeleted.quantity;
      let newCount = state.count - 1;
      return {
        ...state,
        total: newTotalOfItem,
        addedItems: newList,
        count: newCount,
      };
    case actions.CHECK_OUT:
      return {
        ...state,
        addedItems: [],
        total: 0,
        count: 0,
      };
    default:
      return state;
  }
}
