import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);

    if (!user) {
      throw new UnauthorizedException('Пользователя не существует');
    }

    const isValidPassword = await bcrypt.compare(pass, user.password);

    if (!isValidPassword) {
      throw new UnauthorizedException('Почта или пароль не верные');
    }

    const payload = { sub: user._id, useremail: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
