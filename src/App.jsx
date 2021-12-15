import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import NotFound from "./NotFound";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
