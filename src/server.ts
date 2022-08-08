import express, { request, response } from 'express';
import { categoriesRoutes } from './routes/categories.routes';
import { specificationsRoutes } from './routes/specifications.routes';



const app = express();

app.use(express.json());

app.use("/modelo",categoriesRoutes); 

app.use("/modelo",specificationsRoutes); 

app.listen(3333, () => console.log("Server is running ")); 