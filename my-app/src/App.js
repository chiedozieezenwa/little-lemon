import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css";
import BookingForm from "./BookingForm";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/header" component={Header} />
          <Route path="/menu" component={Main} />
        </Routes>
      </Router>
      <Header />
      <Main />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
