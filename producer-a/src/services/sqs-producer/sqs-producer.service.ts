import { Injectable, Logger } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class SqsProducerService {
  private readonly sqs: AWS.SQS;
  private readonly logger = new Logger(SqsProducerService.name);

  constructor() {
    this.sqs = new AWS.SQS({
      region: process.env.AWS_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
    });
  }

  async sendMessage(messageBody: string) {
    const params = {
      MessageBody: messageBody,
      QueueUrl: process.env.SQS_QUEUE_URL,
    };

    try {
      const result = await this.sqs.sendMessage(params).promise();
      this.logger.log(`Message sent: ${result.MessageId}`);
      return result;
    } catch (error) {
      this.logger.error('Error sending message:', error);
    }
  }
}
