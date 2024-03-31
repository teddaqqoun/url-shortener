import { Client } from "pg";
import { PG_CLIENT_CONFIG } from "api/db/client";

export class DbHelper {
  public static async runQuery(query: (client: Client) => any): Promise<any> {
    const client = new Client(PG_CLIENT_CONFIG);
    await client.connect();
    const res = await query(client);
    await client.end();
    return res;
  }
}
