import { Ads } from "../models/Ads";

export const getAdsByIdUser = async (id: number | undefined) => {
  const ads = await Ads.findAll({
    where: {
      idUser: id,
    },
  });
  return ads;
};
