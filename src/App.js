import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {

  return (
    <div className="container">
      <Navbar />
      <Home />
    </div>
  )
}

export default App;
