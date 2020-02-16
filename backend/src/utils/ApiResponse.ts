export function ApiResponse<T>(
  message: API_RESPONSE_MESSAGE | string,
  payload: T
) {
  return {
    message,
    payload
  };
}

export enum API_RESPONSE_MESSAGE {
  VALIDATION_ERROR = "Error on request params",
  REQUEST_SUCCESSFUL = "Request successful"
}
