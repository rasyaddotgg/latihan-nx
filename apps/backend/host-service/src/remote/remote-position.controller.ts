import { Controller, Get, Param } from '@nestjs/common';
import { RemotePositionService } from './remote-position.service';

@Controller('remote-position')
export class RemotePositionController {
  constructor(private readonly remotePositionService: RemotePositionService) {}

  @Get(':position')
  async findOneByPosition(@Param('position') position: string) {
    return this.remotePositionService.findByPosition(position);
  }
}
