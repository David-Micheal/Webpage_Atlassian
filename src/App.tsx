import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import AllPages from "./Components/AllPages";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <AllPages />
      <Footer />
    </div>
  );
}

export default App;
