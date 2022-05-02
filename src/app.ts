import express from "express";
import cors from "cors";
import path from "path";
import fileupload from "express-fileupload";

import "dotenv/config";

import ApiRoutes from "./router/routes";

export const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(fileupload());
server.use(express.static(path.join(__dirname, "/public"))); // static archives

server.use(ApiRoutes);
