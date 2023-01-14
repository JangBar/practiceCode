// 1. 일반변수 전달하기
function zzz(aaa){ // const aaa = "사과"
  console.log(aaa) // 사과
}

zzz("사과")

// 2. 객체 전달하기
function zzz(aaa){ // const aaa = basket
  console.log(aaa) // 객체
  console.log(aaa.apple) // 3
  console.log(aaa.banana) // 10
}

const basket = {
  apple: 3,
  banana: 10
}
zzz(basket)