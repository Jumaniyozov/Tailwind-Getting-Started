import React, { useState, useLayoutEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages";
import About from "./pages/about";
import Menu from "./pages/menu";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("resized");
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => window.removeEventListener("resize", hideMenu);
  });

  return (
    <div className="App">
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
