import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShowsModule } from './shows/shows.module';
import { CategoriesModule } from './categories/categories.module';
import { EpisodesModule } from './episodes/episodes.module';

@Module({
  imports: [ShowsModule, CategoriesModule, EpisodesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
