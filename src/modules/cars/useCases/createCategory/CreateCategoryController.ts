
import { Response, Request } from "express";

import { CreateCategoryUseCase } from "./ CreateCategoryUseCase";



class CreateCategoryController{

    constructor (private createCategoryUseCase: CreateCategoryUseCase){}

  async handle(request: Request, response: Response): Promise<Response>{
    const {nome, descricao} = request.body; 

      await  this.createCategoryUseCase.execute({nome,descricao});

        return response.status(201).send(); 
  }
}

export{CreateCategoryController} 