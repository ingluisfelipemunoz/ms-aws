import { Injectable, Logger } from '@nestjs/common';
import * as AWS from 'aws-sdk';
@Injectable()
export class SqsConsumerService {
  private readonly sqs: AWS.SQS;
  private readonly logger = new Logger(SqsConsumerService.name);

  constructor() {
    this.sqs = new AWS.SQS({
      region: process.env.AWS_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
    });
    this.pollMessages();
  }

  private async pollMessages() {
    const params = {
      QueueUrl: process.env.SQS_QUEUE_URL,
      MaxNumberOfMessages: 10,
      WaitTimeSeconds: 20,
    };

    while (true) {
      try {
        const data = await this.sqs.receiveMessage(params).promise();
        console.log('data', data);
        if (data.Messages) {
          for (const message of data.Messages) {
            // Process message here
            this.logger.log('Received message:', message.Body);
            await this.deleteMessage(message.ReceiptHandle);
          }
        }
      } catch (error) {
        this.logger.error('Error receiving messages:', error);
      }
    }
  }

  private async deleteMessage(receiptHandle: string) {
    const params = {
      QueueUrl: process.env.SQS_QUEUE_URL,
      ReceiptHandle: receiptHandle,
    };

    try {
      await this.sqs.deleteMessage(params).promise();
      this.logger.log('Message deleted successfully');
    } catch (error) {
      this.logger.error('Error deleting message:', error);
    }
  }
}
