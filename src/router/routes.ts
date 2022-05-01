import { Router, Request, Response } from 'express';
import * as AdsController from '../controllers/AdsController';
import * as AuthController from '../controllers/AuthController';
import * as UserController from '../controllers/UserController';
import { privateAuth } from '../middleware/Auth';

const router = Router();

// rota de teste
router.get("/ping", (req: Request, res: Response) => {
    res.json({ pong: true });
});

// pegar os estados
router.get("/states",UserController.getStates);

//login
router.post("/user/signin", AuthController.signin);

//cadrastro
router.post("/user/signup", AuthController.signup);

//informaçoes do proprio usuario
router.get("/user/me", privateAuth,UserController.info);

//editar informaçoes do proprio user
router.put("/user/me", privateAuth, UserController.editAction);

// lista categorias
router.get("/categories", AdsController.getCategories);

// adicionar anuncio novo
router.post("/ad/add", privateAuth, AdsController.addAction);

//lista de anuncios
router.get("/ad/list", AdsController.getList);

//pegar informaçoes de um item expecifico
router.get("/ad/item", AdsController.getItem);

//alterar informaçoes do anuncios
router.post("/ad/:id", privateAuth, AdsController.editAction);

export default router;