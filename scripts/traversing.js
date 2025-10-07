// OGGI PARLIAMO DEL DOM TRAVERSING & DOM MANIPULATION
// Da oggi colleghiamo tutti i concetti sulle variabili, sugli oggetti, sulle
// funzioni e sui cicli ai documenti del browser!
// A cosa ci serve JS nella pagina? JS serve per fornire esperienze di navigazione
// dinamiche:
// - poter aggiungere o rimuovere elementi in una lista (lista della spesa)
// - aprire una pagina HTML che mostra sempre la data di oggi
// - (genericamente) riempire una struttura "fissa" con dei contenuti personalizzati

// Per cominciare a fornire questo tipo di esperienze nelle nostre pagine WEB è
// necessario comprendere COME manipolare/inserire/rimuovere/cambiare i contenuti
// della pagina una volta caricata!
// Questo processo è diviso in DUE FASI:
// - 1) DOM TRAVERSING ("attraversamento del DOM", ricerca degli elementi con cui interagire)
// - 2) DOM MANIPULATION ("manipolazione del DOM", trasformazione degli elementi)

// ------
// 1) DOM TRAVERSING (selezione degli elementi nella pagina in JS)
// vediamo le principali tecniche che possiamo utilizzare per questo scopo:
console.log(document)
// document è il cuore del DOM. Rappresenta il documento, ovvero la pagina HTML
// che si è caricata nel browser. Tutte le nostre tecniche di "individuazione" degli
// elementi partiranno proprio da lui.

// come selezioniamo gli elementi nel document?
// a) tramite l'ID dell'elemento
const h1 = document.getElementById('main-title')
console.log('TITOLO DELLA PAGINA', h1)
const footerParagraph = document.getElementById('copyright')
console.log('FOOTER COPYRIGHT', footerParagraph)
const notFound = document.getElementById('non-esisto') // null

// b) tramite la classe degli elementi
const paragraphs = document.getElementsByClassName('content-section')
console.log('paragraphs', paragraphs)
// getElementsByClassNames() torna una COLLEZIONE DI ELEMENTI HTML (HTMLCollection)
// una specie di "array" contenente TUTTI gli elementi trovati con quella classe
// come in un array questa HTMLCollection ha una length, che ci fornisce il numero
// di elementi trovati, e questi elementi sono identificati tramite una POSIZIONE
// che parte da 0 (esattamente come gli array).
// nel nostro caso i 3 paragrafi sono: paragraphs[0], paragraphs[1] e paragraphs[2]

const titles = document.getElementsByClassName('second-title')
console.log('TITLE 0', titles[0])
console.log('TITLE 1', titles[1]) // undefined, title ha lunghezza 1!

const fabio = [5, 3]
fabio[0] // 5
fabio[1] // 3
fabio[2] // undefined

// HTMLCollection non è un vero e proprio array perchè nonostante sia ciclabile
// con un for non è dotato di metodi come push, pop, forEach, map, filter, etc.

// se vi serve assolutamente il forEach o il map potete "convertire" una HTMLCollection
// a un vero e proprio array così:
const realArray = [...titles]
console.log(realArray)

// c) tramite il nome del tag degli elementi
const allTheParagraphs = document.getElementsByTagName('p')
console.log('tutti i paragrafi', allTheParagraphs)
// getElementsByTagName torna anche lui SEMPRE una HTMLCollection
// stesso discorso di prima, è esplorabile con un for perchè tutti gli elementi
// sono dotati di indici (da 0 fino a length-1); opzionalmente se vi servono
// tecniche avanzate (map, filter) potete trasformarlo in un vero e proprio array
// come nell'esempio precedente

// d) tramite un selettore CSS
// si può usare document.querySelector() per recuperare degli elementi particolarmente
// difficili da selezionare altrimenti
const pInsideMain = document.querySelector('main p')
// querySelector torna un riferimento preciso all'elemento cercato oppure, in caso
// di elemento NON trovato, torna null
// pInsideMain è IL PRIMO ELEMENTO PARAGRAFO TROVATO DENTRO UN MAIN

// e) tramite un selettore CSS multiplo
const allPInsideMain = document.querySelectorAll('main p')
// querySelectorAll torna SEMPRE una NodeList, cioè una struttura iterabile
// sempre simile ad un array contenente i risultati richiesti.
// in caso di NESSUN risultato trovato, viene tornata una NodeList vuota.
// allPInsideMain è una NodeList, una struttura iterabile simile ad un array
// dotata di lunghezza e dove ogni elemento è caratterizzato da un indice, che
// parte da 0. È anche dotata del metodo forEach però NON contiene ad es. map
// filter, find etc.
// Anche in questo caso, se vi servissero i metodi avanzati degli array elencati
// sopra potete facilmente convertire una NodeList in un vero e proprio array
// tramite lo spread operator
const realArray2 = [...allPInsideMain]
console.log(realArray2)

// una volta trovato un riferimento ad un elemento, potete ulteriormente
// attraversare la struttura del DOM grazie alla sua natura gerarchica:
const thirdListItem = document.querySelector('header ul li:nth-of-type(3)')
// thirdListItem è un riferimento al terzo elemento della lista all'interno di header
// è un HTMLElement -> UN OGGETTO
console.log(thirdListItem.parentElement.parentElement) // è possibile RISALIRE
// la struttura gerarchica con la proprietà "parentElement" (senza abusarne)

// è anche possibile esplorare i FIGLI di un elemento:
const headerUl = document.getElementById('main-ul')
console.log(headerUl.children)
const stillTheThirdListItem = headerUl.children[2] // è sempre il terzo elemento della lista

// tutti i metodi descritti possono partire da "document" o da un punto intermedio
// della struttura HTML
headerUl.querySelector('li') // trova il PRIMO li all'interno della lista "main-ul"

// CLOSEST
// troviamo l'ancora "Bachelor" del quarto elemento di lista
const bachelorAnchor = document.querySelector('header ul a:nth-of-type(4)')
// ora vorrei risalire alla ul: sarebbe bachelorAnchor.parentElement.parentElement,
// però rischio a forza di concatenare "parentElement" di prendermi dei riferimenti
// "deboli", che oggi funzionano ma che magari in futuro si romperanno, perchè
// mettete mano inconsapevolmente alla struttura dei contenitore
//
// closest risale l'albero HTML fino a trovare un match con
// il selettore CSS che inserite al suo interno
bachelorAnchor.closest('ul') // ho appena trovato il tag <ul>, che era nonno/bisnonno
// etc. senza bisogno di risalire "le scale" a mano con i parentElement
