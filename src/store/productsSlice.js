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
      if(!action.amount || !action.quantity || !action.name) return;

      const isIncluded = state.items.find((el)=>  el.name === action.payload.name);
      
      if(isIncluded) return;
      
      return [...state.items, {...action.payload, id: state.items.length}]

    }
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { setProducts, updateQuantitys } = productsSlice.actions

export default productsSlice.reducer