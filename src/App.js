import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import supabase from "./supabase";
import { useDispatch } from "react-redux";
import { setUser } from "./slices/userSlice";

const App = () => {
  const dispatch = useDispatch();

  const getUser = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error("Error getting session:", error);
      return;
    }
    
    if (data && data.session && data.session.user) {
      dispatch(setUser(data.session.user));
    } else {
      console.warn("No user in session.");
      dispatch(setUser(null));
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
