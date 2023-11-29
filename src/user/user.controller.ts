import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  register(@Body() user: CreateUserDto) {
    return this.userService.register(user);
  }

  @Get()
  getUser() {
    return this.userService.findAll();
  }
}
