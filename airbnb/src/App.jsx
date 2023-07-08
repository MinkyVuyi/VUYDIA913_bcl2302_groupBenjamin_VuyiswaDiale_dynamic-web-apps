import Card from "./components/Card.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import React from "react";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}
