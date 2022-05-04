import { Ads } from '../models/Ads'

export const getAdsByIdUser = async (id: number | undefined) => {
    const ads = await Ads.findAll({
        where: {
            idUser: id
        }
    })
    return ads;
}

export const getAdsById = async (id: number | string) => {
    const ad = await Ads.findByPk(id)
    return ad;
}


export const FindForStatus = async (status: boolean) => {
    const AdsData = await Ads.findOne({ where: { status: status } });
    return AdsData;
}

export const FindByTokenAndUpdateTitle = async (token: string, title: string) => {
    const user = await Ads.findOne({ where: { token } });
    await user?.update({
        title: title
    }, {
        where: { token: token }
    })
}

export const FindByTokenAndUpdatePrice = async (token: string, price: string | number) => {
    const user = await Ads.findOne({ where: { token } });
    await user?.update({
        price: price
    }, {
        where: { token: token }
    })
}

export const FindByTokenAndUpdatePriceNego = async (token: string, Pneg: string | number) => {
    const user = await Ads.findOne({ where: { token } });
    await user?.update({
        priceNegotiable: Pneg
    }, {
        where: { token: token }
    })
}

export const FindByTokenAndUpdateStatus = async (token: string, status: string | number) => {
    const user = await Ads.findOne({ where: { token } });
    await user?.update({
        status
    }, {
        where: { token: token }
    })
}

export const FindByTokenAndUpdateDesc = async (token: string, desc: string | number) => {
    const user = await Ads.findOne({ where: { token } });
    await user?.update({
        description: desc
    }, {
        where: { token: token }
    })
}