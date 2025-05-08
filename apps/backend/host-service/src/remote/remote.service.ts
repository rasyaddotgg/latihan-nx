import { Injectable } from '@nestjs/common';
import { CreateRemoteDto } from './dto/create-remote.dto';
import { UpdateRemoteDto } from './dto/update-remote.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Remote } from './entities/remote.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RemoteService {
  constructor(
    @InjectRepository(Remote)
    private readonly remoteRepository: Repository<Remote>
  ) {}

  async create(createRemoteDto: CreateRemoteDto) {
    const remote = this.remoteRepository.create(createRemoteDto);
    return await this.remoteRepository.save(remote);
  }

  findAll() {
    return this.remoteRepository.find({
      relations: ['components'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} remote`;
  }

  update(id: number, updateRemoteDto: UpdateRemoteDto) {
    return `This action updates a #${id} remote`;
  }

  remove(id: number) {
    return `This action removes a #${id} remote`;
  }
}
