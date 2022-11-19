export async function getServices() {
  try {
    const response = await axios.get(`/api/services?token=sadasddsa`);
    if (!response.status) {
      return _handleError(response.status);
    }
    return response.data;
  } catch (err) {
    _throwSpecificError(err);
  }
}

function _throwSpecificError(err) {
  if (err instanceof ServerError || err instanceof NotFoundError) {
    throw err;
  }
  throw new NetworkError();
}

export class NetworkError extends Error {
  constructor() {
    super("Network error");
  }
}

export class NotFoundError extends Error {
  constructor() {
    super("The resource you requested was not found.");
  }
}

export class ServerError extends Error {
  constructor() {
    super("There was a server error.");
  }
}