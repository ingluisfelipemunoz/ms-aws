import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SqsProducerService } from './services/sqs-producer/sqs-producer.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sqsProducerService: SqsProducerService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async sendMessage(@Body('message') message: string) {
    return this.sqsProducerService.sendMessage(message);
  }
}
