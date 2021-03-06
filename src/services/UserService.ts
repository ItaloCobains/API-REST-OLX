import { User } from '../models/User';
import { UserInstance } from '../models/User'

export const findByToken = async (token: string | number) => {
    const user = await User.findOne({
        where: {
            token
        }
    });
    return user;
}

export const findByEmail = async (email: string) => {
    const user = await User.findOne({
        where: {
            email
        }
    });
    return user;
}

export const CreateNewUser = async (name: string, email: string, passwordHash: string, token: string | number, state: string | number) => {
    const hasUser = await User.findOne({
        where: {
            email
        }
    });
    if (!hasUser) {
        const newUser = await User.create({
            name,
            email,
            state,
            passwordHash,
            token
        })
        newUser.save();
        return newUser;
    } else {
        return new Error("User ja existe!");
    }
}

export const FindByTokenAndUpdateName = async (token: string, name: string) => {
    const user = await User.findOne({ where: { token } });
    await user?.update({
        name: name
    }, {
        where: { token: token }
    })

}

export const FindByTokenAndUpdateEmail = async (token: string,
    email: string) => {
    const user = await User.findOne({ where: { token } });
    await user?.update({
        email: email
    }, {
        where: { token: token }
    })
}

export const FindByTokenAndUpdateState = async (token: string, state: string) => {
    const user = await User.findOne({ where: { token } });
    await user?.update({
        state: state
    }, {
        where: {
            token: token
        }
    })
}

export const FindByTokenAndUpdatePassword = async (token: string, passwordHash: string) => {
    const user = await User.findOne({ where: { token } });
    await user?.update({
        passwordHash: passwordHash
    }, {
        where: { token }
    });
}