import React from "react";
import Careers from "./HomeFolder/Careers";
import Essential from "./HomeFolder/Essential";
import Events from "./HomeFolder/Events";
import Hero from "./HomeFolder/Hero";
import Join from "./HomeFolder/Join";
import Work from "./HomeFolder/Work";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Join />
      <Essential />
      <Work />
      <Events />
      <Careers />
    </div>
  );
};

export default HomePage;
