import Router from "koa-router";
import { RouterHelper } from "api/src/topics/shared/router.helper";
import { ShortenController } from "api/src/topics/shorten/shorten.controller";

const router = new Router({ prefix: "/shorten" });

router.get("/", RouterHelper.routeTo(ShortenController.getAllUrls));
router.post("/", RouterHelper.routeTo(ShortenController.createShortUrl));
router.get("/:nanoid", RouterHelper.routeTo(ShortenController.getUrlByNanoid));
router.delete("/:id", RouterHelper.routeTo(ShortenController.deleteUrl));

export const shortenRoutes = router.routes();
