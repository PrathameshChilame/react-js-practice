import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items:localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
}

const addToCart = createSlice({
  name:'cart',
  initialState,
  reducers:{
    addItem: (state, action)=>{
      //state.value += 1
      console.log(action.payload);
      state.items.push(action.payload)
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    removeItem: (state, action)=>{
      const cardData = state.items.filter(item=>item.id != action.payload.id)
      state.items = cardData;
      localStorage.setItem('cart', JSON.stringify(cardData))
    },
    clearAllItems: (state)=>{
      state.value = []
    }
  }
})

export const {addItem, removeItem, clearAllItems} = addToCart.actions;
export default addToCart.reducer