import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
import { Public } from 'src/auth/auth.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post()
  register(@Body() user: CreateUserDto) {
    return this.userService.register(user);
  }

  @Get()
  getUser() {
    return this.userService.findAll();
  }
}
