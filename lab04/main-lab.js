// DOM : Homework #1
// ตรวจสอบ username + password จาก input กับข้อมูล users
// ถ้า login ผ่าน ให้ขึ้นคำว่า "Login successful" เป็นสีเขียวที่ #output 
// ถ้า login ไม่ผ่าน ให้ขึ้นคำว่า "Invalid Login" เป็นสีแดงที่ #output

// challenge 1 : login ได้ 3 ครั้ง ถ้ายังไม่ผ่านให้ disabled ตัว input ทั้งหมด
// challenge 2 : ข้อความแจ้งผลการ login ที่ #output ให้แสดง 3 seconds แล้วหายไป

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

const checkLogin = (username, password) => {
    
}

const hdlSubmit = (e) => {
    e.preventDefault()
    // output.textContent = inp1.value + ' : ' + inp2.value

}
 
loginForm.addEventListener('submit', hdlSubmit)
