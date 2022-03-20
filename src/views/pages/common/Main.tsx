import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("../home/Home"));

export default function Main() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Suspense fallback={<>Loading...</>}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
