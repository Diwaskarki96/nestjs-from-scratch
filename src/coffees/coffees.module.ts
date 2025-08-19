import { Module } from '@nestjs/common';
import { CoffesController } from 'src/coffes/coffes.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entites/coffee.entity';
import { Flavor } from './entites/flavor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor])],
  controllers: [CoffesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
