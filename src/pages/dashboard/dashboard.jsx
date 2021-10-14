import React from "react";
import Welcome from "../../components/Welcome/Welcome";
import Account from "../../components/Account/Account";

const Dashboard = () => {
  return (
    <main class="main bg-dark">
      <Welcome />
      <Account />
    </main>
  );
};

export default Dashboard;
