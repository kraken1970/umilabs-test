import React from "react";
import Header from "./components/Header";
import WhoAreWe from "./components/WhoAreWe";
import Article from "./components/Article";
import OurAdvantages from "./components/OurAdvantages";
import Footer from "./components/Footer";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <WhoAreWe />
      <Article />
      <OurAdvantages />
      <Footer />
    </div>
  );
};

export default App;
