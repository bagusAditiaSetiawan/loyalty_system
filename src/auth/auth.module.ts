import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { authProvider } from './provides/user.provider';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [...authProvider],
})
export class AuthModule {}