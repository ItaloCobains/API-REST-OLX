import { Request, Response } from "express";
import { User } from '../models/User';
import * as CategoriesService from '../services/CategoriesService';

export const getCategories = async (req: Request, res: Response) => {
    const cats = await CategoriesService.findAll();
    let categories = Array();

    for (let i in cats){
        categories.push({
            ...cats[i]._model,
            img: `${process.env.BASE}/assets/images/${cats[i].slug}.png`
        })
    }

    res.json({ categories })
};

export const addAction = async (req: Request, res: Response) => {

};

export const getList = async (req: Request, res: Response) => {

};

export const getItem = async (req: Request, res: Response) => {

};

export const editAction = async (req: Request, res: Response) => {

};