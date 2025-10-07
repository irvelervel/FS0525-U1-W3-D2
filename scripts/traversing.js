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

// b) tramite la classe degli elementi
const paragraphs = document.getElementsByClassName('content-section')
console.log('paragraphs', paragraphs)
// getElementsByClassNames() torna una COLLEZIONE DI ELEMENTI HTML (HTMLCollection)
// una specie di "array" contenente TUTTI gli elementi trovati con quella classe
// come in un array questa HTMLCollection ha una length, che ci fornisce il numero
// di elementi trovati, e questi elementi sono identificati tramite una POSIZIONE
// che parte da 0 (esattamente come gli array).
// nel nostro caso i 3 paragrafi sono: paragraphs[0], paragraphs[1] e paragraphs[2]

const title = document.getElementsByClassName('second-title')
console.log('TITLE 0', title[0])
console.log('TITLE 1', title[1]) // undefined, title ha lunghezza 1!

const fabio = [5, 3]
fabio[0] // 5
fabio[1] // 3
fabio[2] // undefined

// HTMLCollection non è un vero e proprio array perchè nonostante sia ciclabile
// con un for non è dotato di metodi come push, pop, forEach, map, filter, etc.
