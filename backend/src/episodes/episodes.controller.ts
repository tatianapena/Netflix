import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Episodes')
@Controller('episodes')
export class EpisodesController {
  constructor(private readonly episodesService: EpisodesService) {}

  @Get(':id')
  async getEpisodesByShowId(@Param('id', ParseIntPipe) showId: number) {
    return this.episodesService.getEpisodesByShowId(showId);
  }
}
