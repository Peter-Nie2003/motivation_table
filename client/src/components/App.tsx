// |---------------------------------------------------------------------|
// |the skeleton code Copyright (c) MIT 6.9620 Web Lab: A Programming Class and Competition|
// |---------------------------------------------------------------------|
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { CredentialResponse } from "@react-oauth/google";
import { Routes, Route } from "react-router-dom";

import { get, post } from "../utilities";
import NotFound from "./pages/NotFound";
import Skeleton from "./pages/Skeleton";
import { socket } from "../client-socket";
import User from "../../../shared/User";
import "../utilities.css";

const App = () => {
  const [userId, setUserId] = useState<string | undefined>(undefined);


  return (
    <div> this is a new app</div>
  );
};

export default App;
