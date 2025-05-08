import { Module } from '@nestjs/common';
import { RemoteService } from './remote.service';
import { RemoteController } from './remote.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Remote } from './entities/remote.entity';
import { RemoteComponent } from './entities/remote-component.entity';
import { RemotePosition } from './entities/remote-position.entity';
import { RemotePositionController } from './remote-position.controller';
import { RemotePositionService } from './remote-position.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Remote, RemoteComponent, RemotePosition]),
  ],
  controllers: [RemoteController, RemotePositionController],
  providers: [RemoteService, RemotePositionService],
})
export class RemoteModule {}
