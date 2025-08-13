  import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, Res,Delete, Query  } from '@nestjs/common';
  import { create } from 'domain';
  import { response } from 'express';
  import { CoffeesService } from 'src/coffees/coffees.service';
  import { CreateCoffeeDto } from 'src/coffees/dto/create-coffee.dto';
  import { UpdateCoffeeDto } from 'src/coffees/dto/update-coffee.dto';
  import { Coffee } from 'src/coffees/entites/coffee.entity';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

  @Controller('coffees')
  export class CoffesController {
  //  @Get()
  // getAll(@Res() response) {
  //   response.status(203).send('This is a get api that returns basic');
  // }

  // @Get('flavours')
  // getFlavours() {
  //   return 'This is a get api that returns all the coffees';
  // }
  //   // @Get(':id')
  //   // findOne(){
  //   //     return 'This actions return #[id]coffees'
  //   // }
  //   @Get(':id')
  //   findOne(@Param('id') id: string) {
  //     return `This action returns #${id} coffee`;
  //   }
  //   @Post()
  //   @HttpCode(HttpStatus.GONE)
  //   create(@Body() body){
  //     return body;
  //   }
  //   @Patch(':id')
  //   update(@Param('id') id:string,@Body() body){
  //     return `This action updates #${id} coffee.`;
  //   }
  //   @Delete(':id')
  //   remove(@Param('id') id:string){
  //     return `This action removes #${id} coffee.`;
  //   }
  //   @Get()
  //   findAll(@Query() paginationQuery){
  //       const {limit, offset} = paginationQuery;
  //     return `This action returns all coffees. ${limit} and ${offset}`;
  //   }
    constructor(private readonly coffeeService: CoffeesService) {}
    @Get()
    findAll(@Query() paginationQuery:PaginationQueryDto) {
      // const {limit, offset}=paginationQuery
      return this.coffeeService.findAll(paginationQuery);
    }
    @Get(':id')
    findOne(@Param('id') id:string){
      return this.coffeeService.findOne(Number(id));
    }
    @Post()
    create(@Body() createBodyDto:CreateCoffeeDto){
      console.log(createBodyDto instanceof CreateCoffeeDto)
      return this.coffeeService.create(createBodyDto)
    }
    @Patch(':id')
      update(@Param('id') id:string, @Body() updateCoffeeDto:UpdateCoffeeDto){
        return this.coffeeService.update(id,updateCoffeeDto)
      }
    @Delete(':id')
    remove(@Param('id') id:string){
      return this.coffeeService.remove(Number(id))
    }
  }
