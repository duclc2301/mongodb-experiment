import type { Application, Request, Response } from 'express';
import express from 'express';

const app: Application = express();

const PORT = process.env.PORT || 8000;

app.get('/', async (_request: Request, response: Response): Promise<void> => {
  response.send('Hello world!');
});

app.listen(PORT, (): void => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
