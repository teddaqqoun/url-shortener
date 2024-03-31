import { nanoid } from "nanoid";
import { NANO_ID_LENGTH } from "api/src/topics/shared/constants";
import {
  deleteShortUrl,
  getAllShortUrls,
  getShortUrlByNanoid,
  IGetAllShortUrlsResult,
  IGetShortUrlByNanoidResult,
  IInsertShortUrlResult,
  insertShortUrl,
} from "api/src/topics/shorten/repository/queries/shorten.queries";
import { DbHelper } from "api/db/db.helper";

export class ShortenRepository {
  public static async createShortUrl(
    url: string
  ): Promise<IInsertShortUrlResult> {
    const urlNanoid = {
      url,
      nanoid: nanoid(NANO_ID_LENGTH),
    };
    const [shortUrlResult] = await DbHelper.runQuery(async (client) =>
      insertShortUrl.run({ urlNanoid }, client)
    );
    return shortUrlResult;
  }

  public static async getAllUrls(): Promise<IGetAllShortUrlsResult[]> {
    return DbHelper.runQuery(async (client) =>
      getAllShortUrls.run(null, client)
    );
  }

  public static async deleteUrl(id: number): Promise<void> {
    const idToDelete = {
      id,
    };
    await DbHelper.runQuery(async (client) =>
      deleteShortUrl.run({ idToDelete }, client)
    );
  }

  public static async getUrlByNanoid(
    nanoid: string
  ): Promise<IGetShortUrlByNanoidResult> {
    const nanoidToGet = {
      nanoid,
    };
    const [shortUrl] = await DbHelper.runQuery(async (client) =>
      getShortUrlByNanoid.run({ nanoidToGet }, client)
    );
    return shortUrl;
  }
}
