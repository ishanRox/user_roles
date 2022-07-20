import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEmail } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()
  readonly UserName: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()
  readonly Name: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()
  readonly Surname: string;

  @ApiProperty({ type: String })
  @IsEmail()
  @IsOptional()
  readonly Email: string;
}
