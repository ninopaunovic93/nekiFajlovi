import { divIspisKorisnika} from "./dom.js"
import { korisnici } from "./objekat.js"

export const renderBase = () => {
    const divHead = document.createElement('div')
    divHead.classList.add('korisnik')
    
    const pIme = document.createElement('p')
    pIme.textContent = 'IME'
    
    const pPrezime = document.createElement('p')
    pPrezime.textContent = 'PREZIME'
    
    const pGodine = document.createElement('p')
    pGodine.textContent = 'GODINE'
    
    const pZanimanje = document.createElement('p')
    pZanimanje.textContent = 'ZANIMANJE'
    
    const pPlata = document.createElement('p')
    pPlata.textContent = 'PLATA'
    
    divHead.append(
        pIme,
        pPrezime,
        pGodine,
        pZanimanje,
        pPlata
    )
    
    divIspisKorisnika.appendChild(divHead)
}