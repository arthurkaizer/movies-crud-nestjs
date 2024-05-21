import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createMovieDTO: CreateMovieDTO) {
    return this.movieService.create(createMovieDTO);
  }
}
