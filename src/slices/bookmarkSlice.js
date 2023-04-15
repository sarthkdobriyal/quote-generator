import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    add: (state, action) => {
        
      state.items.push(action.payload)
    },
    remove: (state, action) => {
      //Finding the idx where id matches the item
      const idx = state.items.findIndex((basItem) => basItem.id === action.payload.id)
      
      //creating a new basket
      let newBasket = [...state.items]

      if(idx >= 0){
        //if item found cutting the newBasket by 1 from that idx
        newBasket.splice(idx,1)
      }else{
        console.warn(`Cannot remove product(id: ${action.payload.id} ) as its not in the basket`)
      }

      state.items = newBasket;

    },
  },
});

export const { add, remove } = bookmarkSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectBookmarks = (state) => state.bookmarks.items;


export default bookmarkSlice.reducer;