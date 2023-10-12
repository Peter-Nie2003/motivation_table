// |---------------------------------------------------------------------|
// |the skeleton code Copyright (c) MIT 6.9620 Web Lab: A Programming Class and Competition|
// |---------------------------------------------------------------------|
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { CredentialResponse } from "@react-oauth/google";

import { get, post } from "../utilities";
import Skeleton from "./pages/Skeleton";
import { socket } from "../client-socket";
import User from "../../../shared/User";
import NavBar from "./modules/NavBar";
import "../utilities.css";
import Schedule from "./modules/Schedule";

const App = () => {

  return (
    <div>
      <NavBar/>
      <Schedule/>
    </div>
  );
};

export default App;
