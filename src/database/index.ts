import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

console.log("arquivo database");

createConnection();