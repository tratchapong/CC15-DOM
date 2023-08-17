// DOM : Homework #1
// ตรวจสอบ username + password จาก input กับข้อมูล users
// ถ้า login ผ่าน ให้ขึ้นคำว่า "Login successful" เป็นสีเขียวที่ #output 
// ถ้า login ไม่ผ่าน ให้ขึ้นคำว่า "Invalid Login" เป็นสีแดงที่ #output

// challenge 1 : login ได้ 3 ครั้ง ถ้ายังไม่ผ่านให้ disabled ตัว input ทั้งหมด
// challenge 2 : ข้อความแจ้งผลการ login ที่ #output ให้แสดง 3 seconds แล้วหายไป

const users = [
    {name : 'Andy', password : '1234'},
    {name : 'Bobby', password : '2345'},
    {name : 'Candy', password : '1234'},
    {name : 'Danny', password : '1234'},
]

// ตัวแปร username , password : มาจาก input
// ตัวแปร founduser 
// ตัวแปร output
// ตัวแปร loginForm ใช้เพื่อรับ event : submit

// flow
// 1. check username with users(DB) => loop users[i].name มา check ทั้งหมด
//      userinput === user[i].name : ผ่านขั้น 1 
//    และเก็บ user object ที่เจอไว้ที่ foundUser
//    ถ้าไม่ตรงเลยให้ "invalid login" แล้วออกเลย

// 2. check password ว่าตรงกับ password ของ user นั้นหรือไม่
//     founduser.password === password : login ผ่าน
//    ถ้าไม่ตรงเลยให้ "invalid login" แล้วออกเลย
//    ถ้า password ตรงคือ login ผ่าน



let inp1 = document.querySelector('#username')
let inp2 = document.querySelector('#password')
let output = document.querySelector('.output')
let foundUser = null
let loginForm = document.querySelector('#loginform')

// inp1.value คือ username
// inp2.value คือ password

const hdlSubmit = (e) => {
    e.preventDefault()
    foundUser = users.find(el => el.name === inp1.value)
    if(!foundUser) {
        output.style.color = 'red'
        output.innerText = 'Invalid login'
        return
    } 
    if(foundUser.password !== inp2.value) {
        output.style.color = 'red'
        output.innerText = 'Invalid login'
        return
    }
    output.style.color = 'green'
    output.innerText = 'Login Successful'
}



loginForm.addEventListener('submit', hdlSubmit)

// ---------------------------------------------------

// let inp1 = document.querySelector('#username')
// let inp2 = document.querySelector('#password')
// let loginForm = document.querySelector('#loginform')
// let output = document.querySelector('.output')

// const checkLogin = (username, password) => {
    
// }

// const hdlSubmit = (e) => {
//     e.preventDefault()
//     // output.textContent = inp1.value + ' : ' + inp2.value

// }
 
// loginForm.addEventListener('submit', hdlSubmit)
