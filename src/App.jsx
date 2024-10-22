/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "../../portfolio-template/src/Components/About";
import Footer from "../../portfolio-template/src/Components/Footer";
import Header from "../../portfolio-template/src/Components/Header";
import Home from "../../portfolio-template/src/Components/Home";
import Portfolio from "../../portfolio-template/src/Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Soham Bhalerao",
  title: "Frontend Developer",
  email: "bhaleraosoham07@gmail.com",
  gitHub: "Sohambhalerao07",
  instagram: "sohm_nb",
  linkedIn: "Soham Bhalerao",
  
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
