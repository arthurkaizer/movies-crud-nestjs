import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  uuid: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  director: string;

  @Column()
  releaseYear: number;

  @Column()
  duration: number;

  @Column()
  ageRating: string;
}
