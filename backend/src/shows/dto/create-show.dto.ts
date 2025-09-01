import { IsString, IsUrl, IsNumber, IsOptional } from 'class-validator';

export class CreateShowDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  synopsis?: string;

  @IsOptional()
  @IsUrl()
  poster_url?: string;

  @IsOptional()
  @IsNumber()
  popularity?: number;

  @IsNumber()
  category_id: number;
}
