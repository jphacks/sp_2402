import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Camera from "./components/camera/Camera";
import Home from "./components/home/Home";
import Labely from "./components/labely/Labely";
import Log from "./components/log/Log";
import Scenario from "./components/scenario/Scenario";
import Login from "./components/login/Login";
import { Provider } from "./providers/Provider";

const App: React.FC = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/labely" element={<Labely />} />
          <Route path="/log" element={<Log />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/scenario" element={<Scenario />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
