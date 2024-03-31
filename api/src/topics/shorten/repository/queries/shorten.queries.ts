/** Types generated for queries found in "api/src/topics/shorten/repository/queries/shorten.sql" */
import { PreparedQuery } from "@pgtyped/runtime";

/** 'InsertShortUrl' parameters type */
export interface IInsertShortUrlParams {
  urlNanoid: {
    url: string | null | void;
    nanoid: string | null | void;
  };
}

/** 'InsertShortUrl' return type */
export interface IInsertShortUrlResult {
  createdAt: Date;
  deletedAt: Date | null;
  id: number;
  nanoid: string;
  updatedAt: Date;
  url: string;
}

/** 'InsertShortUrl' query type */
export interface IInsertShortUrlQuery {
  params: IInsertShortUrlParams;
  result: IInsertShortUrlResult;
}

const insertShortUrlIR: any = {
  usedParamSet: { urlNanoid: true },
  params: [
    {
      name: "urlNanoid",
      required: false,
      transform: {
        type: "pick_tuple",
        keys: [
          { name: "url", required: false },
          { name: "nanoid", required: false },
        ],
      },
      locs: [{ a: 41, b: 50 }],
    },
  ],
  statement: "INSERT INTO shorten (url, nanoid) VALUES :urlNanoid RETURNING *",
};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO shorten (url, nanoid) VALUES :urlNanoid RETURNING *
 * ```
 */
export const insertShortUrl = new PreparedQuery<
  IInsertShortUrlParams,
  IInsertShortUrlResult
>(insertShortUrlIR);

/** 'GetAllShortUrls' parameters type */
export type IGetAllShortUrlsParams = void;

/** 'GetAllShortUrls' return type */
export interface IGetAllShortUrlsResult {
  createdAt: Date;
  deletedAt: Date | null;
  id: number;
  nanoid: string;
  updatedAt: Date;
  url: string;
}

/** 'GetAllShortUrls' query type */
export interface IGetAllShortUrlsQuery {
  params: IGetAllShortUrlsParams;
  result: IGetAllShortUrlsResult;
}

const getAllShortUrlsIR: any = {
  usedParamSet: {},
  params: [],
  statement: 'SELECT * FROM shorten WHERE "deletedAt" is null',
};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM shorten WHERE "deletedAt" is null
 * ```
 */
export const getAllShortUrls = new PreparedQuery<
  IGetAllShortUrlsParams,
  IGetAllShortUrlsResult
>(getAllShortUrlsIR);

/** 'DeleteShortUrl' parameters type */
export interface IDeleteShortUrlParams {
  idToDelete: {
    id: number | null | void;
  };
}

/** 'DeleteShortUrl' return type */
export type IDeleteShortUrlResult = void;

/** 'DeleteShortUrl' query type */
export interface IDeleteShortUrlQuery {
  params: IDeleteShortUrlParams;
  result: IDeleteShortUrlResult;
}

const deleteShortUrlIR: any = {
  usedParamSet: { idToDelete: true },
  params: [
    {
      name: "idToDelete",
      required: false,
      transform: {
        type: "pick_tuple",
        keys: [{ name: "id", required: false }],
      },
      locs: [{ a: 48, b: 58 }],
    },
  ],
  statement: 'UPDATE shorten SET "deletedAt" = NOW() WHERE id=:idToDelete',
};

/**
 * Query generated from SQL:
 * ```
 * UPDATE shorten SET "deletedAt" = NOW() WHERE id=:idToDelete
 * ```
 */
export const deleteShortUrl = new PreparedQuery<
  IDeleteShortUrlParams,
  IDeleteShortUrlResult
>(deleteShortUrlIR);

/** 'GetShortUrlByNanoid' parameters type */
export interface IGetShortUrlByNanoidParams {
  nanoidToGet: {
    nanoid: string | null | void;
  };
}

/** 'GetShortUrlByNanoid' return type */
export interface IGetShortUrlByNanoidResult {
  createdAt: Date;
  deletedAt: Date | null;
  id: number;
  nanoid: string;
  updatedAt: Date;
  url: string;
}

/** 'GetShortUrlByNanoid' query type */
export interface IGetShortUrlByNanoidQuery {
  params: IGetShortUrlByNanoidParams;
  result: IGetShortUrlByNanoidResult;
}

const getShortUrlByNanoidIR: any = {
  usedParamSet: { nanoidToGet: true },
  params: [
    {
      name: "nanoidToGet",
      required: false,
      transform: {
        type: "pick_tuple",
        keys: [{ name: "nanoid", required: false }],
      },
      locs: [{ a: 35, b: 46 }],
    },
  ],
  statement: "SELECT * FROM shorten WHERE nanoid=:nanoidToGet",
};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM shorten WHERE nanoid=:nanoidToGet
 * ```
 */
export const getShortUrlByNanoid = new PreparedQuery<
  IGetShortUrlByNanoidParams,
  IGetShortUrlByNanoidResult
>(getShortUrlByNanoidIR);
