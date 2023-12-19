import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
