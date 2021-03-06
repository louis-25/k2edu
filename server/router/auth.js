import express from 'express';
import {} from 'express-async-errors';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';
import * as authController from '../controller/auth.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

const validateCredential = [
  body('id')
    .trim()
    .notEmpty()
    .isLength({ min:2 })
    .withMessage('아이디는 최소 2글자 이상 써주세요'),
  body('password')
    .trim()    
    .isLength({ min:5 })
    .withMessage('비밀번호는 최소 5글자 이상 써주세요'),
  validate,
];

const validateSignup = [
  ...validateCredential,
  body('name').notEmpty().withMessage('이름이 비어있습니다'),  
  body('email').isEmail().normalizeEmail().withMessage('이메일 형식이 틀립니다'),  
  validate,
  // body('url')
  //   .isURL()
  //   .withMessage('invalid URL')
  //   .optional({ nullable: true, checkFalsy: true }),  
];
router.post('/signup', validateSignup, authController.signup);

router.post('/login', authController.login);

// isAuth는 로그인한 상태만 접근가능
router.get('/me', isAuth, authController.me);

export default router;
