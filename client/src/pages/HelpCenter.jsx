import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainComponent from "../components/MainComponent";

const HelpCenter = () => {
  return (
    <>
      <header className="fixed top-0 w-full z-50">
        <Header />
      </header>
      <main className="max-h-screen mt-16">
        <MainComponent />
      </main>
      <footer className="bottom-0 w-full">
        <Footer />
      </footer>
    </>
  );
}

export default HelpCenter;