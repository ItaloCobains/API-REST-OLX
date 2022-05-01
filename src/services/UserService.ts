import { User } from '../models/User';

export const findByToken = async (token: string | number) => {
    const user = await User.findOne({
        where:{
            token 
        }
    });
    return user;
}