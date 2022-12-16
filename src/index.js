import {Modal} from './plugins/modal'

const modal = new Modal('#modal', {
  title: 'Modal title on JavaScript',
  data: `
    <p>JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.</p>
  `,
  footer: `
    <button class="btn" >ok</button>
    <button class="btn" >cancel</button>
  `
    
})

window.m = modal