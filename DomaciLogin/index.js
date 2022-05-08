import { korisnici } from "./korisnici.js"

// const loginBtn = document.querySelector('#submit')
const userName = document.querySelector('#user')
const password = document.querySelector('#pass')
const forma = document.querySelector('form')

forma.addEventListener('submit', (event) => {
    event.preventDefault()

    let postoji = false

    korisnici.forEach(korisnik => {

        // console.log(korisnik)
        // console.log(korisnik.user)

        if (korisnik.user === userName.value) {


            if (korisnik.pass === password.value) {
                postoji = true
                alert('ulogovali ste se ')
            }

        }

    })
    alert('username ili password nisu tacni')
})