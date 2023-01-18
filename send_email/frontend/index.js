let sendEmail =()=>{

  let myEmail = document.getElementById("myEmail").value;

    axios.post('http://localhost:3000/sendMyEmail', {
            myEmail
          })
          .then((res) => {
            console.log(res);
          });
}
