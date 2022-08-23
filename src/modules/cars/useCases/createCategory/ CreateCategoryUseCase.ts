import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { AppError } from "@shared/errors/AppError";
import {inject, injectable} from "tsyringe";


interface IRequest {
    nome: string;
    descricao: string;
}

@injectable()
class  CreateCategoryUseCase {

    constructor (
        @inject("CategoriesRepository")
        private categoriesRepository : ICategoriesRepository){
    }

    async execute({nome, descricao}:IRequest):Promise<void>{
        
        const categoriesAlreadyExists = await this.categoriesRepository.findByName(nome);

        if(categoriesAlreadyExists){
        throw new AppError("Category Already Exists!");    
        }
     
        this.categoriesRepository.create({nome, descricao});
    }
}



export { CreateCategoryUseCase}