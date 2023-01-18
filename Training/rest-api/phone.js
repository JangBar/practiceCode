export function typeCheck(myphone){
  
  let str;
  for(let a=0;a<myphone.length;a++){

    let num = Number(myphone[a])

    switch(num){
      case 0: case 1: case 2: case 3:  case 4: case 5: case 6: case 7: case 8: case 9: str =1; break;
      default:  str=0; break;
    }
    
    if(str===0){
      console.log("문자가 포함되어있습니다")
      return false;
    }
  }
}

export function checkPhone(myphone){

  if(myphone.length < 10 || myphone.length > 11){
      console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!")
      return false
  } else {
      return true
  }
}

export function getToken(){
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
  console.log(result)
  return result
}

export function sendTokenToSMS(myphone, result){
  console.log(myphone + "번호로 인증번호 " + result + "를 전송합니다.")
}