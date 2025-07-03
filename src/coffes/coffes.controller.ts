import { Controller, Get } from '@nestjs/common';

@Controller('coffes')
export class CoffesController {
    @Get('flavours')
    findAll(){
        return "This is a get api that returns all the coffees"
    }
    @Get(':id')
    findOne(){
        return 'This actions return #[id]coffees'
    }

}
