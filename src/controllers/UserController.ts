import { Request, Response } from "express";
import * as StateService from '../services/StateService'

export const getStates = async (req: Request, res: Response) => {
    const states = await StateService.getStatesList();
    res.json({ states: states });
};

export const info = async (req: Request, res: Response) => {

};

export const editAction = async (req: Request, res: Response) => {

};
