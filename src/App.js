import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Browse from "./component/Browse";
import Arrived from "./component/Arrived";
import Clients from "./component/Clients";
import AsideMenu from "./component/AsideMenu";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
