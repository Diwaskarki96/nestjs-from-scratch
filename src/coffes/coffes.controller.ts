import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffesController {
  @Get('flavours')
  findAll() {
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
  create(@Body() body){
    return body;
  }
}
