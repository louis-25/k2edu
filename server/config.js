import dotenv from 'dotenv';
dotenv.config();

// function required(key, defaultValue = undefined) {
//   const value = process.env[key] || defaultValue;
//   if(value == null) {
//     throw new Error(`Key ${key} is undefined`)
//   }
//   return value
// }

// .env에서 받아오는 값은 모두 String이기 때문에 숫자는 형변환하여 사용할것 !!
export const config = {
  jwt: {
    secretKey: process.env.JWT_SECRET,
    expiresInSec: parseInt(process.env.JWT_EXPIRES_SEC),
  },
  bcrypt: {
    saltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS),
  },
  host: {
    port: parseInt(process.env.HOST_PORT)
  }
}