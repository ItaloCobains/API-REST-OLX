import { Category } from "../models/Categories";

export const findCategoryById = async (id: string) => {
  const category = await Category.findOne({
    where: {
      id,
    },
  });
  return category;
};
