import type { VercelRequest, VercelResponse } from '@vercel/node';
import createHomepageTemplate from '../views/index.js';

export default function handler(req: VercelRequest, res: VercelResponse) {
  return res.send(createHomepageTemplate());
}