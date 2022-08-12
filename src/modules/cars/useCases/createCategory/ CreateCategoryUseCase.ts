import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    nome: string;
    descricao: string;
}

class  CreateCategoryUseCase {

    constructor (private categoriesRepository : ICategoriesRepository){
    }

    async execute({nome, descricao}:IRequest):Promise<void>{
        
        const categoriesAlreadyExists = await this.categoriesRepository.findByName(nome);

        if(categoriesAlreadyExists){

        throw new Error("Category Already Exists!");    

        }
     
        this.categoriesRepository.create({nome, descricao});
    }
}



export { CreateCategoryUseCase}