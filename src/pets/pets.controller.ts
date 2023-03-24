import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('pets')
export class PetsController {
  @Get()
  findAll() {
    return 'This action returns all pets';
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return `This action returns a #${id} pet`;
  }

  @Post()
  create(@Body() body) {
    return body;
    //return 'This action adds a new pet';
  }

  @Patch(':id')
  update(@Param('id') id, @Body() body) {
    return `This action updates a #${id} pet`;
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return `This action removes a #${id} pet`;
  }
}
