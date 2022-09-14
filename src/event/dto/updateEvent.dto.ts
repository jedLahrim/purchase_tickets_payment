import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateEventDto {
  @IsNotEmpty()
  @IsString()
  event_name: string;
}
