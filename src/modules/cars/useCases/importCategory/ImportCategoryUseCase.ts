import fs from "fs";
import {parse} from "csv-parse";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { Category } from "../../entities/Category";

interface IImportCategory{
    nome: string;
    descricao: string;
}

class ImportCategoryUseCase{

    constructor(private categoriesRepository:ICategoriesRepository){}



    loadCategories(file: Express.Multer.File):Promise<IImportCategory[]>{
        return new Promise((resolve, reject) => 
        {
            const stream = fs.createReadStream(file.path); 
            const categories: IImportCategory[]=[];
            const parseFile = parse();

            stream.pipe(parseFile);

            parseFile.on("data",  async(line)=>
            {
                const [nome, descricao] = line;
                categories.push({
                    nome,
                    descricao,
                });
            })

            .on("end", () => 
                {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                }) 

            .on("error", (err) => 
                {
                    reject(err);
                });

        });
    }

    async execute(file: Express.Multer.File):Promise<void>{
        const categories = await this.loadCategories(file);


        categories.map(async category => {
            const {nome,descricao}= category;
            
            const existCategory = this.categoriesRepository.findByName(nome);

            if(!existCategory){
                this.categoriesRepository.create({
                    nome,
                    descricao,
                })
            }
            
        })
    } 

}
 
export{ImportCategoryUseCase};
