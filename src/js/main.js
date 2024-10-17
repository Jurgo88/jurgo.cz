// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

// import './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

// import '../../node_modules/prismjs/themes/prism-tomorrow.css'; // Importuj CSS štýly
// import Prism from 'prismjs'; // Importuj Prism.js

// // Ak chceš načítať aj jazykové podporné súbory, môžeš to spraviť takto
// import 'prismjs/components/prism-javascript.min.js'; // Príklad pre JavaScript
// import 'prismjs/components/prism-html.min.js'; // Príklad pre HTML
// console.log(Prism.languages); // Vypíše všetky dostupné jazyky

import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { stickyNavbar } from './stickyNavbar.js';
import { masonryLayout } from './masonryLayout.js';
// import { createModal } from './modal.js';

console.log('main.js is working');

stickyNavbar();
// masonryLayout();
// createModal();

// document.getElementById("modalButton").addEventListener("click", function() {
//   createModal();
// });

// Navbar scroll effect

// document.addEventListener("scroll", function() {
//   const navbar = document.querySelector(".sticky-top");
//   const logo = document.querySelector(".logo");
//   const scrollThreshold = 150;
//   const buffer = 30; 
//   if (window.scrollY > scrollThreshold + buffer) {
//       navbar.classList.add("scrolled");
//   } else if (window.scrollY < scrollThreshold - buffer) {
//       navbar.classList.remove("scrolled");
//   }
// });
