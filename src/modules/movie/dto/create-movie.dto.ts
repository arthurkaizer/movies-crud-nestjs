import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export default class CreateMovieDTO {
  @ApiProperty({
    type: String,
    required: true,
    example: 'My Store Name',
  })
  @IsString()
  @IsNotEmpty()
  title: string;
  @ApiProperty({
    type: String,
    required: true,
    example: 'My Store Name',
  })
  @IsString()
  @IsNotEmpty()
  description: string;
  @ApiProperty({
    type: String,
    required: true,
    example: 'My Store Name',
  })
  @IsString()
  @IsNotEmpty()
  director: string;
  @ApiProperty({
    type: Number,
    required: true,
    example: 40.7128,
  })
  @IsNumber()
  @IsNotEmpty()
  releaseYear: number;
  @ApiProperty({
    type: Number,
    required: true,
    example: 40.7128,
  })
  @IsNumber()
  @IsNotEmpty()
  duration: number;

  @ApiProperty({
    type: String,
    required: true,
    example: 'My Store Name',
  })
  @IsString()
  @IsNotEmpty()
  ageRating: string;
}
