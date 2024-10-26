import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Camera from "./components/camera/Camera";
import Home from "./components/home/Home";
import Labely from "./components/labely/Labely";
import Log from "./components/log/Log";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/labely" element={<Labely />} />
        <Route path="/log" element={<Log />} />
        <Route path="/camera" element={<Camera />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
