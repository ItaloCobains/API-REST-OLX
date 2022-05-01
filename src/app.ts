import 'dotenv/config';
import express, { ErrorRequestHandler, Request, Response } from 'express';
import cors from 'cors';
import fileupload from 'express-fileupload';
import path from 'path';
import ApiRoutes from './router/routes';


const server = express(); // instaciando o servidor

server.use(cors()); // Habilita requisiçoes de qualquer lugar
server.use(express.json()); //processar json
server.use(express.urlencoded({ extended: true }));
server.use(fileupload()); // Necessario para user o file upload
server.use(express.static(path.join(__dirname, "/public")));// arquivos estaticos

// router
server.use(ApiRoutes);

export default server;