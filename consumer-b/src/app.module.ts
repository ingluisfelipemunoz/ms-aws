import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SqsConsumerService } from './services/sqs-consumer/sqs-consumer.service';
import { SnsNotificationService } from './services/sns-notification/sns-notification.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService, SqsConsumerService, SnsNotificationService],
})
export class AppModule {}
