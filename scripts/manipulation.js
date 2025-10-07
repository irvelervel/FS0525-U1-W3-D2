// 2) DOM MANIPULATION
// La manipolazione del DOM consiste in una serie di tecniche (metodi e proprietà)
// che ci permettono di alterare il contenuto della pagina, elemento per elemento

// - cambiare un valore testuale di un elemento (innerText)
// recupero il riferimento all'H1 della pagina tramite il suo id:
const title = document.getElementById('main-title')
console.log('TITLE', title)
// ora ne cambiamo il CONTENUTO TESTUALE
console.log(title.innerText) // innerText rappresenta il contenuto testuale
// racchiuso tra il tag di apertura e il tag di chiusura dell'elemento
title.innerText = 'EPIBlog'

// - cambiare il contenuto HTML di un elemento (innerHTML)
// recupero il riferimento alla lista "secondary-menu"
const secondUl = document.getElementById('secondary-menu')
console.log(secondUl.innerHTML) // funziona in lettura
// ...e anche in scrittura!
// secondUl.innerHTML = `
//     <li>UNO</li>
//     <li>DUE</li>
//     <li>TRE</li>
// `
secondUl.innerHTML += `
    <li>Terzo elemento</li>
`

// - assegnare una proprietà CSS ad un elemento, con uno style inline
// seleziono il primo paragrafo con classe "content-section"
const par = document.getElementsByClassName('content-section')[0]
console.log('par', par)
// dopo aver selezionato un elemento, la proprietà da utilizzare per applicare
// uno stile inline si chiama "style"
par.style.color = 'red'
par.style.fontSize = '1.2em'
par.style.borderWidth = '2px'
par.style.borderStyle = 'solid'
par.style.borderColor = 'green'
// dentro style sono presenti TUTTE le proprietà CSS, ricordatevi che quelle
// che hanno un - nel nome (tipo font-size) vanno scritte in camelCase (fontSize)

// - assegniamo delle CLASSI CSS ad un elemento
// dopo aver selezionato un elemento HTML potete interagire con la sua proprietà
// classList
let contatti =
  document.getElementsByClassName('special')[
    document.getElementsByClassName('special').length - 1 // seleziono SEMPRE l'ultimo
  ]

// ho trovato una ancora, ma devo applicare la classe special a suo padre, l'li
contatti = contatti.parentElement // ora è diventato l'li

// applichiamo a contatti la classe "center" definita in CSS
contatti.classList.add('center') // applica con una classe text-align: center;

// - lavorare con gli ATTRIBUTI dei tag HTML
// recupero il link nel footer
const link = document.querySelector('footer a')
// con la proprietà "getAttribute" voi potete leggere il valore di un det. attributo
console.log(link.getAttribute('href'))

// con la proprietà "seAttribute" potete creare un attributo nuovo per un elemento
// diamo un "id" a questo link
link.setAttribute('id', 'footerLink')

// fin'adesso abbiamo operato su elementi PRESENTI nella pagina...
// ...ma con JS potete creare DA ZERO ELEMENTI NUOVI!

// per creare un elemento da 0, si utilizza un metodo su document che si chiama
// "createElement"

// creiamo da 0 una lista ordinata con 3 valori
// creo innanzitutto la ol
const newOl = document.createElement('ol') // <ol></ol>
// ora devo RIEMPIRE la newOl
newOl.innerHTML = `
  <li>Giallo</li>
  <li>Verde</li>
  <li>Rosso</li>
`

// <ol>
//   <li>Giallo</li>
//   <li>Verde</li>
//   <li>Rosso</li>
// </ol>

// una volta creato l'elemento da 0, bisogna INSERIRLO nella pagina
// ci sono tanti modi per inserire gli elementi DOVE VOLETE VOI!

// appendChild inserisce un elemento dentro un parent in ULTIMA POSIZIONE
// seleziono il main
const main = document.getElementsByTagName('main')[0]
main.appendChild(newOl)

const thirdSection = document.getElementById('third')

main.insertBefore(newOl, thirdSection)

// appendChild inserisce un elemento IN FONDO a quelli già presenti nel padre
const newLi = document.createElement('li') // <li></li>
newLi.innerText = 'NUOVO LINK' // <li>NUOVO LINK</li>
newLi.setAttribute('id', 'new-li') // <li id="new-li">NUOVO LINK</li>

// seleziono la lista ul padre
const mainUl = document.getElementById('main-ul') // riferimento alla ul padre
mainUl.appendChild(newLi)

// inseriamo il colore "Rosa" tra "Giallo" e "Verde"
const pinkLi = document.createElement('li') // <li></li>
pinkLi.innerText = 'Rosa' // <li>Rosa</li>

// newOl è l'elemento padre, utilizzo insertBefore per inserire "Rosa" prima di "Verde"
// troviamo l'elemento "Verde", il secondo <li> dentro l'unica <ol>
// querySelector
const green = document.querySelector('ol li:nth-of-type(2)') // riferimento al secondo li dentro la ol

// padre.insertBefore(nuovoElemento, elementoRiferimento)
newOl.insertBefore(pinkLi, green)

// ELIMINA UN ELEMENTO
// newOl.remove() // KABOOM

// ESERCIZI:
// metti in grassetto tutti gli <li> della lista dei colori (newOl)
const makeColorsBold = () => {
  // 1) recuperare gli elementi
  // li selezioniamo con il fatto che sono figli di una ol dentro il main
  const allTheLi = document.querySelectorAll('main ol li')
  console.log(allTheLi)
  // 2) manipolarli
  //   allTheLi.style.fontWeight = 'bold' // <-- NON FUNZIONERÀ, perchè è una NODELIST e
  // NON un elemento!
  //   for
  //   for (let i = 0; i < allTheLi.length; i++) {
  //     // abbiamo una i che andrà da 0 fino a 3
  //     allTheLi[i].style.fontWeight = 'bold'
  //   }

  // visto che querySelectorAll torna una NodeList è anche possibile utilizzare forEach
  //   allTheLi.forEach((li) => {
  //     li.style.fontWeight = 'bold'
  //   })
}

makeColorsBold()

// prendo i 3 h3 della pagina e li sottolineo
const underlineH3s = () => {
  // prendo tutti gli h3 della pagina
  const allTheH3 = document.getElementsByTagName('h3')
  // CICLO
  for (let i = 0; i < allTheH3.length; i++) {
    allTheH3[i].style.textDecoration = 'underline'
  }
}

underlineH3s()
