import type { CollectionOptions, Db } from 'mongodb';
import { MongoClient } from 'mongodb';

class MongoDB {
  private url: string = 'mongodb://localhost:27017';
  private dbName: string = 'test';
  private database!: Db;

  constructor() {
    const client = new MongoClient(this.url);
    client.connect(() => {
      console.log('Connected successfully to server');

      const database = client.db(this.dbName);
      this.database = database;
    });
  }

  public collection(name: string, options?: CollectionOptions) {
    return this.database.collection(name, options);
  }
}

export default new MongoDB();
