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

    execute({nome, descricao}:IRequest):void{

        const specificationAlreadyExists = this.specificatiosRepository.findByName(nome);

        if (specificationAlreadyExists){
            throw new Error ("Specification AlreadyExists")
        }

        this.specificatiosRepository.create({
            nome,
            descricao, 
        })

    }
}

export {CreateSpecificationUseCase
 };