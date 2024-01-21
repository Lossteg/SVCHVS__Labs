import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Background from "../components/shared/Background";
import CardList from "../components/service/CardList";

export default function Main() {
  return (
    <div className="wrapper">
      <Background />
      <Header />
      <CardList />
      <Footer />
    </div>
  );
}
