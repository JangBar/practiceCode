import nodemailer from 'nodemailer';
import 'dotenv/config'


export function getMyEmail(email){
  const mytemplate = `
  <html>
      <body>
         <h1>${email}님 가입을 환영합니다!!!</h1>
      </body>
  </html>
`
return mytemplate;
}

export async function sendMy(SignupEmail,mytemplate){

const EMAIL_PASS = process.env.EMAIL_PASS
const EMAIL_SENDER = process.env.EMAIL_SENDER
const EMAIL_USER = process.env.EMAIL_USER

  const transporter = nodemailer.createTransport({
      service:"gmail",
      auth: {
        user:EMAIL_USER,
        pass:EMAIL_PASS

      }
    })   
      const res = await transporter.sendMail({
      from: EMAIL_SENDER,
      to: SignupEmail,
      subject:"  가입축하합니다",
      html: mytemplate
    })
      
        console.log(res)    
  // console.log(mytemplate);
}