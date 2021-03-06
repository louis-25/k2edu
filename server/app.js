import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
// import tweetsRouter from './router/tweets.js'
import authRouter from './router/auth.js'
import {config} from './config.js'

const app = express();

app.use(express.json()); // 이거 써줘야 json형식으로 데이터 받을 수 있음
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

// app.use('/tweets', tweetsRouter);
app.use('/auth', authRouter);

app.get('/', (req, res, next) => {
  console.log('get');
  res.send('hi')
})

//아무것도 처리하지 않은경우
app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(config.host.port);