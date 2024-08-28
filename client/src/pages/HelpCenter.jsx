import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HelpCenter = () => {
  return (
    <>
      <header className="fixed top-0 w-full">
        <Header />
      </header>
      <main className="max-h-screen mt-16">
        Main Content
      </main>
      <footer className="bottom-0 w-full">
        <Footer />
      </footer>
    </>
  );
}

export default HelpCenter;