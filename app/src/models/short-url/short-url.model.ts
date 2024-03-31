export interface IShortUrl {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  id: number;
  nanoid: string;
  url: string;
}
