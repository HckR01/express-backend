class ApiError extends Error {
  constructor(
    statusCode,
    message = "something went wrong",
    errors = [],
    statck = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.data = null;
    this.errors = errors;
    //     this.statck = statck;
    this.success = false;

    if (statck) {
      this.stack = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
module.exports = ApiError;
