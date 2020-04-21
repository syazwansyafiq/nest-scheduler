import { Module } from '@nestjs/common';
import { SchedulerService } from './scheduler.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import app from '../config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [app],
      isGlobal: true,
    }),
    ScheduleModule.forRoot()
  ],
  providers: [SchedulerService]
})
export class SchedulerModule {}
