import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entites/coffee.entity';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Injectable()
export class CoffeesService {
  
    constructor(
        @InjectRepository(Coffee)
        private readonly coffeeRepository: Repository<Coffee>,
    ) {}

    findAll() {
        return this.coffeeRepository.find();
    }
   async findOne(id: number) {
        const coffee=await this.coffeeRepository.findOne({ where: { id } }) ;
        if(!coffee){
            // throw new HttpException(`Coffee ${id} not found`, HttpStatus.NOT_FOUND);
            //Better practice
            throw new NotFoundException(`Coffee ${id} not found`);
        }
        return coffee;
    }
    create(createCoffeeDto: CreateCoffeeDto) {
          const coffee = this.coffeeRepository.create(createCoffeeDto);
  return this.coffeeRepository.save(coffee);
    }
   async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
        const coffee =await this.coffeeRepository.preload({id:+id,...updateCoffeeDto});
      if (!coffee){
        throw new NotFoundException(`Coffee ${id} not found`);
      }
      return this.coffeeRepository.save(coffee);        
        
    }
   async remove(id: number) {
        const coffee = await this.coffeeRepository.findOne({ where: { id } });
        if (!coffee) {
            throw new NotFoundException(`Coffee ${id} not found`);
        }
        return this.coffeeRepository.remove(coffee);
    }
       
}
 