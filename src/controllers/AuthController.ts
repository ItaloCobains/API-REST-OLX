import { Request, Response } from "express";
import { validationResult, matchedData } from 'express-validator';
import * as UserService from '../services/UserService';
import * as StateService from '../services/StateService';
import bcrypt from 'bcrypt';

export const signin = async (req: Request, res: Response) => {

};

export const signup = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ error: errors.mapped() });
        return;
    };
    const data = matchedData(req);
    // verificando se email ja existe
    const user = await UserService.findByEmail(data.email);
    if (user) {
        res.json({
            error: {
                email: {
                    msg: 'E-mail ja existe!'
                }
            }
        })
        return;
    };
    // verificando se o estado existe
    const stateItem = await StateService.findStateById(data.state);
    if (!stateItem) {
        res.json({
            error: {
                state: {
                    msg: 'Estado não existe!'
                }
            }
        })
        return;
    }

    const passwordHash = await bcrypt.hashSync(data.password, 10);
    // token
    const payload = (Date.now() + Math.random()).toString();
    const token = await bcrypt.hashSync(payload, 10);

    // criando novo user

    const newUser = await UserService.CreateNewUser(
        data.name,
        data.email,
        passwordHash,
        token,
        data.state
    )
    if (newUser) {
        res.json({ token });
    } else {
        res.json({ error: "user ja existe" });
    };
};

