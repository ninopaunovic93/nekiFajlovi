import { korisnici } from "./korisnici.js"


const setPassForm = document.querySelector('#setPassF')
const emailFromForm = document.querySelector('#email')

setPassForm.addEventListener('submit', (e) => {
    e.preventDefault()

   
    if(emailFromForm.value == korisnici.email){
        alert('isti mail')
    }
    
})
