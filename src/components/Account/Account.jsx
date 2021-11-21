import React from "react";

export default function Account() {
  return (
    <section className="account">
      <div className="account-content-box">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking</h3>
          <p className="account-amount">$2,082</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </div>
      <div className="account-content-box">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Saving</h3>
          <p className="account-amount">$10,928</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </div>
      <div className="account-content-box">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card</h3>
          <p className="account-amount">$183</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </div>
    </section>
  );
}
