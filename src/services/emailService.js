const nodemailer = require('nodemailer');
const emailConfig = require('../config/emailConfig');
const Logger = require('../utils/logger');

const logger = new Logger('EmailService');

class EmailService {
  constructor() {
    this.transporter = null;
  }

  /**
   * Initialize email transporter
   */
  async initialize() {
    if (!this.transporter) {
      try {
        this.transporter = nodemailer.createTransport(emailConfig.smtp);
        
        // Verify connection
        await this.transporter.verify();
        logger.info('Email transporter initialized successfully');
      } catch (error) {
        logger.error('Failed to initialize email transporter', error);
        throw new Error('Email service initialization failed');
      }
    }
  }

  /**
   * Send email
   */
  async sendEmail(receiver_email, subject, body_text) {
    try {
      // Ensure transporter is initialized
      await this.initialize();

      const mailOptions = {
        from: emailConfig.defaults.from,
        to: receiver_email,
        subject: subject,
        text: body_text,
        html: `<p>${body_text.replace(/\n/g, '<br>')}</p>`
      };

      logger.info('Sending email', { 
        to: receiver_email, 
        subject 
      });

      const info = await this.transporter.sendMail(mailOptions);

      logger.info('Email sent successfully', { 
        messageId: info.messageId,
        to: receiver_email 
      });

      return {
        success: true,
        messageId: info.messageId,
        recipient: receiver_email,
        subject
      };

    } catch (error) {
      logger.error('Failed to send email', error, { 
        to: receiver_email 
      });
      
      throw error;
    }
  }
}

// Export singleton instance
module.exports = new EmailService();
