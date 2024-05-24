import { Injectable, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Movie } from './entity/movie.entity';
import { CreateMovieDTO, UpdateMovieDTO } from './dto';

@Injectable()
export class MovieService {
  private movieRepository;
  //TODO: usar o logger
  private logger = new Logger();
  constructor(private dataSource: DataSource) {
    this.movieRepository = this.dataSource.getRepository(Movie);
  }
  async create(createMovieDTO: CreateMovieDTO): Promise<Movie> {
    const movie = await this.movieRepository.create(createMovieDTO);
    return await this.movieRepository.save(movie);
  }

  async update(id: number, updateMovieDTO: UpdateMovieDTO): Promise<Movie> {
    const existingMovie = await this.findOne(id);
    const movie = this.movieRepository.merge(existingMovie, updateMovieDTO);
    return await this.movieRepository.save(movie);
  }

  async findOne(id: number): Promise<Movie> {
    return await this.movieRepository.findOne(id);
  }

  async findAll(): Promise<Movie[]> {
    return await this.movieRepository.find();
  }

  async remove(id: number): Promise<Movie> {
    const existingMovie = await this.findOne(id);
    return await this.movieRepository.remove(existingMovie);
  }
}
