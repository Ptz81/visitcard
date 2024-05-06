// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();


//  document.addEventListener("DOMContentLoaded", function() {
//     const items = document.querySelectorAll(".portfolio__item");

//     items.forEach(function(item) {
//       item.addEventListener("click", function() {
//         items.forEach(function(item) {
//           item.classList.remove("active");
//         });
//         this.classList.add("active");
//       });
//     });
//   });
