import React from "react";
import Hero from "../../components/Hero/Hero";
import FeatureItem from "../../components/FeatureItem/FeatureItem";

const Home = () => {
  return (
    <main>
      <Hero />
      <section class="features">
        <h2 class="sr-only">Features</h2>
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
      </section>
    </main>
  );
};

export default Home;
