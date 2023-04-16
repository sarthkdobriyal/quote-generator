import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    add: (state, action) => {
      if (action.payload.id) {
        let isAdded = false;
        state.items.forEach((quote) => {
          if (quote.id === action.payload.id) {
            isAdded = true;
            return;
          }
        });
        if (!isAdded) {
          state.items.push(action.payload);
        }

        let localArr = JSON.parse(localStorage.getItem("bookmarksId"));
        if (localArr === null) {
          localArr = [action.payload.id];
          localStorage.setItem("bookmarksId", JSON.stringify(localArr));
        } else {
          let isPresent = false;
          localArr.forEach((item) => {
            if (item === action.payload.id) {
              isPresent = true;
            }
          });
          if (!isPresent) {
            const newArr = [...localArr, action.payload.id];
            localStorage.setItem("bookmarksId", JSON.stringify(newArr));
          }
        }
      }
    },
    remove: (state, action) => {
      //Finding the idx where id matches the item
      const idx = state.items.findIndex(
        (basItem) => basItem.id === action.payload.id
      );
      const localArr = JSON.parse(localStorage.getItem("bookmarksId"));

      //creating a new basket
      let newBasket = [...state.items];
      let newArr = localArr.filter((item) => item !== action.payload.id);
      localStorage.setItem("bookmarksId", JSON.stringify(newArr));

      if (idx >= 0) {
        //if item found cutting the newBasket by 1 from that idx
        newBasket.splice(idx, 1);
      } else {
        console.warn(
          `Cannot remove product(id: ${action.payload.id} ) as its not in the basket`
        );
      }

      state.items = newBasket;
    },
  },
});

export const { add, remove } = bookmarkSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectBookmarks = (state) => state.bookmarks.items;

export default bookmarkSlice.reducer;
