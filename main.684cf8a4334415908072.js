!function(){"use strict";var e={9363:function(e,t,n){var r=function(e){return Array.apply.apply(Array,[null].concat([{length:e}])).map(Number.call,Number)},a=function(e,t){return e/100*t},i=function(e){return String(e).replace(/(\d)(?=(\d{3})+(\D|$))/g,"$1 ")},s=function(e,t){e.addEventListener("touchstart",(function(){e.classList.add("".concat(t,"_touch"))})),e.addEventListener("touchend",(function(){e.classList.remove("".concat(t,"_touch"))}))},o=n(411),c=n.n(o),l=["если складывать под матрас","если откладывать на депозит","если инвестировать в ПИФ «Альфа&#8209;Капитала»"],u=["В этом мало смысла — такие накопления «съедает» инфляция",'Ставки по вкладам различны в разных банках и зависят от многих факторов, \n  в частности, от ключевой ставки Центрального банка РФ\n  <a class="hint-link" href="https://vc.ru/promo/76505-alfa-kapital-yuridicheskaya-informaciya?ea=678fa71362d1b64dda32a1e6c54730abd442d756633f11fa1548bfcc17e7bfb5#1" target="_blank">¹</a>.','Вы становитесь инвестором набора компаний, который определяют профессиональные управляющие.<br> \n  Они решают, когда покупать и продавать ценные бумаги, чтобы обеспечить инвестиционный доход.<br>\n  Купить или продать паи фонда можно в любой момент\n  <a class="hint-link" href="https://vc.ru/promo/76505-alfa-kapital-yuridicheskaya-informaciya?ea=678fa71362d1b64dda32a1e6c54730abd442d756633f11fa1548bfcc17e7bfb5#2" target="_blank">²</a>.'],p=[{percent:"50%",text:"читателей откладывают больше 1000 ₽ в месяц"},{percent:"7%",text:"читателей откладывают больше 10 000 ₽ в месяц"}],d='<summary class="spoiler-header">А как в среднем у читателей vc.ru?<span class="spoiler-header__image"></span></summary>',f='Свернуть<span class="spoiler-header__image"></span>',h=15240;function v(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.element="",this.text=n,this.hintElements=[],this.textLeft=0}var t,n,r;return t=e,(n=[{key:"render",value:function(){var e,t;return this.container.insertAdjacentHTML("beforeend",(e=this.text,t='<div class="hint__text"><p>'.concat(e,"</p></div>"),'<div class="hint">'.concat(t).concat('<button class="hint__button">?</button>',"</div>"))),this.element=this.container.querySelector(".hint"),this.element}},{key:"closeAllHint",value:function(e){this.hintElements=0===this.hintElements.length?v(e.querySelectorAll(".hint__text")):this.hintElements,this.hintElements.forEach((function(e){e.classList.remove("hint__text_show")}))}},{key:"addHandlers",value:function(e,t){var n=this,r=this.element.querySelector(".hint__button"),a=this.element.querySelector(".hint__text"),i=document.querySelector("#app");r.addEventListener("click",(function(e){var t=e.target;a.classList.add("hint__text_show"),a.style.top=function(e){var t=a.offsetHeight,n=e.offsetTop;return"".concat(n-t-17,"px")}(t),a.style.left=function(e){var t=e.offsetLeft,n=i.offsetLeft+i.offsetWidth,r=a.offsetWidth;return"".concat(n<r+t?n-r-15:t-117,"px")}(t),a.style.setProperty("--corner-left",function(e){var t=a.offsetLeft,n=e.offsetLeft;return"".concat(n-t+3,"px")}(t))})),t||(document.addEventListener("click",(function(){n.closeAllHint(e)}),!0),window.addEventListener("resize",(function(){n.closeAllHint(e)}),!0)),s(r,"hint__button")}},{key:"remove",value:function(){this.container.removeChild(this.element)}}])&&y(t.prototype,n),r&&y(t,r),e}();function g(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n,r,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.value=Number(n),this.description=r,this.index=a,this.element="",this.monthsInYear=12,this.years=3,this.percentInDeposit=6.98,this.percentInInvestment=71.21}var t,n,s;return t=e,(n=[{key:"render",value:function(){this.container.insertAdjacentHTML("beforeend",function(e,t,n,a){var s=r(e),o=2===a?"до ~":"~",c='<div class="coins-container">\n      '.concat(s.map((function(){return'\n      <div class="coins-container-wrapper">\n      <div class="coins-container-wrapper__coin"></div>\n      </div>'})).join(""),"\n  </div>"),l='<div class="cash__deposit">\n    <p>\n      '.concat(o).concat(i(t)," ₽\n    </p>\n  </div>"),u='<div class="cash__description"><p>'.concat(n,"</p></div>");return'<div class="cash">'.concat(c).concat(l).concat(u,"</div>")}(this.countOfCoins,Math.floor(this.deposit),this.description,this.index)),this.element=g(this.container.querySelectorAll(".cash"))[this.index];var e=this.element.querySelector(".cash__description > p"),t=new b(e,u[this.index]);return t.render(),t.addHandlers(this.container,this.index),this.element}},{key:"remove",value:function(){this.container.removeChild(this.element)}},{key:"maxValue",get:function(){var e=this.value*this.monthsInYear*this.years;return e+a(e,this.percentInInvestment)}},{key:"deposit",get:function(){switch(this.index+1){case 2:return function(e,t,n){for(var r=0,i=0;i<t;i+=1)r=r+e+a(r+e,n);return r}(this.value*this.monthsInYear,this.years,this.percentInDeposit);case 3:return this.maxValue;default:return this.value*this.monthsInYear*3}}},{key:"countOfCoins",get:function(){var e=this.maxValue/10;return Math.ceil(this.deposit/e)}}])&&k(t.prototype,n),s&&k(t,s),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.value=Number(n),this.maxValue=5e4,this.element="",this.percent=[50,7],this.averageSumOfAllUsersImages=["very-small","small","medium","large","very-large"]}var t,n,r;return t=e,r=[{key:"getIndexOfImage",value:function(){return 1}}],(n=[{key:"render",value:function(){return this.container.insertAdjacentHTML("beforeend",function(e,t,n,r){var a='<div class="spoiler-element__stash-image spoiler-element__stash-image_'.concat(t,'">~ ').concat(e," ₽</div>"),i='<div class="spoiler-element">\n    '.concat(a,"\n    ").concat('<p class="spoiler-element__stash-text">в среднем откладывают читатели vc.ru<p>',"\n  </div>"),s='<p class="spoiler-element__stash-percent">'.concat(n.percent,"<p>"),o='<p class="spoiler-element__stash-text">'.concat(n.text,"<p>"),c='<div class="spoiler-element">\n    '.concat('<svg class="progress-ring progress-ring-first" width="140" height="140">\n    <circle class="progress-ring__circle" stroke="#fff" stroke-width="15" fill="transparent" r="45" cx="70" cy="70"></circle>\n    <circle class="progress-ring__circle-progress" stroke="#fe4d4a" stroke-width="30" fill="transparent" r="52" cx="70" cy="70"></circle>\n  </svg>',"\n    ").concat(s,"\n    ").concat(o,"\n  </div>"),l='<p class="spoiler-element__stash-percent">'.concat(r.percent,"<p>"),u='<p class="spoiler-element__stash-text">'.concat(r.text,"<p>"),p='<div class="spoiler-element">\n    '.concat('<svg class="progress-ring progress-ring-second" width="140" height="140">\n    <circle class="progress-ring__circle" stroke="#fff" stroke-width="15" fill="transparent" r="45" cx="70" cy="70"></circle>\n    <circle class="progress-ring__circle-progress" stroke="#fe4d4a" stroke-width="30" fill="transparent" r="52" cx="70" cy="70"></circle>\n  </svg>',"\n    ").concat(l,"\n    ").concat(u,"\n  </div>");return'<details class="spoiler">'.concat('<summary class="spoiler-header">А как в среднем у читателей vc.ru?<span class="spoiler-header__image"></span></summary>').concat(c).concat(p).concat(i,"</details>")}(i(h),this.averageSumOfAllUsersImages[e.getIndexOfImage()],p[0],p[1])),this.element=this.container.querySelector(".spoiler"),this.element}},{key:"addHandlers",value:function(){var e=this,t=this.element.querySelector(".spoiler-header"),n=this.element.querySelector(".progress-ring-first > .progress-ring__circle-progress"),r=this.element.querySelector(".progress-ring-second > .progress-ring__circle-progress"),a=2*n.r.baseVal.value*Math.PI,i=function(e){var t=e.style;t.strokeDasharray="".concat(a," ").concat(a),t.strokeDashoffset="".concat(a)};i(n),i(r);var s=function(e,t){var n=e.style,r=a-t/100*a;n.strokeDashoffset=r};t.addEventListener("click",(function(a){a.preventDefault(),e.element.classList.contains("spoiler_open")?(e.element.classList.remove("spoiler_open"),e.element.removeAttribute("open"),t.innerHTML=d,setTimeout(s,1,n,0),setTimeout(s,1,r,0)):(e.element.classList.add("spoiler_open"),e.element.setAttribute("open","open"),t.innerHTML=f,setTimeout(s,1,n,e.percent[0]),setTimeout(s,1,r,e.percent[1]),e.element.scrollIntoView({behavior:"smooth"}))}))}},{key:"remove",value:function(){this.container.removeChild(this.element)}}])&&x(t.prototype,n),r&&x(t,r),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.element=""}var t,n,a;return t=e,(n=[{key:"giveProgressInput",value:function(){var e=this.element.querySelector(".slider-progress");e.style.setProperty("--value",e.value),e.style.setProperty("--min",""===e.min?"0":e.min),e.style.setProperty("--max",""===e.max?"100":e.max),e.addEventListener("input",(function(){return e.style.setProperty("--value",e.value)}))}},{key:"render",value:function(){var e;return this.container.insertAdjacentHTML("beforeend",(e='<div class="input-range-wrapper">\n  '.concat('<div class="input-range-wrapper__bubble"></div>',"\n  ").concat('<input\n    min="0"\n    max="50000"\n    class="input-range-wrapper__input styled-slider slider-progress"\n    value="0"\n    type="range"\n  >',"\n  </div>"),'<div class="input-range">'.concat('<span class="input-range__min">0 ₽</span>').concat(e).concat('<span class="input-range__max">50 000 ₽</span>',"</div>"))),this.element=this.container.querySelector(".input-range"),this.giveProgressInput(),this.element}},{key:"addHandlers",value:function(){var e=this,t=this.element.querySelector(".input-range-wrapper__input"),n=this.element.querySelector(".input-range-wrapper__bubble");t.addEventListener("change",(function(a){var s=a.target,o=e.container.parentNode.querySelector(".end-block"),c=o.querySelector(".end-block__second-title > .money"),u=o.querySelector(".money-wrapper"),p=o.querySelector(".spoiler-wrapper"),d=s.value,f=r(3).map((function(e,t){return new w(u,d,l[t],t)})),h=new S(p,d);o.classList.add("end-block_show"),c.textContent=i(d),f.forEach((function(e){e.render()})),h.render(),h.addHandlers(),t.classList.add("input-range-wrapper__input_disabled"),n.classList.remove("input-range-wrapper__bubble_show"),o.scrollIntoView({behavior:"smooth"})})),t.addEventListener("input",(function(e){var t=e.target,r=t.valueAsNumber,a=t.max,i=t.offsetWidth,s="".concat(r/(a/(i-24))-22,"px");n.classList.add("input-range-wrapper__bubble_show"),n.textContent=r,n.style.setProperty("--bubble-left",s)}))}},{key:"remove",value:function(){this.container.removeChild(this.element)}}])&&L(t.prototype,n),a&&L(t,a),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.element=""}var t,n,r;return t=e,(n=[{key:"render",value:function(){var e,t,n;c().polyfill(),this.container.insertAdjacentHTML("beforeend",(e='<div class="start-block">\n    '.concat('<h1 class="start-block__first-title">Сколько денег вы откладываете в месяц?</h1>',"\n    ").concat('<p class="start-block__description">Ответьте и узнаете, сколько копят другие.</p>',"\n    ").concat('<div class="input-range-wrapper"></div>',"\n  </div>"),t='<div class="end-block-relocate">\n    '.concat('<p class="end-block-relocate__text">Как начать инвестировать?</p>',"\n    ").concat('<button class="end-block-relocate__button">Узнать?</button>',"\n  </div>"),n='<div class="end-block">\n    '.concat('<h1 class="end-block__second-title">Вы откладываете <span class="money"></span>&nbsp;₽ в месяц.<br> За три года вы бы заработали:</h1>',"\n    ").concat('<div class="money-wrapper"></div>',"\n    ").concat('<div class="spoiler-wrapper"></div>',"\n    ").concat(t,"\n  </div>"),'<div class="main-screen">'.concat(e).concat(n,"</div>"))),this.element=this.container.querySelector(".main-screen");var r=this.element.querySelector(".start-block"),a=new A(r);return a.render(),a.addHandlers(),this.addHandlers(),this.element}},{key:"addHandlers",value:function(){var e=this.element.querySelector(".end-block-relocate__button");e.addEventListener("click",(function(){window.open("https://alfabank.ru/make-money/investments/")})),s(e,"end-block-relocate__button")}},{key:"remove",value:function(){this.container.removeChild(this.element)}}])&&E(t.prototype,n),r&&E(t,r),e}();document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#app");e||((e=document.createElement("div")).id="app"),document.body.append(e),new I(e).render()}))}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.x=function(){},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0},t=[[1202,839],[9363,839]],r=function(){},a=function(a,i){for(var s,o,c=i[0],l=i[1],u=i[2],p=i[3],d=0,f=[];d<c.length;d++)o=c[d],n.o(e,o)&&e[o]&&f.push(e[o][0]),e[o]=0;for(s in l)n.o(l,s)&&(n.m[s]=l[s]);for(u&&u(n),a&&a(i);f.length;)f.shift()();return p&&t.push.apply(t,p),r()},i=self.webpackChunk=self.webpackChunk||[];function s(){for(var r,a=0;a<t.length;a++){for(var i=t[a],s=!0,o=1;o<i.length;o++){var c=i[o];0!==e[c]&&(s=!1)}s&&(t.splice(a--,1),r=n(n.s=i[0]))}return 0===t.length&&(n.x(),n.x=function(){}),r}i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i));var o=n.x;n.x=function(){return n.x=o||function(){},(r=s)()}}(),n.x()}();
//# sourceMappingURL=main.684cf8a4334415908072.js.map