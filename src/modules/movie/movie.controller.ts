import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { AuthGuard } from '../auth/auth.guard';
import { CreateMovieDTO, UpdateMovieDTO } from './dto';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createMovieDTO: CreateMovieDTO) {
    return this.movieService
      .create(createMovieDTO)
      .then((data) => ({
        success: true,
        data,
        message: 'Movie Created Successfully',
      }))
      .catch((error) => {
        throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
        );
      });
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updateMovieDTO: UpdateMovieDTO) {
    return this.movieService
      .update(parseInt(id), updateMovieDTO)
      .then((data) => ({
        success: true,
        data,
        message: 'Movie Updated Successfully',
      }))
      .catch((error) => {
        throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
        );
      });
  }

  @Get()
  findAll() {
    return this.movieService
      .findAll()
      .then((data) => ({
        success: true,
        data,
        message: 'Movie Fetched Successfully',
      }))
      .catch((error) => {
        throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
        );
      });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movieService
      .findOne(parseInt(id))
      .then((data) => ({
        success: true,
        data,
        message: 'Movie Fetched Successfully',
      }))
      .catch((error) => {
        throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
        );
      });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movieService
      .remove(parseInt(id))
      .then(() => ({
        success: true,
        message: 'Movie Deleted Successfully',
      }))
      .catch((error) => {
        throw new HttpException(
          error.message,
          error.status || HttpStatus.BAD_REQUEST,
        );
      });
  }
}
