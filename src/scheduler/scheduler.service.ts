import { Injectable, Logger } from '@nestjs/common';
import { Cron, SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SchedulerService {
  constructor(
    private configService: ConfigService,
    private schedulerRegistry: SchedulerRegistry
  ) { }

  private readonly logger = new Logger(SchedulerService.name);

  @Cron('* * * * *')
  handleCron() {
    this.logger.debug('Called every 1 minute');
  }
  @Cron('0 12 * * *', { name: 'handleCron1'})
  handleCron1() {
    this.logger.debug('Called every 12 oclock');
  }
  @Cron('55 13 * * *', { timeZone: process.env.TZ }) // TZ='Asia/Jakarta'
  handleCron4() {
    this.logger.debug('Called every 13:55 Jakarta time');
  }
}
