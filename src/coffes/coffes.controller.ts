import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, Res,Delete, Query  } from '@nestjs/common';
import { response } from 'express';

@Controller('coffees')
export class CoffesController {
//  @Get()
// getAll(@Res() response) {
//   response.status(203).send('This is a get api that returns basic');
// }

@Get('flavours')
getFlavours() {
  return 'This is a get api that returns all the coffees';
}
  // @Get(':id')
  // findOne(){
  //     return 'This actions return #[id]coffees'
  // }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }
  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body){
    return body;
  }
  @Patch(':id')
  update(@Param('id') id:string,@Body() body){
    return `This action updates #${id} coffee.`;
  }
  @Delete(':id')
  remove(@Param('id') id:string){
    return `This action removes #${id} coffee.`;
  }
  @Get()
  findAll(@Query() paginationQuery){
      const {limit, offset} = paginationQuery;
    return `This action returns all coffees. ${limit} and ${offset}`;
  }
}
