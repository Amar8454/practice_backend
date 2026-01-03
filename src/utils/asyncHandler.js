// 1st method to define asyncHandler

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    return Promise.resolve(requestHandler(req, res, next)).catch(
      (error) => next.error
    );
  };
};

export { asyncHandler };

// 2nd method to define asyncHandler using try catch mathod

const asyncHandler2 = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      message: error.message,
      success: false,
    });
  }
};

export { asyncHandler2 };
