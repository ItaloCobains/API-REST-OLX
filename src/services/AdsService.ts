import { Ads } from '../models/Ads'

export const getAdsByIdUser = async (id:number|undefined) => {
    const ads = await Ads.findAll({
        where:{
            idUser: id
        }
    })
    return ads;
}


export const FindForStatus = async (status: boolean) => {
    const AdsData = await Ads.findOne({ where:{ status:status } });
    return AdsData;
}   