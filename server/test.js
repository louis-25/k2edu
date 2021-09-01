import {config} from './config.js'
import bcrypt from 'bcrypt'

console.log('secreyKey ',config.jwt.secretKey)
console.log('secreyKey ',config.host.port)



const password = 'test1234';
// salt길이는 8~12가 적당
const hashed = bcrypt.hashSync(password, 10); //해쉬된 password -> DB저장
console.log(`password: ${password}, hashed: ${hashed}`)

const test = '$2b$10$CmfLf1ivyKI48dgYhm4U1OZ6XqFw.DgKiewOWxKnBZKmz5XGoNKxK'

const result = bcrypt.compareSync('test1234', test); // 해쉬값과 사용자 입력값 비교
console.log(result);