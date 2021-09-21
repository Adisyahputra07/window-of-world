import React from "react";
import icon from "../../assets/Icon.png";
import "./LandingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

//components
import Buttons from "../../components/Button/Buttons";

export default function LandingPage() {
  return (
    <div className="landing-page-container">
      <main>
        <div className="main">
          <img className="logo" src={icon} alt="logo" />
          <div className="submain">
            <p className="text-intro">
              Sign-up now and subscribe to enjoy all the cool and latest books - The best book
              rental service provider in Indonesia
            </p>
            <div className="button-container">
              <Buttons btnName="Sign Up" color="sign-up" />
              <Buttons btnName="Sign In" color="sign-in" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
