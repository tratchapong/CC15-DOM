// ตรวจสอบ username + password จาก input ถ้า login ผ่าน
// ให้ขึ้นคำว่า "Login successfully" ที่ #output
const users = [
    {name : 'Andy', password : '1234'},
    {name : 'Bobby', password : '1234'},
    {name : 'Candy', password : '1234'},
    {name : 'Danny', password : '1234'},
]

let inp1 = document.querySelector('#username')
let inp2 = document.querySelector('#password')
let loginForm = document.querySelector('#loginform')
let output = document.querySelector('.output')

const hdlSubmit = (e) => {
    e.preventDefault()
    // output.textContent = inp1.value + ' : ' + inp2.value
}
 
loginForm.addEventListener('submit', hdlSubmit)
