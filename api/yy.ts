import type { VercelRequest, VercelResponse } from '@vercel/node';
import createHomepageTemplate from '../views/index.js';

export default function handler(req: VercelRequest, res: VercelResponse) {
  return res.send(createHomepageTemplate());
}

// Импортируем необходимые модули и функции
// const { createHomepageTemplate } = require('../views/index.js');

// // Экспортируем функцию-обработчик для Vercel serverless функции
// module.exports = function handler(req, res) {
//     // Возвращаем ответ с созданным шаблоном главной страницы
//     return res.send(createHomepageTemplate());
// };