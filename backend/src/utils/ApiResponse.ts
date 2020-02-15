export function ApiResponse<T>(message: string, payload: T) {
  return {
    message,
    payload
  };
}
