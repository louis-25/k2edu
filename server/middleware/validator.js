import { validationResult } from 'express-validator';

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next(); //에러가 없다면 다음 미들웨어로 넘어간다
  }
  return res.status(400).json({ message: errors.array()[0].msg });
};
