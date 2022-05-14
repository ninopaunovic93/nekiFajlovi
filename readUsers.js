import { korisnici } from "./korisnici.js"

const valuesObject = document.querySelector('#valueObject')

korisnici.forEach(element => {
    
    let usersDiv  = document.createElement('div')
    usersDiv.setAttribute('id', 'stylingUsers')

    let NameUser = document.createElement('p')
    NameUser.textContent = element.name
    usersDiv.appendChild(NameUser)

    let lastnameUser = document.createElement('p')
    lastnameUser.textContent = element.lastname
    usersDiv.appendChild(lastnameUser)

    let dateBirth = document.createElement('p')
    dateBirth.textContent = element.dateOfBirth
    usersDiv.appendChild(dateBirth)

    let phone = document.createElement('p')
    phone.textContent = element.phoneNumber
    usersDiv.appendChild(phone)

    let username = document.createElement('p')
    username.textContent = element.user
    usersDiv.appendChild(username)

    let email = document.createElement('p')
    email.textContent = element.email
    usersDiv.appendChild(email)

    let pass = document.createElement('p')
    pass.textContent = element.pass
    usersDiv.appendChild(pass)
    
    valuesObject.append(usersDiv)
    // NameUser, lastnameUser, dateBirth, phone, username, email, pass
});