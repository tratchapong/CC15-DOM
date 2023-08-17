// DOM : Homework #1
// ตรวจสอบ username + password จาก input ทั้ง 2 ค่า
// ถ้า login ผ่าน ให้ขึ้นคำว่า "Login successful" เป็นสีเขียวที่ #output 
// ถ้า login ไม่ผ่าน ให้ขึ้นคำว่า "Invalid Login" เป็นสีแดงที่ #output

// challenge 1 : login ได้ 3 ครั้ง ถ้ายังไม่ผ่านให้ disabled ตัว input ทั้งหมด
// challenge 2 : ข้อความแจ้งผลการ login ที่ #output ให้ขึ้นแค่ 3 seconds

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
let count = 0

const checkLogin = (username, password) => {
    let userOk = users.find( el => el.name === username)
    if(!userOk) 
        return false
    let pwOk = users.find( el=> el.password === password)
    if(!pwOk)
        return false
    return userOk
}

const flashMsg = (text) => {
    output.innerText=text
    setTimeout( ()=> {
        output.innerText = ''
    }, 3000)
}

const hdlSubmit = (e) => {
    e.preventDefault()
    count +=1
    let loginOk = checkLogin(inp1.value, inp2.value)
    if (loginOk) {
        output.style.color = 'lime' 
        flashMsg('Login Successful')
        count =0
    }
    else {
        output.style.color = 'red'
        flashMsg('Invalid login')
        if(count >= 3) {
            flashMsg('Locked!!!')
            loginForm.reset()
            for(let el of loginForm)
                el.setAttribute('disabled', '')
        }     
    }
}
 
loginForm.addEventListener('submit', hdlSubmit)
