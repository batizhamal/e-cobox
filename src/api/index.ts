import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export class API {
  get<T>(url: string, config?: AxiosRequestConfig) {
    return instance.get<T>(url, config).then((response) => response.data);
  }
  getWithResponse<T>(url: string, config?: AxiosRequestConfig) {
    return instance.get<T>(url, config);
  }

  post<T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig) {
    return instance
      .post<T>(url, data, config)
      .then((response) => response.data);
  }
  delete<T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig) {
    return instance.delete<T>(url, config).then((response) => response.data);
  }
  put<T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig) {
    return instance.put<T>(url, data, config).then((response) => response.data);
  }
}
