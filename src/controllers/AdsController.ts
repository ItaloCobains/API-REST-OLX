import { Request, Response } from "express";
import * as UserService from '../services/UserService';
import * as CategoriesService from '../services/CategoriesService';
import * as AdsService from '../services/AdsService';
import { Ads } from '../models/Ads';
import { uuid } from 'uuidv4';
import sharp from "sharp";
import Jimp from "jimp";
import { UUIDV4 } from "sequelize/types";
import 'dotenv/config'


// const AddImage = (img: string | number | undefined | any) => {
//     const newName = `${uuid()}.jpg`;
//     const imgBuffer: Buffer = img;
//     Jimp.read(imgBuffer, (image: any) => {
//         image.cover(500, 500).quality(80).write(`../public/media/${newName}`);
//     })
//     return newName;
// }


export const getCategories = async (req: Request, res: Response) => {
    const cats = await CategoriesService.findAll();
    let categories = Array();

    for (let i in cats) {
        categories.push({
            ...cats[i]._model,
            img: `${process.env.BASE}/assets/images/${cats[i].slug}.png`
        })
    }

    res.json({ categories })
};

export const addAction = async (req: Request, res: Response) => {
    let { title, price, priceneg, desc, cat, token } = req.body;
    const user = await UserService.findByToken(token);

    if (!title || !cat) {
        res.json({ error: "Titulo e categorias não foram preenchidos!" });
    }

    if (price) {
        price = parseFloat(price.replace('.', '').replace(',', '.').replace("R$ ", ''));

    } else {
        price = 0;
    }

    const stringUser = user?.id.toString()
    const newAd = new Ads();
    newAd.status = true;
    newAd.idUser = stringUser as string;
    newAd.state = user?.state as string;
    newAd.dataCreated = new Date();
    newAd.title = title;
    newAd.category = cat;
    newAd.price = price;
    newAd.priceNegotiable = (priceneg == 'true') ? true : false;
    newAd.description = desc;
    newAd.views = 0;

    // if (req.files && req.files.img) {
    //     if (req.files.img) {
    //         let url = AddImage(req.files.imgBuffer);
    //         newAd.images.push({
    //             url,
    //             default: true
    //         });
    //     } else {
    //         if (req.files.imgs) {
    //             let url = AddImage(req.files.imgBuffer);
    //             newAd.images.push({
    //                 url,
    //                 default: true
    //             });
    //         }
    //     }
    // }
    const info = await newAd.save();
    res.json({ id: info.id })
};


export const getList = async (req: Request, res: Response) => {
    let { sort = 'asc', offset = 0, limit = 8, q, cat, state } = req.query;
    const adsData = await AdsService.FindForStatus(true);
    let ads= [];
    
    ads.push({
        id:adsData?.id,
        title: adsData?.title,
        price: adsData?.price,
        priceNegotiable: adsData?.priceNegotiable,
    })
    
    res.json({
        ads
    })
};

export const getItem = async (req: Request, res: Response) => {
    
};

export const editAction = async (req: Request, res: Response) => {

};