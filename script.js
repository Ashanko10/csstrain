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
}
function handlePassword(value) {
  console.log(value)
  data['password'] = value
}
function handleCPassword(value) {
  console.log("handle c password", value, data)
  if (data['password'] != value){
    let a = document.getElementById('confirm-password')
    a = "wrong password"
    console.log(a) 
    return   
  }
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
      elm.removeAttribute = "hidden"
      console.log("masuk sini")
      return
    }
  }
  console.log(data)
  localStorage.setItem("signup",JSON.stringify(data))
}