import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Browse from "./component/Browse";
import Arrived from "./component/Arrived";
import Clients from "./component/Clients";
import AsideMenu from "./component/AsideMenu";
import Footer from "./component/Footer";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(function () {
    (async function() {
      const response = await fetch("https://bwacharity.fly.dev/items", {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });
      const { nodes } = await response.json();
      // const { nodes } = await JSON.parse(response).data;
      setItems(nodes);
    })();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived items={items} />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
