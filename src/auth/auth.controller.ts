import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authServise: AuthService) {}

  @Post()
  signIn(@Body() user: AuthDto) {
    return this.authServise.signIn(user.email, user.password);
  }
}
