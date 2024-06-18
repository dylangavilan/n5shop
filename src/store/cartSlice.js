import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    isOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      let item = action.payload;
      let isAdded = state.items.find((el) => el.id === item.id);
      if(isAdded) return;
      state.items = [...state.items, {...item, quantity: 1}]
    },
    handleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    addMore: (state, action) => {
      let item = state.items.find((el) => el.id === action.payload);
      if(!item) return;
      state.items = state.items.map(el => 
        el.id === item.id 
          ? { ...el, quantity: el.quantity === el.amount ? el.quantity : el.quantity + 1 } 
          : el
      );  
    },
    lessOne: (state, action) => {
      let item = state.items.find((el) => el.id === action.payload);
      if(!item) return;
      state.items = state.items.map(el => 
        el.id === item.id 
          ? { ...el, quantity: el.quantity === 1 ? el.quantity : el.quantity - 1 } 
          : el
      );  
    },
    removeFromCart: (state, action) => {
      if(state.items.length < 1) return;
      state.items = state.items.filter((el) => el.id !== action.payload)
    },
    clear: (state) => {
      state.items = [];
    }
  },
})

export const { addToCart, handleOpen, addMore, lessOne, removeFromCart, clear } = cartSlice.actions

export default cartSlice.reducer;