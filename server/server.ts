import express, { Request, Response } from "express";
import http from "http";
import mongoose from "mongoose"; // Wrapper around MongoDB
import { MongoClient } from "mongodb"
import morgan from "morgan"; // Request logger (https://github.com/expressjs/morgan). Can be removed if you wish.
import path from "path"; // Allows us to retrieve file paths
import api from "./api";
async function getDataBase(URL) {
  const client = new MongoClient(URL, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
  } catch (error) {
    console.log('Error:', error);
  }
  return client.db("xxxxx");
}
//allow us to use process.ENV
require("dotenv").config();

// Server configuration below
// TODO change connection URL after setting up your team database and creating the .env file
const mongoConnectionURL = process.env.MONGO_SRV;
// TODO change database name to the name you chose
const databaseName = "xxxxx";

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



export const database = getDataBase(mongoConnectionURL);
// Create a new Express server
const app = express();

// Middleware setup.
app.use(express.json());
app.use(morgan("dev")); // To change the format of logs: https://github.com/expressjs/morgan#predefined-formats
app.use("/api", api);

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
