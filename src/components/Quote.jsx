import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, selectBookmarks } from "../slices/bookmarkSlice";

const Quote = ({ id, content, author }) => {
  const dispatch = useDispatch();
  const bookmarks = useSelector(selectBookmarks);

  const bookmarkQuote = () => {
    const quoteToBookmark = {
      id: id,
      content: content,
      author: author,
    };
    let isAdded = false;
    bookmarks.forEach((bookmark) => {
      if (bookmark.id === id) {
        isAdded = true;
        return;
      }
      
    });
    if(isAdded) {
      alert("Already Bookmarked");
      return;
    }
    dispatch(add(quoteToBookmark));
    alert("Item bookmarked");
  };

  return (
    <div className="relative w-[60%] mx-auto my-10 p-10 md:p-16 bg-[#d05252] rounded-2xl text-center text-white flex flex-col space-y-10">
      <div className="text-sm md:text-xl font-medium">{content}</div>
      <div className="text-sm md:text-lg font-bold">- {author}</div>

      <button
        className="bookmarkIcon absolute text-sm bottom-5 right-3 md:bottom-8 md:right-10 hover:text-opacity-20 cursor-pointer outline-none"
        onClick={bookmarkQuote}
      >
        <img src="/bookmark.png" className="h-7 w-7 outline-none" alt="" />
      </button>
    </div>
  );
};

export default Quote;
