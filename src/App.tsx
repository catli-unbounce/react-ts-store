import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route } from "react-router-dom";

import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { UserContext } from "./UserContext";
function App() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("Hello");
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <UserContext.Provider value={null}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/store" element={<Store />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </UserContext.Provider>
      </Container>
    </>
  );
}

export default App;
