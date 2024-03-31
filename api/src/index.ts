import Koa from "koa";
import koaBody from "koa-body";
import cors from "@koa/cors";
import { apiRoutes } from "api/src/topics/routes";

const app = new Koa();
app.use(cors());
app.use(koaBody());
app.use(apiRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server ready http://localhost:${process.env.PORT}`);
});
