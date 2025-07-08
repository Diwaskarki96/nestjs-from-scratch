import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffes')
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
  findOne(@Param(':id') id: string) {
    return `This action returns #${id} coffee`;
  }
}
