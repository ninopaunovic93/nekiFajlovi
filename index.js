import { korisnici } from "./korisnici.js"

const userName = document.querySelector('#user')
const password = document.querySelector('#pass')
const forma = document.querySelector('form')
const users =  JSON.parse(localStorage.getItem('korisnici'))

forma.addEventListener('submit', (event) => {
    event.preventDefault()

    if(userName.value =='admin' && password.value == 'admin') {
        window.location.href = "admin.html";
        return   
    }

    let ifExist = false
    
    users.forEach(userOne => {

        if (userOne.user === userName.value) {

            if (userOne.pass === password.value) {
                ifExist = true
                window.location.href = "userPage.html"
            }
            else {
                alert('username ili password nisu tacni')
            }
        }
    })
})

