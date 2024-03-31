import { ShortenRepository } from "api/src/topics/shorten/repository/shorten.repository";
import {
  IGetAllShortUrlsResult,
  IGetShortUrlByNanoidResult,
  IInsertShortUrlResult,
} from "api/src/topics/shorten/repository/queries/shorten.queries";
export class ShortenService {
  public static async createShortUrl(
    url: string
  ): Promise<IInsertShortUrlResult> {
    return ShortenRepository.createShortUrl(url);
  }

  public static async getAllUrls(): Promise<IGetAllShortUrlsResult[]> {
    return ShortenRepository.getAllUrls();
  }

  public static async deleteUrl(id: number): Promise<void> {
    return ShortenRepository.deleteUrl(id);
  }

  public static async getUrlByNanoid(
    nanoid: string
  ): Promise<IGetShortUrlByNanoidResult> {
    return ShortenRepository.getUrlByNanoid(nanoid);
  }
}
