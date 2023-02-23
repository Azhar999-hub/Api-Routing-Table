import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DrawerAppBar from "../components/navbar";
import Album from "../screens/album";
import Comments from "../screens/comments";
import Photos from "../screens/photos";
import Posts from "../screens/posts";
import Todos from "../screens/todos";

const Approuter = () => {
  return (
    <>
      <BrowserRouter>
        <DrawerAppBar />
        <Routes>
          <Route path="/" element={<Todos/>}/>
          <Route path="todos" element={<Todos/>}/>
          <Route path="posts"  element={<Posts/>}/>
          <Route path="comments"  element={<Comments/>}/>
          <Route path="album"  element={<Album/>}/>
          <Route path="photos"  element={<Photos/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Approuter;
