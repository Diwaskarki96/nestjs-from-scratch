import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entites/coffee.entity';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
    private coffees:Coffee[]=[
        {
            id: 1,
            name: 'Coffee One',
            brand: 'Brand A',
            flavors: ['Chocolate', 'Vanilla']
        },
      
    ]
    findAll() {
        return this.coffees;
    }
    findOne(id: number) {
        const coffee= this.coffees.find(coffee => coffee.id === id);
        if(!coffee){
            // throw new HttpException(`Coffee ${id} not found`, HttpStatus.NOT_FOUND);
            //Better practice
            throw new NotFoundException(`Coffee ${id} not found`);
        }
        return coffee;
    }
    create(coffee: Coffee) {
        this.coffees.push(coffee);
        // return coffee;
    }
    update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
        const existingCoffee = this.findOne(id);
        if(existingCoffee){
Object.assign(existingCoffee, updateCoffeeDto);
            return existingCoffee;
        }
        
    }
    remove(id: number) {
        const coffeeIndex = this.coffees.findIndex(coffee => coffee.id === +id);
      if (coffeeIndex > -1) {
            return this.coffees.splice(coffeeIndex, 1);
        }
        
    }
       
}
 