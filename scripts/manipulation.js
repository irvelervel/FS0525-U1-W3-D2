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
