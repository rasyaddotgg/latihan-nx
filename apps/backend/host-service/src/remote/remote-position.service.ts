import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RemotePosition } from './entities/remote-position.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RemotePositionService {
  constructor(
    @InjectRepository(RemotePosition)
    private readonly remotePositionRepository: Repository<RemotePosition>
  ) {}

  findByPosition(position: string) {
    return this.remotePositionRepository.findOne({
      where: { position },
      relations: {
        remoteComponent: {
          remote: true,
        },
      },
    });
  }
}
