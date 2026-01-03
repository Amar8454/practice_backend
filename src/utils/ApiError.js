class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something is wrong",
    errors = [],
    stack = ""
  ) {
    (super(message)((this.statusCode = statusCode)),
      (this.message = message),
      (this.data = null),
      (this.errors = errors),
      (this.success = success));

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStactTrace(this, this.constructor);
    }
  }
}

export { ApiError };
