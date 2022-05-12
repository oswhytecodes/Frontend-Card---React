import React from "react";
import About from "./components/About";
import Info from "./components/Info";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
};

export default App;
