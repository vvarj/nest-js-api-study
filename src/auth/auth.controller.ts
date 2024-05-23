import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
// import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // POST auth/signup
  @Post('signup')

  // signup(@Req() req: Request) {
  //   console.log(req.body);
  //   // return { message: 'signup success' };
  //   return this.authService.signUp(req.body);
  // }
  signup(@Body() dto: AuthDto) {
    console.log({
      dto,
    });
    // return { message: 'signup success' };
    return this.authService.signUp(dto);
  }

  // POST auth/signin
  @Post('signin')
  signIn(@Body() dto: AuthDto) {
    // return { message: 'signIn success' };
    return this.authService.signIn(dto);
  }
}
