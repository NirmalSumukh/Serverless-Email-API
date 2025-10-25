const validator = {
  /**
   * Validate email format
   */
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  /**
   * Validate email request body
   */
  validateEmailRequest(body) {
    const errors = [];

    if (!body.receiver_email) {
      errors.push('receiver_email is required');
    } else if (!this.isValidEmail(body.receiver_email)) {
      errors.push('receiver_email must be a valid email address');
    }

    if (!body.subject) {
      errors.push('subject is required');
    } else if (body.subject.trim().length === 0) {
      errors.push('subject cannot be empty');
    }

    if (!body.body_text) {
      errors.push('body_text is required');
    } else if (body.body_text.trim().length === 0) {
      errors.push('body_text cannot be empty');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
};

module.exports = validator;
