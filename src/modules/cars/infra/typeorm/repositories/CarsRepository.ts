import { getRepository, Repository } from "typeorm";

import { ICreateCarDTO } from "src/modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "src/modules/cars/repositories/in-memory/ICarsRepository";
import { Car } from "../entities/Car";



class CarsRepository implements ICarsRepository{

    private repository: Repository<Car>

    constructor(){
        this.repository = getRepository(Car);
    }

    async create({
        brand,
        category_id, 
        daily_rate, 
        description, 
        fine_amount, 
        license_plate, 
        name
    }: ICreateCarDTO): Promise<Car> {
        const car = this.repository.create({
        brand,
        category_id, 
        daily_rate, 
        description, 
        fine_amount, 
        license_plate, 
        name,
        })

        await this.repository.save(car);

        return car;
    }

    async findyByLicensePlate(license_plate: string): Promise<Car> {
        const car = await this.repository.findOne({
            license_plate,
        });

        return car;
    }

}

export {CarsRepository}