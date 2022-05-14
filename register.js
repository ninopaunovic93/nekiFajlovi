import { korisnici } from "./korisnici.js"

const registerForm = document.querySelector('#registerForm')
// const firstName = document.querySelector('#firstName')
// const lastName = document.querySelector('#lastName')
// const dateOfBirth = document.querySelector('#dateOfBirth')
// const phone = document.querySelector('#phone')
// const username = document.querySelector('#username')
// const email = document.querySelector('#email')

export const listOfUser = {
    name: "",
    lastname: "",
    dateOfBirth: "",
    phoneNumber: "",
    user: "",
    email: "",
    pass: ""
}

// const users = JSON.parse(localStorage.getItem('korisnici'))
// console.log(users)

registerForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const pass = document.querySelector('#pass')
    const confPass = document.querySelector('#confPass')

    if (firstName.value != "" &&
        lastName.value != "" &&
        dateOfBirth.value != "" &&
        phone.value != "" &&
        username.value != "" &&
        email.value != "" &&
        pass.value != "" &&
        confPass.value != "") {

        if (pass.value == confPass.value) {

            listOfUser.name = document.querySelector('#firstName').value
            listOfUser.lastname = document.querySelector('#lastName').value
            listOfUser.dateOfBirth = document.querySelector('#dateOfBirth').value
            listOfUser.phoneNumber = document.querySelector('#phone').value
            listOfUser.user = document.querySelector('#username').value
            listOfUser.email = document.querySelector('#email').value
            listOfUser.pass = document.querySelector('#pass').value



            korisnici.push(listOfUser);

            localStorage.setItem('korisnici', JSON.stringify(korisnici))
            // window.location.href = "userPage.html"


            return
        }
    }
    alert('your passwords is not corect ')

})


// console.log(korisnici);



