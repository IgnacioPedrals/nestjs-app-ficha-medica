import { TypeOrmModule } from "@nestjs/typeorm";
import { FichaMedicaEntity } from "src/entities/FichaMedica.entities";

export class DatabaseConfig {
  private static getDefaultOptions() {
    return {
      type: 'mssql',
      host: "app-ficha-medica.database.windows.net",
      port: 1433,
      username: "testingivette",
      password: "Ypofg62020",
      database: "testing",
      synchronize: false,
      logging: true,
      maxQueryExecutionTime: 1500,
      options: {
        enableArithAbort: true,
        encrypt: true,
      },
    };
  }
  public static getASRDboConnection(): any {
    const config: any = {
      ...this.getDefaultOptions(),
      entities: this.getAsrEntities(),
    };
    return TypeOrmModule.forRoot(config);
  }
  private static getAsrEntities(): any[] {
    return [FichaMedicaEntity];
  }
}
