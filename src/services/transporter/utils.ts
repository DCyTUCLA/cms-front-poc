import type {
  CommonAttributes,
  HTTPResponse,
  HTTPResponseList,
  MappedResponse,
  MappedResponseList,
} from "./types";

export function mapHTTPResponse<T>(
  response: HTTPResponse<T>
): MappedResponse<T> {
  const { documentId, id, ...rest } = response.data;
  return {
    data: {
      id: documentId,
      ...(rest as T & CommonAttributes),
    },
  };
}

export function mapHTTPResponseList<T>(
  response: HTTPResponseList<T>
): MappedResponseList<T> {
  return {
    data: response.data.map((item) => {
      const { documentId, id, ...rest } = item;
      return {
        id: documentId,
        ...(rest as T & CommonAttributes),
      };
    }),
    meta: response.meta,
  };
}
