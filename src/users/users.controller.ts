import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUser(): any {
    return this.usersService.findAll();
  }
  @Get(':id')
  getUserById(@Param('id') id: string): any {
    return this.usersService.findById(Number(id));
  }
  @Post()
  createUser(@Body() body: CreateUserDto): any {
    return this.usersService.createUser(body);
  }
}
