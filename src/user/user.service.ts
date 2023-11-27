import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userSchema: Model<User>) {}

  async create(user): Promise<User> {
    const createUser = new this.userSchema(user);
    return createUser.save();
  }
}
