import React from "react";
import "./App.css";
import Header from "./components/NavBar/Header";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";

export default class App extends React.Component {
  render() {
    return (
      <div className="app__container">
        <Header />
          <Container />
        <Footer />
      </div>
    );
  }
}
