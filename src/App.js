import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Browse from "./component/Browse";
import Arrived from "./component/Arrived";
import Clients from "./component/Clients";
import AsideMenu from "./component/AsideMenu";
import Footer from "./component/Footer";
import Offline from "./component/Offline";
import Splash from "./pages/Splash";

function App() {
  const [items, setItems] = React.useState([]);
  const [offlineStatus, setOfflineStatus] = React.useState(!navigator.onLine);

  const handleOfflineStatus = () => setOfflineStatus(!navigator.onLine);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(
    function () {
      (async function () {
        const response = await fetch("https://bwacharity.fly.dev/items", {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            // "x-api-key": process.env.REACT_APP_APIKEY,
          },
        });
        const { nodes } = await response.json();
        setItems(nodes);

        if (!document.querySelector('script[src="/carousel.js"]')) {
          const script = document.createElement("script");
          script.src = "/carousel.js";
          script.async = false;
          document.body.appendChild(script);
        }
      })();

      handleOfflineStatus();
      window.addEventListener("online", handleOfflineStatus);
      window.addEventListener("offline", handleOfflineStatus);

      setTimeout(() => {
        setIsLoading(false);
      }, 1500);

      return function () {
        window.removeEventListener("online", handleOfflineStatus);
        window.removeEventListener("offline", handleOfflineStatus);
      };
    },
    [offlineStatus]
  );

  return (
    <>
      {isLoading === true ? (
        <Splash />
      ) : (
        <>
          {offlineStatus && <Offline />}
          <Header />
          <Hero />
          <Browse />
          <Arrived items={items} />
          <Clients />
          <AsideMenu />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
