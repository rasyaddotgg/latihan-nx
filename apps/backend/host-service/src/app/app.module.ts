import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RemoteModule } from '../remote/remote.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'latihan_nx',
      synchronize: true,
      autoLoadEntities: true,
    }),
    RemoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
