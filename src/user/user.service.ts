import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getAll() {
    return this.userRepository.find();
  }

  getUserById(id: number) {
    const foundUser = this.userRepository.findOneBy({ id });
    if (!foundUser) {
      throw new NotFoundException('User not found');
    }
    return foundUser;
  }

  getUserByName(name: string) {
    const foundUser = '';
    if (!foundUser) {
      throw new NotFoundException('User not found');
    }
    return foundUser;
  }

  update(id: string, user: any) {
    return this.userRepository.update(id, user);
  }

  save(user: any) {
    const userEntity = this.userRepository.create(user);
    return this.userRepository.save(userEntity);
  }

  delete(id: string) {
    return this.userRepository.delete(id);
  }
}
