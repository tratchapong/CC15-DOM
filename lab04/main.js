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

let inp1 = document.querySelector('#username')
let inp2 = document.querySelector('#password')
let output = document.querySelector('.output')
let foundUser = null
let loginForm = document.querySelector('#loginform')
let counter = 0

// inp1.value คือ username
// inp2.value คือ password

// refactor function 
// กำหนด parameter กับ return
// param : username, password
// return : user object, false

const checkUser = (username, password) => {
    let resultUser = users.find(el => el.name === username)
    if(!resultUser) {
        return false
    } 
    if(resultUser.password !== password) {
        return false
    }
    return resultUser
}   

const hdlSubmit = (e) => {
    e.preventDefault()
    counter += 1

    foundUser = checkUser(inp1.value, inp2.value)
    if(foundUser) {
        output.style.color = 'green'
        output.style.opacity = '1'
        output.innerText = 'Login Successful'
    } else {
        output.style.color = 'red'
        output.style.opacity = '1'
        output.innerText = 'Invalid login'
        if(counter >= 3) {
            inp1.setAttribute('disabled', '')
            inp2.setAttribute('disabled', '')
            inp2.nextElementSibling.setAttribute('disabled', '')
            output.innerText = 'Locked !!'
        }
    }
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
