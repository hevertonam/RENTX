import { CreateCategoryController } from '@modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '@modules/cars/useCases/importCategory/ImportCategoryController';
import { ListCategoriesController } from '@modules/cars/useCases/listCategories/ListCategoriesController';
import {Router} from 'express';
import multer from 'multer';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { enruseAdmin } from '@shared/infra/http/middlewares/enruseAdmin';



const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

const importCategoryController = new ImportCategoryController();

const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/", ensureAuthenticated, enruseAdmin, createCategoryController.handle);

  
categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
  "/import", 
  upload.single("file"), 
  ensureAuthenticated, enruseAdmin,
importCategoryController.handle);

export {categoriesRoutes};