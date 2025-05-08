import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRemoteDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  url: string;
}
