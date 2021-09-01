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
    .isLength({ min:5 })
    .withMessage('username should be at least 5 characters'),
  body('password')
    .trim()    
    .isLength({ min:5 })
    .withMessage('password should be at least 5 characters'),
  validate,
];

const validateSignup = [
  ...validateCredential,
  body('name').notEmpty().withMessage('name is missing'),  
  body('email').isEmail().normalizeEmail().withMessage('invalid email'),
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
