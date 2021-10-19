import React from "react";
import Hero from "../../components/Hero/Hero";
import FeatureItem from "../../components/FeatureItem/FeatureItem";
import iconChat from "../../assets/img/icon-chat.png";
import iconMoney from "../../assets/img/icon-money.png";
import iconSecurity from "../../assets/img/icon-security.png";

const Home = () => {
  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureItem image={iconChat} />
        <FeatureItem image={iconMoney} />
        <FeatureItem image={iconSecurity} />
      </section>
    </main>
  );
};

export default Home;
