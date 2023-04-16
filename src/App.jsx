import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bookmarks from "./pages/Bookmarks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, selectBookmarks } from "./slices/bookmarkSlice";
import axios from "axios";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem("bookmarksId"));

    localStorageItems?.map(async (item) => {
      const res = await axios.get(`https://api.quotable.io/quotes/${item}`);
      const quoteToBookmark = {
        id: res.data._id,
        content: res.data.content,
        author: res.data.author,
      };
      dispatch(add(quoteToBookmark));
    });
  }, []);

  return (
    <div className=" text-center h-screen bg-gradient-to-tr from-purple-900 to-purple-300">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/bookmarks" Component={Bookmarks} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
