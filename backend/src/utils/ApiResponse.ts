export function ApiResponse<T>(message: MESSAGE | string, payload: T) {
  return {
    message,
    payload
  };
}

export enum MESSAGE {
  VALIDATION_ERROR = "Error on request params",
  REQUEST_SUCCESSFUL = "Request successful"
}
