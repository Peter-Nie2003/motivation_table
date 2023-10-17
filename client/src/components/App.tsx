// |---------------------------------------------------------------------|
// |the skeleton code Copyright (c) MIT 6.9620 Web Lab: A Programming Class and Competition|
// |---------------------------------------------------------------------|
import React, { useState, useEffect } from "react";


import User from "../../../shared/User";
import NavBar from "./modules/NavBar";
import ListBlock from "./modules/ListBlock"
import "../utilities.css";
import Schedule from "./modules/Schedule";

const App = () => {

  return (
    <div>
      <NavBar />
      <ListBlock id={1}/>
      <ListBlock id={2}/>
      <ListBlock id={3}/>
      <ListBlock id={4}/>
    </div>
  );
};

export default App;
