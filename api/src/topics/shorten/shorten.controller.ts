import { Context } from "koa";
import { ShortenService } from "api/src/topics/shorten/shorten.service";

export class ShortenController {
  public static async createShortUrl(ctx: Context): Promise<void> {
    const shortUrl = await ShortenService.createShortUrl(ctx.request.body.url);
    ctx.body = { shortUrl };
    ctx.status = 201;
  }

  public static async getAllUrls(ctx: Context): Promise<void> {
    const shortUrls = await ShortenService.getAllUrls();
    ctx.body = shortUrls;
    ctx.status = 200;
  }

  public static async deleteUrl(ctx: Context): Promise<any> {
    const { id } = ctx.params;
    await ShortenService.deleteUrl(id);
    ctx.body = {
      message: `url of id ${id} is deleted`,
    };
    ctx.status = 202;
  }

  public static async getUrlByNanoid(ctx: Context): Promise<any> {
    const { nanoid } = ctx.params;
    const shortUrl = await ShortenService.getUrlByNanoid(nanoid);
    ctx.body = shortUrl;
    ctx.status = 200;
  }
}
