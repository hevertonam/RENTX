 import { CreateSpecificationController } from '@modules/cars/useCases/createEspecification/CreateSpecificationController';
import { Router } from 'express';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { enruseAdmin } from '@shared/infra/http/middlewares/enruseAdmin';


 const specificationsRoutes = Router();

 const createSpecificationController = new CreateSpecificationController();

 
 specificationsRoutes.post(
    "/specification",  ensureAuthenticated, enruseAdmin, createSpecificationController.handle);

 export{specificationsRoutes};
