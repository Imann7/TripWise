import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
