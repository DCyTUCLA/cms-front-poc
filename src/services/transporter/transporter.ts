class Transporter {
  protected baseUrl: string;
  protected token: string;

  constructor() {
    this.baseUrl = import.meta.env.PUBLIC_STRAPI_URL;
    this.token = import.meta.env.PUBLIC_STRAPI_TOKEN;
  }

  protected async request<T>(
    method: string,
    endpoint: string,
    data?: any,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.token}`,
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        method,
        headers,
        body: data ? JSON.stringify(data) : undefined,
        ...options,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          `HTTP error! status: ${
            response.status
          }\nURL: ${url}\nMethod: ${method}\nError: ${
            errorData?.error?.message || response.statusText
          }`
        );
      }

      return response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Request failed: ${error.message}`);
      }
      throw error;
    }
  }

  protected async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>("GET", endpoint, undefined, options);
  }

  protected async post<T>(
    endpoint: string,
    data: any,
    options?: RequestInit
  ): Promise<T> {
    return this.request<T>("POST", endpoint, data, options);
  }

  protected async put<T>(
    endpoint: string,
    data: any,
    options?: RequestInit
  ): Promise<T> {
    return this.request<T>("PUT", endpoint, data, options);
  }

  protected async patch<T>(
    endpoint: string,
    data: any,
    options?: RequestInit
  ): Promise<T> {
    return this.request<T>("PATCH", endpoint, data, options);
  }

  protected async delete<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    return this.request<T>("DELETE", endpoint, undefined, options);
  }
}

export default Transporter;
