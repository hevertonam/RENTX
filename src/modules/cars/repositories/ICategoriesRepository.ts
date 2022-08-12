import {Category} from "../entities/Category";



interface ICreateCategoryDTO {
    nome:string;
    descricao:string;
}

interface ICategoriesRepository{
    findByName(nome:string): Promise<Category>;
    list():Promise<Category>;
    create({nome, descricao}:ICreateCategoryDTO):Promise<void>;
}

export{ICategoriesRepository,ICreateCategoryDTO};