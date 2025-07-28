import { Injectable } from '@nestjs/common';
import { Coffee } from './entites/coffee.entity';

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
        return this.coffees.find(coffee => coffee.id === id);
    }
    create(coffee: Coffee) {
        this.coffees.push(coffee);
        // return coffee;
    }
    update(id: number, coffee: Coffee) {
        const existingCoffee = this.findOne(id);
        if(existingCoffee){

        }
        
    }
    remove(id: number) {
        const coffeeIndex = this.coffees.findIndex(coffee => coffee.id === +id);
      if (coffeeIndex > -1) {
            return this.coffees.splice(coffeeIndex, 1);
        }
        
    }
       
}
 