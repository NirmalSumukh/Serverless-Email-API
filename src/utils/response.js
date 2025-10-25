/**
 * Standardized API response helper
 */
module.exports = {
  /**
   * Success response
   */
  success(data, statusCode = 200) {
    return {
      statusCode,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        success: true,
        data
      })
    };
  },

  /**
   * Error response
   */
  error(message, statusCode = 500, errors = []) {
    return {
      statusCode,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        success: false,
        error: message,
        details: errors.length > 0 ? errors : undefined
      })
    };
  },

  /**
   * Validation error response
   */
  validationError(errors) {
    return this.error('Validation failed', 400, errors);
  }
};
