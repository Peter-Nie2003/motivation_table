// |---------------------------------------------------------------------|
// |the skeleton code Copyright (c) MIT 6.9620 Web Lab: A Programming Class and Competition|
// |---------------------------------------------------------------------|
import express, { Request, Response } from "express";
import http from "http";
import session from "express-session"; // Allows us to store information about a client
import path from "path"; // Allows us to retrieve file paths
import api from "./api";
import mongoose from "mongoose";

//allow us to use process.ENV
require("dotenv").config();

// Create a new Express server
const app = express();

// Middleware setup.
app.use(express.json());
app.use("/api", api);
const mongoConnectionURL =process.env.MONGO_SRV;
const databaseName = "motivation-table"
if (mongoConnectionURL === undefined) {
  throw new Error("Please add the MongoDB connection SRV as 'MONGO_SRV'");
}
mongoose
  .connect(mongoConnectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: databaseName,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`Error connecting to MongoDB: ${err}`));
// Serves the frontend code
const reactPath = path.resolve(__dirname, "..", "client", "dist");
app.use(express.static(reactPath));

// Fallbacks

// for all other routes, render index.html and let react router handle it
app.get("*", (req, res) => {
  res.sendFile(path.join(reactPath, "index.html"));
});
 
// Optional TODO (on your own) - Add an error interface.
app.use((err: any, _req: Request, res: Response) => {
  const status = err.status || 500;
  if (status === 500) {
    // 500 means Internal Server Error
    console.log("The server errored when processing a request!");
    console.log(err);
  }
  res.status(500);
  res.send({
    message: err.message,
    status,
  });
});

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
