import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest{
    nome: string;
    descricao: string;
}

@injectable ()
class CreateSpecificationUseCase
 {

    constructor(
        @inject("SpecificationsRepository")
        private specificatiosRepository: ISpecificationsRepository){

    }

    async execute({nome, descricao}:IRequest): Promise<void>{

        const specificationAlreadyExists = await this.specificatiosRepository.findByName(nome);

        if (specificationAlreadyExists){
            throw new Error ("Specification AlreadyExists")
        }

        await this.specificatiosRepository.create({
            nome,
            descricao, 
        })

    }
}

export {CreateSpecificationUseCase
 };