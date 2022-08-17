import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";


const router = Router();

router.use("/modelo",categoriesRoutes); 

router.use("/modelo",specificationsRoutes); 

router.use("/users",usersRoutes); 

export{router};