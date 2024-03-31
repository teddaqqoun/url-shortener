import axios, { AxiosResponse } from "axios";
import { ApiServiceHelper } from "app/src/api-services/helper";

export class ShortenUrlApiService {
  public static async createShortUrl(url: string): Promise<AxiosResponse<any>> {
    return axios.post(ApiServiceHelper.getApiPath("shorten"), { url });
  }

  public static async getAllShortUlrs(): Promise<AxiosResponse<any>> {
    return axios.get(ApiServiceHelper.getApiPath("shorten"));
  }

  public static async deleteShortUrl(id: number): Promise<AxiosResponse<any>> {
    return axios.delete(ApiServiceHelper.getApiPath(`shorten/${id}`));
  }

  public static async getShortUrl(nanoid: string): Promise<AxiosResponse<any>> {
    return axios.get(ApiServiceHelper.getApiPath(`shorten/${nanoid}`));
  }
}
