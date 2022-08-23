import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";


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
            throw new AppError ("Specification AlreadyExists")
        }
        await this.specificatiosRepository.create({
            nome,
            descricao, 
        })
    }
}

export {CreateSpecificationUseCase
 };