import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTicketDto {
  @IsNotEmpty()
  @IsString()
  ticket_name: string;
}
