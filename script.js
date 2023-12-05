console.log("script")
// document.addEventListener('DOMContentLoaded',function(){
//   let a = document.getElementById("email")
//   let b = a.value
//   console.log(b)
// })
const data = {
  email:"",
  username:"",
  password:"",
  birthday:"",
}

function handleEmail(value) {
  console.log(value)
  // document.getElementById("email").value = "wrong email"
  data['email'] = value
}
function handleUsername(value) {
  console.log(value)
  data['username'] = value
  return value
}
function handlePassword(value) {
  console.log(value)
  data['password'] = value
}
function handleCPassword(value) {
  console.log(value)
  if (data['password'] != value){
    document.getElementById('confirm-password') = 'password not same'
  }
  return value
}
function handleBirthday(value) {
  console.log(value)
  let curDate = new Date()
  data['birthday'] = value
}
function handleSubmit(){
  console.log("test klik")
  for (val in data){
    if(val == ""){
      console.log("masuk")
      let elm = document.querySelector("container-warning")
      elm.setAttribute =""
      console.log("masuk sini")
      return
    }
  }
  console.log(data)
  localStorage.setItem("signup",JSON.stringify(data))
}