import dotenv from "dotenv";
import express from "express";
import connectedDB from "./db/index.js";

dotenv.config();
const app = express();

connectedDB();
