import { promises as fs } from 'fs';
import path from 'path';

export async function get({ request }) {
  const filePath = path.resolve('./src/data/cocktails.json');
  const json = await fs.readFile(filePath, 'utf-8');
  return new Response(json, {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
