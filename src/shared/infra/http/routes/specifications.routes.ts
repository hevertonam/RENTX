 import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateSpecificationController } from
 '../../../../modules/cars/useCases/createEspecification/CreateSpecificationController';

 const specificationsRoutes = Router();

 const createSpecificationController = new CreateSpecificationController();

 specificationsRoutes.use(ensureAuthenticated);
 
 specificationsRoutes.post(
    "/specification", createSpecificationController.handle);

 export{specificationsRoutes};
