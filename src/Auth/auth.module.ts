import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsuarioModule } from 'src/Usuario/usuario.module';
import { Bcrypt } from './bcrypt/bcrypt';
import { AuthService } from './bcrypt/services/auth.services';
import { jwtConstants } from './constants/constants';
import { AuthController } from './controllers/auth.controller';
import { LocalStrategy } from './strategy/local.strategy';

@Module({
  imports: [
    UsuarioModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '24h'},
    }),
  ],
  providers: [Bcrypt, AuthService, LocalStrategy],
  controllers: [AuthController],
  exports: [Bcrypt],
})
export class AuthModule { }