import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { SigninDto } from '../dtos/signin.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { UserService } from '../services/user.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('/signin')
  @ApiResponse({
    status: 200,
    description: "Success signin"
  })
  @ApiResponse({
    status: 401,
    description: "Email Or Password is wrong"
  })
  @ApiResponse({
    status: 400,
    description: "Bad request parameter"
  })
  @ApiBody({
    schema: {
        example: {
            email: 'braditya12@gmail.com',
            password: 'Braditya123!',
            rememberMe: true,
        }
    }
  })
  @HttpCode(200)
  async signin(@Body() signinDto: SigninDto) {
    await this.userService.signin(signinDto);
    return {
      message: 'Successfully signin'
    }
  }
}