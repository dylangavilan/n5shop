import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: []
  },
  reducers: {
    setProducts: (state, action) => {
        state.items = action.payload
    },
    updateQuantitys: (state, action) => {
      const buys = action.payload;
      const itemsUpdated = state.items.map((el) => {
        let isBuyed = buys.find((item) => item.id === el.id);
        if(!isBuyed) {
          return el;
        } else {
          const newAmount = el.amount - isBuyed.quantity;
          return {...el, amount: newAmount >= 1 ? el.amount - isBuyed.quantity : 0}
        }
      })
      state.items = itemsUpdated;
    },

    addProduct: (state, action) => {
      if(!action.payload.price || !action.payload.amount || !action.payload.name) return;

      const isIncluded = state.items.find((el)=>  el.name === action.payload.name);

      if(isIncluded) return;
      
      state.items = [...state.items, {...action.payload, id: state.items.length}];
    }
  },
})

export const { setProducts, updateQuantitys, addProduct } = productsSlice.actions

export default productsSlice.reducer