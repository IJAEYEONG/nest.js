import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body('name') name: string) {
    return this.userService.createUser(name);
  }

  @Get()
  getUser() {
    return this.userService.getUsers();
  }
}
