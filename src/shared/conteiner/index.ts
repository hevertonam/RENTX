import {container} from "tsyringe";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/infra/typeorm/entities/repositories/IUsersRepository";

import {ICategoriesRepository} from "@modules/cars/repositories/ICategoriesRepository"
import {CategoriesRepository} from "@modules/cars/infra/typeorm/repositories/CategoriesRepository"
import { CarsRepository } from "../../modules/cars/infra/typeorm/repositories/CarsRepository";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { ICarsRepository } from "@modules/cars/repositories/in-memory/ICarsRepository";




container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);


container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<ICarsRepository>(
    "CarsRepository",
    CarsRepository
)

