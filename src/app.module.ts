import { Module } from '@nestjs/common';
import { TypeOrmCoreModule } from '@nestjs/typeorm/dist/typeorm-core.module';
import { typeormOptions } from './config/config';
import { AuthModule } from './auth/auth.module';
import { TicketModule } from './ticket/ticket.module';
import { EventsModule } from './event/events.module';

@Module({
  imports: [
    TicketModule,
    TypeOrmCoreModule.forRoot(typeormOptions),
    AuthModule,
    EventsModule,
  ],
})
export class AppModule {}
