import {  Router } from "express";
import { CreateCarController } from "@modules/cars/useCases/CreateCar/CreateCarController";

import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { enruseAdmin } from '@shared/infra/http/middlewares/enruseAdmin';



const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.post(
    "/", 
    ensureAuthenticated, 
    enruseAdmin, 
    createCarController.handle
    );

export {carsRoutes};


