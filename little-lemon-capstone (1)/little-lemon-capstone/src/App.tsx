import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { Reviews } from "./components/Reviews/Reviews";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Reservations } from "./components/Reservations/Reservations";
import { Navbar } from "./components/Navbar/Navbar";
import { Confirmation } from "./components/Confirmation/Confirmation";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Header />
            <main>
              <Menu />
              <Reviews />
              <About />
            </main>
            <Footer />
          </>
        }
      />
      <Route
        path="/Little-lemon"
        element={
          <>
            <Navbar />
            <Header />
            <main>
              <Menu />
              <Reviews />
              <About />
            </main>
            <Footer />
          </>
        }
      />
      <Route
        path="/Reservations"
        element={
          <>
            <Navbar />
            <Reservations />
            <Footer />
          </>
        }
      />
      <Route
        path="ConfirmedBooking"
        element={
          <>
            <Navbar />
            <Confirmation />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default App;
