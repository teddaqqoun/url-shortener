/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable("shorten", {
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    updatedAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    deletedAt: {
      type: "timestamp",
    },
    id: "id",
    url: {
      type: "text",
      notNull: true,
    },
    nanoid: {
      type: "varChar(30)",
      notNull: true,
      unique: true,
    },
  });
  pgm.createIndex("shorten", [{ name: "nanoid", unique: true }]);
};

exports.down = (pgm) => {};
