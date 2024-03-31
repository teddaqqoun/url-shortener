import Router from "@koa/router";
import { shortenRoutes } from "api/src/topics/shorten/shorten.router";

const router = new Router();

router.use(shortenRoutes);

export const apiRoutes = router.routes();
