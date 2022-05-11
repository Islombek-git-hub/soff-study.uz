import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
// import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
          </Route> */}
          {/* <Route path="/" element={<SignIn />} /> */}
          <Route path="/" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
