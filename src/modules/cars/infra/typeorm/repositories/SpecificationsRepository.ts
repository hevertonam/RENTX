
import { getRepository, Repository } from "typeorm";
import { Specification } from "../entities/Specification";

import { ISpecificationsRepository,ICreateSpecificationDTO } from "modules/cars/repositories/ISpecificationsRepository";



class SpecificationsRepository implements ISpecificationsRepository{
  
    private repository: Repository<Specification>;    

    constructor(){
        this.repository = getRepository(Specification)
    }

    
    async create({ nome, descricao }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            descricao,
            nome
        });
    await this.repository.save(specification);
    };


    async findByName(nome: string):  Promise<Specification> {

        const specification = this.repository.findOne({
            nome,
        });
        return specification;   
    };
  

}

export {SpecificationsRepository}; 