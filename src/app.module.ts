import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfig } from './config/database.config';
import { FichaMedicaController } from './modules/controllers/PrincipalFichaMedica.controller';
import { FichaMedicaService } from './modules/services/FichaMedica.service';

const envPath = ['.env'];
if (process.env.NODE_ENV === 'development') {
  envPath.unshift('.env.development');
}

@Module({
  imports: [

    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: envPath
    }),
    DatabaseConfig.getASRDboConnection(),
    CacheModule.register({ ttl: 10, max: 100, isGlobal: true }),

  ],
  controllers: [FichaMedicaController],
  providers: [FichaMedicaService],
})
export class AppModule { }