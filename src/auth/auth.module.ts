import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { FirebaseNormalUserLoginStrategy } from './strategies/firebase-normal-user-login.strategy'
import { UsersModule } from '../users/users.module'
import { FirebaseNormalUserValidateStrategy } from './strategies/firebase-normal-user-validate.strategy'
import { AuthController } from './auth.controller'
import { FirebaseModule } from '../firebase/firebase.module'
import { FirebaseAdminUserLoginStrategy } from './strategies/firebase-admin-user-login.strategy'
import { FirebaseAdminUserValidateStrategy } from './strategies/firebase-admin-user-validate.strategy'
import { AdminsModule } from '../admins/admins.module'

@Module({
  imports: [AdminsModule, UsersModule, FirebaseModule],
  providers: [
    AuthService,
    FirebaseNormalUserLoginStrategy,
    FirebaseNormalUserValidateStrategy,
    FirebaseAdminUserLoginStrategy,
    FirebaseAdminUserValidateStrategy,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
