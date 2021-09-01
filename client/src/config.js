import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.REACT_APP_BASE_URL)

export const config = {
  http: {
    baseURL: process.env.REACT_APP_BASE_URL
  }
}