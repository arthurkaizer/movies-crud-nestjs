import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  director: string;

  @Column('simple-array')
  cast: string[];

  @Column('simple-array')
  genre: string[];

  @Column()
  releaseYear: number;

  @Column()
  duration: number;

  @Column()
  ageRating: string;

  @Column('float')
  rating: number;

  @Column()
  language: string;

  @Column()
  countryOfOrigin: string;

  @Column('date')
  addedDate: Date;

  @Column()
  posterUrl: string;

  @Column()
  trailerUrl: string;

  @Column()
  format: string;

  @Column()
  producer: string;

  @Column('bigint')
  budget: number;

  @Column('bigint')
  boxOffice: number;
}
