// |---------------------------------------------------------------------|
// |the skeleton code Copyright (c) MIT 6.9620 Web Lab: A Programming Class and Competition|
// |---------------------------------------------------------------------|
import React, { useState, useEffect } from "react";


import User from "../../../shared/User";
import NavBar from "./modules/NavBar";
import "../utilities.css";
import Schedule from "./modules/Schedule";

const App = () => {

  return (
    <div>
      <NavBar />
      <Schedule />
    </div>
  );
};

export default App;
