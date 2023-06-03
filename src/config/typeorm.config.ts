import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'bankr',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true, //ONLY IN DEV FALSE IN PRODUCTION
};
