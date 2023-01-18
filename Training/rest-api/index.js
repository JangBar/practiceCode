import express from 'express';
import {typeCheck, checkPhone, getToken, sendTokenToSMS } from "./phone.js"; // export 가져오기


const app = express();
app.use(express.json()); // 추가된 코드

app.get('/boards', (req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
	const result = [
		{ number: 1, writer: "철수", title: "제목입니다~~", contents: "내용이에요!!!" },
    { number: 2, writer: "영희", title: "영희입니다~~", contents: "영희이에요!!!" },
    { number: 3, writer: "훈이", title: "훈이입니다~~", contents: "훈이이에요!!!" },
  ]

  // 2. 꺼내온 결과 응답 주기
  res.send(result);
});

app.post("/tokens/phone", (req, res) => {
  const myphone = req.body.qqq; 

  // 0. 휴대번호가 문자인지 숫자인지 확인하기
  const isValid1 = typeCheck(myphone);
  if (isValid1 === false){  res.send("인증실패!!!");return;} 


  // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
  const isValid2 = checkPhone(myphone);
  if (isValid2 === false) {res.send("인증실패!!!"); return;}

  // 2. 핸드폰 토큰 6자리 만들기
  const mytoken = getToken();

  // 3. 핸드폰번호에 토큰 전송하기
  sendTokenToSMS(myphone, mytoken);
  res.send("인증완료!!!");
});


app.listen(3000, () => {
  console.log("백엔드 API 서버가 켜졌어요!!!");
});