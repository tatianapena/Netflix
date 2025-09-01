import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ShowsService } from './shows.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Shows')
@Controller('shows')
export class ShowsController {
  constructor(private readonly showsService: ShowsService) {}

  @Get()
  async getHome() {
    return this.showsService.getAllShowsGroupedByCategory();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return this.showsService.getShowDetail(id);
  }
}
