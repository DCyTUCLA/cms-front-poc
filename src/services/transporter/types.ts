export interface ImportMetaEnv {
  PUBLIC_STRAPI_URL: string;
  PUBLIC_STRAPI_TOKEN: string;
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export interface CommonAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface MappedResponse<T> {
  data: T & CommonAttributes & { id: string };
}

export interface MappedResponseList<T> {
  data: Array<T & CommonAttributes & { id: string }>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Original Strapi response types
export interface HTTPResponse<T> {
  data: {
    id: number;
    documentId: string;
  } & T &
    CommonAttributes;
  meta: Record<string, unknown>;
}

export interface HTTPResponseList<T> {
  data: Array<
    {
      id: number;
      documentId: string;
    } & T &
      CommonAttributes
  >;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
