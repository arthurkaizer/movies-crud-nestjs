import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Movie } from './entity/movie.entity';

export interface CreateUser {
  username: string;
  password: string;
}

@Injectable()
export class MovieService {
  private userRepository;
  private logger = new Logger();
  constructor(private dataSource: DataSource) {
    this.userRepository = this.dataSource.getRepository(Movie);
  }
  async create(createMovieDTO: createMovieDTO): Promise<Movie> {
    try {
      const user = await this.userRepository.create(createMovieDTO);
      return await this.userRepository.save(user);
    } catch (err) {
      this.logger.error(err.message, err.stack);
      throw new InternalServerErrorException(
        'Something went wrong, Try again!',
      );
    }
  }
}
