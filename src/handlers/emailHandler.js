// Load environment variables
require('dotenv').config();

const validator = require('../utils/validator');
const response = require('../utils/response');
const emailService = require('../services/emailService');
const Logger = require('../utils/logger');

const logger = new Logger('EmailHandler');

/**
 * Lambda handler for sending email
 */
exports.sendEmail = async (event) => {
  logger.info('Received email request', { 
    path: event.path || event.rawPath,
    method: event.httpMethod || event.requestContext?.http?.method
  });

  try {
    // Parse request body
    let body;
    try {
      body = JSON.parse(event.body || '{}');
    } catch (parseError) {
      logger.warn('Invalid JSON in request body');
      return response.error('Invalid JSON format', 400);
    }

    // Validate input
    const validation = validator.validateEmailRequest(body);
    if (!validation.isValid) {
      logger.warn('Validation failed', { errors: validation.errors });
      return response.validationError(validation.errors);
    }

    const { receiver_email, subject, body_text } = body;

    // Send email
    const result = await emailService.sendEmail(
      receiver_email,
      subject,
      body_text
    );

    logger.info('Email sent successfully', { 
      messageId: result.messageId 
    });

    return response.success({
      message: 'Email sent successfully',
      ...result
    }, 200);

  } catch (error) {
    logger.error('Error in email handler', error);

    // Handle specific error types
    if (error.message.includes('Invalid login')) {
      return response.error(
        'Email service authentication failed. Please check credentials.',
        503
      );
    }

    if (error.message.includes('ECONNREFUSED')) {
      return response.error(
        'Unable to connect to email server',
        503
      );
    }

    // Generic error
    return response.error(
      'Failed to send email. Please try again later.',
      500
    );
  }
};
