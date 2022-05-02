import { Request, Response } from "express";
import * as StateService from '../services/StateService'
import * as CategoriesService from '../services/CategoriesService'
import * as UserService from '../services/UserService'
import * as AdsService from '../services/AdsService'
import { User, UserInstance } from '../models/User';
import { validationResult, matchedData } from 'express-validator';
import bcrypt from 'bcrypt';

export const getStates = async (req: Request, res: Response) => {
    const states = await StateService.getStatesList();
    res.json({ states: states });
};

export const info = async (req: Request, res: Response) => {
    const token = req.query.token;
    const user = await UserService.findByToken(token as string);
    const state = await StateService.findStateById(user?.state);
    const ads = await AdsService.getAdsByIdUser(user?.id);

    let adList = Array();

    for (let i in ads) {

        const cat = await CategoriesService.findCategoryById(ads[i].category);

        // adList.push({
        //     id: ads[i].id,
        //     status: ads[i].status,
        //     images: ads[i].images,
        //     dateCreated: ads[i].dataCreated,
        //     title: ads[i].title,
        //     price: ads[i].price,
        //     priceNegotiable: ads[i].priceNegotiable,
        //     description: ads[i].description,
        //     views: ads[i].views,
        //     category: cat?.slug
        // });
        adList.push({ ...ads[i], category: cat?.slug });
    }

    res.json({
        name: user?.name,
        email: user?.email,
        state: state?.name,
        ads: adList
    });
};

export const editAction = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({ error: errors.mapped() });
        return;
    };
    const data = matchedData(req);

    if (data.name){
        await UserService.FindByTokenAndUpdateName(data.token, data.name);
    }

    if(data.email){
        const checkEmail = await UserService.findByEmail(data.email);
        if(checkEmail){
            res.json({ error: "E-mail ja existe"});
            return;
        }
        await UserService.FindByTokenAndUpdateEmail(data.token, data.email);
    }
    
    if(data.state){
        const checkState = await StateService.findStateById(data.state);
        if(!checkState){
            res.json({ error: "Estado não existe" });
            return;
        }
        await UserService.FindByTokenAndUpdateState(data.token, data.state)
    }

    if(data.password){
        const passwordHash = bcrypt.hashSync(data.password, 10)
        await UserService.FindByTokenAndUpdatePassword(data.token, passwordHash);
    }

    res.json({});
};
