export class RouterHelper {
  public static routeTo(controller) {
    return async (ctx, next) => {
      await Promise.resolve(controller(ctx, next)).catch((e) =>
        RouterHelper.errorHandler(ctx, e, next)
      );
    };
  }

  public static errorHandler(ctx, error, next) {
    ctx.status = 500;
    ctx.body = { msg: error.message };
    next();
  }
}
