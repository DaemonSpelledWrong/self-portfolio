!function(n){var e={};function t(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return n[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)t.d(o,a,function(e){return n[e]}.bind(null,a));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=18)}([function(n,e,t){"use strict";var o,a={},i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}();function c(n,e,t){n=t.base?n+t.base:n,a[n]||(a[n]=[]);for(var o=0;o<e.length;o++){var i=e[o],r={css:i[1],media:i[2],sourceMap:i[3]},c=a[n];c[o]?c[o].updater(r):c.push({updater:h(r,t)})}for(var s=e.length;s<a[n].length;s++)a[n][s].updater();a[n].length=e.length,0===a[n].length&&delete a[n]}function s(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var a=t.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var i=r(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,d=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function u(n,e,t,o){var a=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=d(e,a);else{var i=document.createTextNode(a),r=n.childNodes;r[e]&&n.removeChild(r[e]),r.length?n.insertBefore(i,r[e]):n.appendChild(i)}}function m(n,e,t){var o=t.css,a=t.media,i=t.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var p=null,f=0;function h(n,e){var t,o,a;if(e.singleton){var i=f++;t=p||(p=s(e)),o=u.bind(null,t,i,!1),a=u.bind(null,t,i,!0)}else t=s(e),o=m.bind(null,t,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else a()}}n.exports=function(n,e,t){return(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i()),c(n,e,t),function(e){c(n,e||[],t)}}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var a=(r=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot).concat(n," */")}));return[t].concat(i).concat([a]).join("\n")}var r,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o=0;o<n.length;o++){var a=[].concat(n[o]);t&&(a[2]?a[2]="".concat(t," and ").concat(a[2]):a[2]=t),e.push(a)}},e}},function(n,e,t){var o=t(0),a=t(3);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1},r=(o("!!../../node_modules/css-loader/dist/cjs.js!./home.css",a,i),a.locals?a.locals:{});n.exports=r},function(n,e,t){var o=t(1),a=t(4),i=t(5);e=o(!1);var r=a(i);e.push([n.i,".home-content {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: center;\n  background-image: url("+r+");\n  background-size: cover;\n  background-position: center;\n  height: 85vh;\n  width: 100vw;\n}\n\n.home-greeting {\n  display: flex;\n  justify-content: center;\n  background-color: transparent;\n  color: #363D4F;\n  font-size: 3rem;\n  width: 100vw;\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background-color:rgba(152, 96, 84, 0.4);\n  border-radius: 1em;\n  font-size: 2em;\n  height: 30vh;\n  width: 80vw;\n}\n\n.navbar a:link {\n  text-decoration: none;\n  color: rgba(255, 255, 255, 1);\n}\n\n.navbar a:visited {\n  text-decoration: none;\n  color: rgba(255, 255, 255, 1);\n}\n\n.navbar a:hover {\n  text-decoration: underline;\n  color: black;\n}\n\n@media screen and (max-width: 1280px) {\n  .home-greeting{\n    display: none;\n  }\n\n  .navbar{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    background-color:rgba(152, 96, 84, 0.4);\n    border-radius: 1em;\n    font-size: 2em;\n    height: 30vh;\n    width: 80vw;\n  }\n}\n\n@media screen and (min-width: 1281px){\n  .home-greeting{\n    display: flex;\n    justify-content: center;\n    background-color: transparent;\n    color: #363D4F;\n    font-size: 3rem;\n    text-align: center;\n    width: 100vw;\n  }\n}",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";t.r(e),e.default=t.p+"3374e53089bf18b680f0e14d4f55538f.jpg"},function(n,e,t){var o=t(0),a=t(7);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1},r=(o("!!../../node_modules/css-loader/dist/cjs.js!./about.css",a,i),a.locals?a.locals:{});n.exports=r},function(n,e,t){(e=t(1)(!1)).push([n.i,".about-content {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: flex-start;\n  justify-content: center;\n  background-color: #83454857;\n  height: 85vh;\n  width: 100vw;\n}\n\n.info-container {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: space-around;\n  width: 100vw;\n  height: 70vh;\n}\n\n.about-title {\n  display: flex;\n  justify-content: center;\n  width: 100vw;\n  height: 8vh;\n  font-size: 3em;\n  font-weight: bold;\n}\n\n.damon-about-image {\n  width: 40vw;\n  border: 2px solid black;\n  border-radius: 50%;\n}\n\n.about-text {\n  font-size: 1.5em;\n  width: 55vw;\n}\n\n@media screen and (max-width: 1280px) {\n  .about-text {\n    font-size: 0.8em;\n    width: 55vw;\n  }\n  .info-container {\n    display: flex;\n    flex-flow: column-reverse nowrap;\n    align-items: center;\n    justify-content: space-evenly;\n    width: 100vw;\n    height: 77vh;\n  }\n}",""]),n.exports=e},function(n,e,t){var o=t(0),a=t(9);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1},r=(o("!!../../node_modules/css-loader/dist/cjs.js!./projects.css",a,i),a.locals?a.locals:{});n.exports=r},function(n,e,t){(e=t(1)(!1)).push([n.i,".projects-content {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: center;\n  background-color: #E7DED9;\n  height: 85vh;\n  width: 100vw;\n  padding-top: 2vh;\n}\n\n.projects-title {\n  font-size: 3em;\n  font-weight: bold;\n}\n\n.card-zone {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100vw;\n  height: 70vh;\n}\n\n.project-cards {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-around;\n  align-items: center;\n  background-color: #83454857;\n  border: 2px solid black;\n  border-radius: 1rem;\n  padding: 1em;\n  height: 20vh;\n  width: 15vw;\n  text-align: center;\n}\n\n.project-cards a:link {\n  font-size: 1.5em;\n  color: black;\n}\n\n.project-cards a:visited {\n  font-size: 1.5em;\n  color: black;\n}\n\n.project-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 60vw;\n  height: 16vh;\n}\n\n.project-images {\n  width: 15vw;\n  height: 14vh;\n}\n\n@media screen and (max-width: 1280px) {\n  .card-zone { \n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    width: 100vw;\n    height: 70vh;\n  }\n\n  .project-cards {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-around;\n    align-items: center;\n    background-color: #83454857;\n    border: 2px solid black;\n    border-radius: 1rem;\n    padding: 1em;\n    height: 20vh;\n    width: 95vw;\n    text-align: center;\n  }\n}\n\n@media screen and (min-width: 1281px) {\n  .card-zone { \n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    width: 100vw;\n    height: 70vh;\n  }\n  \n  .project-cards {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-around;\n    align-items: center;\n    background-color: #83454857;\n    border: 2px solid black;\n    border-radius: 1rem;\n    padding: 1em;\n    height: 20vh;\n    width: 95vw;\n    text-align: center;\n  }\n\n  .project-content {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 60vw;\n    height: 16vh;\n  }\n  \n  .project-images {\n    width: 15vw;\n    height: 14vh;\n  }\n}",""]),n.exports=e},function(n,e,t){var o=t(0),a=t(11);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1},r=(o("!!../../node_modules/css-loader/dist/cjs.js!./contact.css",a,i),a.locals?a.locals:{});n.exports=r},function(n,e,t){(e=t(1)(!1)).push([n.i,".contact-zone {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: center;\n  background-color: #83454857;\n  height: 85vh;\n  width: 100vw;\n  padding-top: 2vh;\n}\n\n.contacts-title {\n  font-size: 3em;\n  font-weight: bold;\n}\n\n.contacts-card-container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100vw;\n  height: 70vh;\n}\n\n.contact-cards {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-flow: column nowrap;\n  background-color: #E7DED9;\n  border: 2px solid black;\n  border-radius: 1rem;\n  padding: 1em;\n  height: 20vh;\n  width: 15vw;\n}\n\n.contact-cards > h2 {\n  font-size: 2em;\n}\n\n@media screen and (max-width: 1200px) {\n  .contacts-card-container { \n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    width: 100vw;\n    height: 70vh;\n  }\n\n  .contact-cards {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n    background-color: #E7DED9;\n    border: 2px solid black;\n    border-radius: 1rem;\n    padding: 1em;\n    height: 20vh;\n    width: 95vw;\n  }\n}",""]),n.exports=e},function(n,e,t){var o=t(0),a=t(13);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1},r=(o("!!../../node_modules/css-loader/dist/cjs.js!./app.css",a,i),a.locals?a.locals:{});n.exports=r},function(n,e,t){(e=t(1)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Rubik&display=swap);"]),e.push([n.i,"/* CSS Meyer Reset */\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* My CSS */\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Rubik', sans-serif;\n}",""]),n.exports=e},function(n,e,t){var o=t(0),a=t(15);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1},r=(o("!!../../node_modules/css-loader/dist/cjs.js!./navbar.css",a,i),a.locals?a.locals:{});n.exports=r},function(n,e,t){(e=t(1)(!1)).push([n.i,".navigation {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: space-around;\n  height: 15vh;\n  background-color: #986054;\n  border-bottom: 3px solid black;\n}\n\n.name-heading {\n  font-size: 3em;\n  color: white;\n  height: 7vh;\n  cursor: pointer;\n}\n\n.media-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 30vw;\n  height: 7vh;\n}\n\n.media-images {\n  height: 3rem;\n}\n\n@media screen and (max-width: 1280px) {\n  .media-images {\n    height: 2.5rem;\n  }\n  .media-container {\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    width: 80vw;\n    height: 7vh;\n  }\n}",""]),n.exports=e},function(n,e,t){var o=t(0),a=t(17);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1},r=(o("!!../../node_modules/css-loader/dist/cjs.js!./main.css",a,i),a.locals?a.locals:{});n.exports=r},function(n,e,t){(e=t(1)(!1)).push([n.i,".main-content {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: 85vh;\n  width: 100vw;\n}",""]),n.exports=e},function(n,e,t){"use strict";t.r(e);var o=t.p+"ae8aff4cec5c577bbdec2c24f09807f8.jpg",a=t.p+"9b6a82f9609b1ed58c066e226f0648f2.png",i=t.p+"1362ae724ea2eb6583969fca2dd2324d.png";window.addEventListener("DOMContentLoaded",n=>{document.querySelector(".name-heading").addEventListener("click",n=>{document.querySelector(".home-content").scrollIntoView({behavior:"smooth"})})});window.addEventListener("DOMContentLoaded",n=>{document.querySelector(".navbar").childNodes.forEach(n=>{n.addEventListener("click",e=>{e.preventDefault(),"About"===n.innerText?document.querySelector(".about-content").scrollIntoView({behavior:"smooth"}):"Projects"===n.innerText?document.querySelector(".projects-content").scrollIntoView({behavior:"smooth"}):"Contact"===n.innerText&&document.querySelector(".contact-zone").scrollIntoView({behavior:"smooth"})})})});const r=["About","Projects","Contact"];var c=t.p+"bacfcb591ea5b9a6d4b2204654b4d7bf.jpg",s=t.p+"7419c0fb2cd69ea7cb6de6629434ade5.png",l=t.p+"e21ff56a4b05b52f1613bf3c72f61d90.png",d=t.p+"3e11e10bf8d1f89e93e7589a2b67c073.png",u=t.p+"e73bec708b28cac21cd5748410d389bd.pdf",m=(t(2),t(6),t(8),t(10),()=>{const n=document.createElement("section");return n.className="main-content",n.append((()=>{const n=document.createElement("section"),e=document.createElement("h1"),t=document.createElement("nav");return t.className="navbar",n.className="home-content",e.className="home-greeting",e.textContent="Check out what I bring to the table so we can build something great together!",r.forEach(n=>{const e=document.createElement("a");e.href="#",e.textContent=n,t.appendChild(e)}),n.append(e,t),n})(),(()=>{const n=document.createElement("section"),e=document.createElement("section"),t=document.createElement("h2"),o=document.createElement("img"),a=document.createElement("p");return n.className="about-content",e.className="info-container",t.className="about-title",o.className="damon-about-image",a.className="about-text",t.textContent="About Me",a.innerHTML="\n  Hey there! My name is Damon Self and I'm a software developer.\n  I graduated from Flatiron School's 15 week immersive bootcamp in \n  December of 2019. I absolutely love designing software that is intuitive \n  for user consumption because impacting someone's happiness on a daily basis \n  brings me joy. If one of my creations or contributions change someone's day\n  for the better then I've succeeded as a developer.\n  <br><br>\n  My passion for developing software bloomed while working for retail stores and \n  using their proprietary software. Often it would be frustrating and slow or the\n  system would go down. While downtime is unavoidable in some situations, I believe\n  that keeping software fast and operational as often as possible is the goal\n  for any software engineer. Well, aside from creating a time machine to remove\n  technical debt before it happens.\n  ",o.src=c,e.append(a,o),n.append(t,e),n})(),(()=>{const n=document.createElement("section"),e=document.createElement("h1"),t=document.createElement("div");return n.className="projects-content",t.className="card-zone",e.className="projects-title",e.textContent="Projects",[{name:"Magic the Gathering Deck Builder",link:"https://react-deckbuilder-frontend.firebaseapp.com/",description:"A web application that users can register and log in on to build decks for MTG.",image:l,youtube:"",github:"https://github.com/DaemonSpelledWrong/React-Deckbuilder-Frontend"},{name:"Self Portfolio",link:"https://github.com/DaemonSpelledWrong/self-portfolio",description:"The portfolio you are currently reading! Check out the source code if you like.",image:d,youtube:"",github:"https://github.com/DaemonSpelledWrong/self-portfolio"},{name:"Trails",link:"https://github.com/DaemonSpelledWrong/mod2project",description:"A partner project with Lizzy Tong that allows users to browse Colorado hikes!",image:s,youtube:"",github:"https://github.com/DaemonSpelledWrong/mod2project"}].forEach(n=>{const e=document.createElement("div"),o=document.createElement("a"),a=document.createElement("p"),i=document.createElement("img"),r=document.createElement("a"),c=document.createElement("section");e.className="project-cards",c.className="project-content",i.className="project-images",o.textContent=n.name,o.href=n.link,a.textContent=n.description,i.src=n.image,r.href=n.youtube,c.append(a,i),e.append(o,c,r),t.appendChild(e)}),n.append(e,t),n})(),(()=>{const n=document.createElement("section"),e=document.createElement("div"),t=document.createElement("h1"),o=document.createElement("p"),a=[{type:"Email",content:"damongself@gmail.com",downloadable:!1,link:"mailto:damongself@gmail.com"},{type:"Phone",content:"1-720-345-7924",downloadable:!1,link:"tel://+7203457924"},{type:"Resume",content:"Download",downloadable:!0,link:u}];return t.textContent="Contact Info",o.textContent="Form for directly messaging me is coming soon!",n.className="contact-zone",e.className="contacts-card-container",t.className="contacts-title",a.forEach(n=>{const t=document.createElement("div"),o=document.createElement("h2"),a=document.createElement("a");t.className="contact-cards",o.textContent=n.type,a.textContent=n.content,!0===n.downloadable&&(a.download="Damon's Resume.pdf"),a.href=n.link,t.append(o,a),e.appendChild(t)}),n.append(t,e,o),n})()),n});t(12),t(14),t(16);document.body.append((()=>{const n=document.createElement("header"),e=document.createElement("section"),t=document.createElement("div");return[{name:"github","image-link":o,"content-link":"https://github.com/DaemonSpelledWrong"},{name:"linkedin","image-link":a,"content-link":"https://www.linkedin.com/in/damonself/"},{name:"youtube","image-link":i,"content-link":"https://www.youtube.com/channel/UCyy2cgxviiZX5t7QY0NJqhA"}].forEach(n=>{const e=document.createElement("a"),o=document.createElement("img");t.className="media-container",o.className="media-images",e.href=n["content-link"],o.src=n["image-link"],o.alt=n.name,e.appendChild(o),t.appendChild(e)}),n.className="navigation",e.className="name-heading",e.textContent="Damon Self",n.append(e,t),n})(),m())}]);