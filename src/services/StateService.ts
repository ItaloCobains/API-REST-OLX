import { State } from '../models/State';

export const getStatesList = async () => {
    const states = await State.findAll();
    return states;
};