import React from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Main from "./common/Main";

export default function TheLayout() {
  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
