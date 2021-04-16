
window.addEventListener('beforeunload', sacuvajSveIzmene)
let posloviTabela = document.querySelector('#posloviTabela')
let dodajPosaoPrikaz = document.querySelector('#dodajPosaoPrikaz')
let prikaz = document.querySelectorAll('.prikaz')

let sviLinkovi = document.querySelectorAll('.nav-link')
for (let i = 0; i < sviLinkovi.length; i++) {
    sviLinkovi[i].addEventListener('click', prikazi)
}

function prikazi(e) {

    for (let i = 0; i < prikaz.length; i++) {
        prikaz[i].style.display = 'none'
    }

    if (e instanceof Event) {
        e.preventDefault();
        let id = `#${this.getAttribute('href')}`
        document.querySelector(id).style.display = 'block'
    } else {
        document.querySelector(e).style.display = 'block'
    }
}


//punjenje tabele
function napraviTabelu() {
    let podaci = ``
    for (let i = 0; i < baza.length; i++) {
        const posao = baza[i]
        podaci += `
        <tr>
            <td>${posao.id}</td>
            <td>${posao.ime}</td>
            <td>${posao.pozicija}</td>
            <td>${posao.email}</td>
            <td>${posao.tel}</td>
            <td><button data-id="${i}" class="btn izmeniBtn btn-success">Izmeni</button> </td>
            <td><button data-id="${i}" class="btn obrisiBtn btn-danger">Obrisi</button></td>
        </tr>
        `
    }

    posloviTabela.innerHTML = podaci

    //postavi event listener na dugmice
    let dugmiciIzmeni = document.querySelectorAll('.izmeniBtn')
    let dugmiciObrisi = document.querySelectorAll('.obrisiBtn')
    for (let i = 0; i < dugmiciIzmeni.length; i++) {
        dugmiciIzmeni[i].addEventListener('click', izmeni)
        dugmiciObrisi[i].addEventListener('click', obrisi)
    } //end postavi event listener na dugmice
} //end punjenje tabele
napraviTabelu()

//obrisi
function obrisi() {
    let id = this.getAttribute('data-id')
    //console.log(id)
    baza.splice(id, 1)
    napraviTabelu()
    prikazi('#posloviPrikaz')

}

let idInput = document.querySelector('[placeholder="id"]')
let imeInput = document.querySelector('[placeholder="ime"]')
let pozicijaInput = document.querySelector('[placeholder="pozicija"]')
let emailInput = document.querySelector('[placeholder="email"]')
let telInput = document.querySelector('[placeholder="tel"]')
let dodajDugme = document.querySelector('#dodaj')

dodajDugme.addEventListener('click', sacuvaj)
//dodavanje
function sacuvaj() {
    const noviPosao = {
        id: idInput.value,
        ime: imeInput.value,
        pozicija: pozicijaInput.value,
        email: emailInput.value,
        tel: telInput.value
    }

    idInput.value = ''
    imeInput.value = ''
    pozicijaInput.value = ''
    emailInput.value = ''
    telInput.value = ''
    baza.push(noviPosao)
    napraviTabelu()
    prikazi('#posloviPrikaz')
}

let izmeniDugme = document.querySelector('#izmeni')
let izmeniId = document.querySelector('.izmeniId');
let izmeniIme = document.querySelector('.izmeniIme')
let izmeniPozicija = document.querySelector('.izmeniPozicija')
let izmeniEmail = document.querySelector('.izmeniEmail')
let izmeniTel = document.querySelector('.izmeniTel')
let id;
//izmeni
function izmeni(){
    id = this.getAttribute('data-id')
    let selektovaniPosao = baza[id]
    izmeniId.value = selektovaniPosao.id
    izmeniIme.value = selektovaniPosao.ime
    izmeniPozicija.value = selektovaniPosao.pozicija
    izmeniEmail.value = selektovaniPosao.email
    izmeniTel.value = selektovaniPosao.tel
    prikazi('#izmeniPosaoPrikaz')
}

izmeniDugme.addEventListener('click', sacuvajIzmenu)
function sacuvajIzmenu(){
    const izmenjenPosao = {
        id: izmeniId.value,
        ime: izmeniIme.value,
        pozicija: izmeniPozicija.value,
        email: izmeniEmail.value,
        tel: izmeniTel.value
    }

    baza[id] = izmenjenPosao
    napraviTabelu()
    prikazi('#posloviPrikaz')
}

function sacuvajSveIzmene(){
    localStorage.baza = JSON.stringify(baza)
}
