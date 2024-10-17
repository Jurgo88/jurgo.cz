// class MasonryLayout {
//     constructor(container, columns) {
//         this.container = document.querySelector(container);
//         this.columns = columns;
//         this.columnHeights = Array(columns).fill(0);
//         this.items = Array.from(this.container.children);
//         this.init();
//     }

//     init() {
//         this.container.style.display = 'grid';
//         this.container.style.gridTemplateColumns = `repeat(${this.columns}, 1fr)`;
//         this.items.forEach(item => {
//             const minHeight = Math.min(...this.columnHeights);
//             const columnIndex = this.columnHeights.indexOf(minHeight);
//             item.style.gridColumnStart = columnIndex + 1;
//             this.columnHeights[columnIndex] += item.offsetHeight;
//         });
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     new MasonryLayout('.masonry-container', 3);
// });

// import styles from './css/masonryLayout.module.css';
// import('@css/masonryLayout.css');
// import Masonry from 'masonry-layout';
// @import url('css/masonryLayout.css');


export function masonryLayout() {
    console.log("masonryLayout.js is working");
  
    // Čakaj, kým sa načítajú všetky zdroje (vrátane obrázkov)
    window.onload = () => {
      const container = document.querySelector('#masonry-container');
      const msnry = new Masonry(container, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        percentPosition: true,
        gutter: 20
      });
    };
  }
  