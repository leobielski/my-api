import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Redirect,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  // @Get()
  // @Redirect('http://localhost:3000/user/new', 302)
  // getUsers() {
  //   return '';
  // }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.userService.getUserById(Number(id));
  }

  @Get()
  getUsers(@Query('name') name: string) {
    if (name) {
      return this.userService.getUserByName(name);
    }
    return this.userService.getAll();
  }

  @Get('new')
  getUserV2() {
    return 'Redirected in User Controller';
  }

  @Post()
  saveUser(@Body() user: any) {
    return this.userService.save(user);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: any) {
    return this.userService.update(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
