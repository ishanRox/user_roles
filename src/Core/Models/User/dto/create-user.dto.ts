import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: String })
  @IsString()
  readonly UserName: string;

  @ApiProperty({ type: String })
  @IsString()
  readonly Name: string;

  @ApiProperty({ type: String })
  @IsString()
  readonly Surname: string;

  @ApiProperty({ type: String })
  @IsEmail()
  readonly Email: string;

  @ApiProperty({ type: String })
  @IsString()
  readonly Password: string;
}
