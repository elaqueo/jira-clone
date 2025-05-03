import { Hono } from 'hono';
import { handle } from 'hono/vercel';

const app = new Hono().basePath('/api');

app.get('/hello', (c) => {
  return c.text('Hello, world!');
});

app.get('/hello/:name', (c) => {
  const { name } = c.req.param();
  return c.json({ hello: name });
});

export const GET = handle(app);
