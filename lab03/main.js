function btnClick() {
    alert(555)
}

function showInfo() {
    let h1=document.querySelector('h1')
    h1.innerText = "Info"
}


let btn = document.querySelector('button')
// btn.onclick = btnClick
let h2 = document.querySelector('h2')

btn.addEventListener('click', btnClick)
btn.addEventListener('click', showInfo)

h2.addEventListener('click', () => {
    btn.removeEventListener('click', btnClick)
})
