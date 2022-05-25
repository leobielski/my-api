import { Controller, Get, Post, Redirect } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  @Redirect('http://localhost:3000/user/new', 302)
  getUser() {
    return this.userService.getUser();
  }

  @Get('new')
  getUserV2() {
    return 'Redirected in User Controller';
  }

  @Post()
  saveUser() {
    return 'Created';
  }
}
