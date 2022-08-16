
import { Response, Request } from "express"; 
import { container} from "tsyringe";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {

    handle(request: Request, response: Response):Response{
    
    const {nome, descricao}=request.body;

    const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase )
    
    createSpecificationUseCase.execute({nome,descricao});

        return response.status(201).send(); 
    }
}


export {CreateSpecificationController};