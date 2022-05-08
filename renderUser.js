import { korisnici } from "./objekat.js"
import { divIspisKorisnika} from "./dom.js"

export const renderUser = () => {
    korisnici.forEach(korisnik => {
        const divKorisnik = document.createElement('div')
        divKorisnik.classList.add('korisnik')
    
        const pIme = document.createElement('p')
        pIme.textContent = korisnik.ime
    
        const pPrezime = document.createElement('p')
        pPrezime.textContent = korisnik.prezime
    
        const pGodine = document.createElement('p')
        pGodine.textContent = korisnik.godine
    
        const pZanimanje = document.createElement('p')
        pZanimanje.textContent = korisnik.zanimanje
    
        const pPlata = document.createElement('p')
        pPlata.textContent = korisnik.plata
    
        const buttonBrisiKorisnika = document.createElement('button')
        buttonBrisiKorisnika.textContent = 'Obrisi'
    
        buttonBrisiKorisnika.addEventListener('click', (e) => {
            // console.log(e);
            // divKorisnik.classList.add('hide')
            korisnici.splice(korisnici.indexOf(korisnik), 1)
            divIspisKorisnika.textContent = ''
            // console.log(korisnici)
            renderBase()
            renderUser()
        })
    
        divKorisnik.append(
            pIme,
            pPrezime,
            pGodine,
            pZanimanje,
            pPlata,
            buttonBrisiKorisnika
        )
    
        divIspisKorisnika.appendChild(divKorisnik)
    })
}