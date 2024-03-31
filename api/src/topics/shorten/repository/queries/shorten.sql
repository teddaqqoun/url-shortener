/*
  @name InsertShortUrl
  @param urlNanoid -> (url, nanoid)
*/
INSERT INTO shorten (url, nanoid) VALUES :urlNanoid RETURNING *;

/*
  @name GetAllShortUrls
*/

SELECT * FROM shorten WHERE "deletedAt" is null;

/*
  @name DeleteShortUrl
  @param idToDelete -> (id)
*/

UPDATE shorten SET "deletedAt" = NOW() WHERE id=:idToDelete;

/*
  @name GetShortUrlByNanoid
  @param nanoidToGet -> (nanoid)
*/

SELECT * FROM shorten WHERE nanoid=:nanoidToGet;