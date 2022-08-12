import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryUseCase } from "./ CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

export default(): CreateCategoryController => {


    const categoriesRepository = null;

    const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
    
    const createCategoryController = new CreateCategoryController(createCategoryUseCase);
    
    return createCategoryController;
};


