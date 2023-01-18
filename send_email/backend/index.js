import cors from 'cors';
import express from 'express';
import {getMyEmail,sendMy} from './myEmail.js';

const app = express()
app.use(cors()); // 추가된 부분
app.use(express.json());

app.post('/sendMyEmail', (req, res) => {
  
  let Email =req.body.myEmail;
  let result = getMyEmail(Email);

  sendMy(Email,result)
  res.send("이메일 전송완료")
})

app.listen(3000, () => {
  console.log("백엔드 API 서버가 켜졌어요!!!")
})