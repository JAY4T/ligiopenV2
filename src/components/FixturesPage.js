// Fixtures.js
import React from "react";
import TopSection from "./Homepage"; // assuming TopSection is exported
import FixturesSection from "./Homepage"; // assuming FixturesSection is exported
import NewsSection from "./Homepage"; // same here
import Footer from "../components/Footer";

// Optional: If you want PlayersSection, import and pass props
// import PlayersSection from "./Homepage";
// import playerData from "../data/players"; // if available

const Fixtures = () => {
  return (
    <>
      <TopSection />
      <FixturesSection />
      <NewsSection />
      {/* <PlayersSection players={playerData} /> */}
      <Footer />
    </>
  );
};

export default Fixtures;
