/**
 * Simple structured logger
 */
class Logger {
  constructor(context = 'EmailAPI') {
    this.context = context;
  }

  info(message, meta = {}) {
    console.log(JSON.stringify({
      level: 'INFO',
      context: this.context,
      message,
      timestamp: new Date().toISOString(),
      ...meta
    }));
  }

  error(message, error = null, meta = {}) {
    console.error(JSON.stringify({
      level: 'ERROR',
      context: this.context,
      message,
      error: error ? {
        message: error.message,
        stack: error.stack
      } : null,
      timestamp: new Date().toISOString(),
      ...meta
    }));
  }

  warn(message, meta = {}) {
    console.warn(JSON.stringify({
      level: 'WARN',
      context: this.context,
      message,
      timestamp: new Date().toISOString(),
      ...meta
    }));
  }
}

module.exports = Logger;
