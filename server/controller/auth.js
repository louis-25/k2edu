import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {} from 'express-async-errors';
import * as userRepository from '../data/auth.js';
import {config} from '../config.js';

// TODO: Make it secure!
const jwtSecretKey = config.jwt.secretKey;
const jwtExpiresSec = config.jwt.expiresInSec;
const bcryptSaltRounds = config.bcrypt.saltRounds;

export async function signup(req, res) {
  console.log('req ',req.body)
  const { id, email, password, confirmPassword, name } = req.body;
  const found = await userRepository.findById(id);
  if (found) {
    return res.status(409).json({ message: `${id} 는 이미 사용중 입니다` });
  }
  if (password != confirmPassword) {
    console.log('password ', password)
    console.log('confirm ',confirmPassword)
    return res.status(409).json({ message: `비밀번호가 일치하지 않습니다 ` });
  }
  const hashed = await bcrypt.hash(password, bcryptSaltRounds); // 비밀번호 암호화
  const userId = await userRepository.createUser({
    id,
    email,
    password: hashed,
    name,
  });
  const token = createJwtToken(userId); // jwt토큰 생성 -> client에 저장
  res.status(201).json({ token, id });
}

export async function login(req, res) {
  console.log('req.body ',req.body);
  const { id, password } = req.body;
  const user = await userRepository.findById(id);
  if (!user) {
    return res.status(401).json({ message: '아이디 혹은 비밀번호가 틀렸습니다' });
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: '아이디 혹은 비밀번호가 틀렸습니다' });
  }
  const token = createJwtToken(user.id);
  res.status(200).json({ token, id });
}

function createJwtToken(id) {
  //jwtExpiresSec 동안 id의 인증 정보가 유지된다 
  //-> client에서 localStorage에 저장하여 사용
  return jwt.sign({ id }, jwtSecretKey, { expiresIn: jwtExpiresSec });
}

export async function me(req, res, next) {
  const user = await userRepository.findById(req.userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json({ token: req.token, username: user.username });
}
