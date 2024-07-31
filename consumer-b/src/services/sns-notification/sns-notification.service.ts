// src/sns-notification/sns-notification.service.ts
import { Injectable, Logger } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class SnsNotificationService {
  private readonly sns: AWS.SNS;
  private readonly logger = new Logger(SnsNotificationService.name);

  constructor() {
    this.sns = new AWS.SNS({
      region: process.env.AWS_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
    });
  }

  async publishNotification(message: string) {
    const params = {
      Message: message,
      TopicArn: process.env.SNS_TOPIC_ARN,
    };

    try {
      const result = await this.sns.publish(params).promise();
      this.logger.log(`Notification sent with MessageID: ${result.MessageId}`);
      return result;
    } catch (error) {
      this.logger.error('Error sending notification:', error);
    }
  }
}
