import { State } from '../models/State';
import { UserInstance } from '../models/User'

export const getStatesList = async () => {
    const states = await State.findAll();
    return states;
};

export const findStateById = async (id: string|number|undefined) => {
    const state = await State.findByPk(id);
    return state;
}