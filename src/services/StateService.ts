import { State } from '../models/State';

export const getStatesList = async () => {
    const states = await State.findAll();
    return states;
};

export const findStateById = async (id: string|number) => {
    const state = await State.findByPk(id);
    return state;
}