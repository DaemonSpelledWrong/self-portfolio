!function(e){var n={};function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(o,a,function(n){return e[n]}.bind(null,a));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=16)}([function(e,n,t){"use strict";var o,a={},r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function s(e,n,t){e=t.base?e+t.base:e,a[e]||(a[e]=[]);for(var o=0;o<n.length;o++){var r=n[o],i={css:r[1],media:r[2],sourceMap:r[3]},s=a[e];s[o]?s[o].updater(i):s.push({updater:h(i,t)})}for(var c=n.length;c<a[e].length;c++)a[e][c].updater();a[e].length=n.length,0===a[e].length&&delete a[e]}function c(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=t.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var r=i(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var l,u=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function d(e,n,t,o){var a=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=u(n,a);else{var r=document.createTextNode(a),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(r,i[n]):e.appendChild(r)}}function f(e,n,t){var o=t.css,a=t.media,r=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,m=0;function h(e,n){var t,o,a;if(n.singleton){var r=m++;t=p||(p=c(n)),o=d.bind(null,t,r,!1),a=d.bind(null,t,r,!0)}else t=c(n),o=f.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else a()}}e.exports=function(e,n,t){return(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r()),s(e,n,t),function(n){s(e,n||[],t)}}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var a=(i=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")}));return[t].concat(r).concat([a]).join("\n")}var i,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o=0;o<e.length;o++){var a=[].concat(e[o]);t&&(a[2]?a[2]="".concat(t," and ").concat(a[2]):a[2]=t),n.push(a)}},n}},function(e,n,t){var o=t(0),a=t(3);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1},i=(o("!!../../node_modules/css-loader/dist/cjs.js!./about.css",a,r),a.locals?a.locals:{});e.exports=i},function(e,n,t){(n=t(1)(!1)).push([e.i,".about-content {\n  height: 78vh;\n  width: 100vw;\n}",""]),e.exports=n},function(e,n,t){var o=t(0),a=t(5);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1},i=(o("!!../../node_modules/css-loader/dist/cjs.js!./home.css",a,r),a.locals?a.locals:{});e.exports=i},function(e,n,t){var o=t(1),a=t(6),r=t(7);n=o(!1);var i=a(r);n.push([e.i,".home-content {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  height: 78vh;\n  width: 100vw;\n  overflow: scroll;\n}\n\n.home-greeting {\n  display: flex;\n  justify-content: center;\n  background-image: url("+i+");\n  background-size: cover;\n  background-position: center;\n  font-size: 3rem;\n  padding-top: 2rem;\n  height: 78vh;\n  width: 100vw;\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";t.r(n),n.default=t.p+"3374e53089bf18b680f0e14d4f55538f.jpg"},function(e,n,t){var o=t(0),a=t(9);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1},i=(o("!!../../node_modules/css-loader/dist/cjs.js!./app.css",a,r),a.locals?a.locals:{});e.exports=i},function(e,n,t){(n=t(1)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Rubik&display=swap);"]),n.push([e.i,"/* CSS Meyer Reset */\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* My CSS */\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Rubik', sans-serif;\n}",""]),e.exports=n},function(e,n,t){var o=t(0),a=t(11);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1},i=(o("!!../../node_modules/css-loader/dist/cjs.js!./navbar.css",a,r),a.locals?a.locals:{});e.exports=i},function(e,n,t){(n=t(1)(!1)).push([e.i,".navigation {\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: space-around;\n  height: 15vh;\n  background-color: #E7DED9;\n}\n\n.name-heading {\n  font-size: 3em;\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 80vw;\n}\n\n.navbar a:link {\n  text-decoration: none;\n}\n\n.navbar a:visited {\n  text-decoration: none;\n}\n\n.navbar a:hover {\n  text-decoration: underline;\n}",""]),e.exports=n},function(e,n,t){var o=t(0),a=t(13);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1},i=(o("!!../../node_modules/css-loader/dist/cjs.js!./main.css",a,r),a.locals?a.locals:{});e.exports=i},function(e,n,t){(n=t(1)(!1)).push([e.i,".main-content {\n  display: flex;\n  justify-content: center;\n  height: 78vh;\n}",""]),e.exports=n},function(e,n,t){var o=t(0),a=t(15);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1},i=(o("!!../../node_modules/css-loader/dist/cjs.js!./footer.css",a,r),a.locals?a.locals:{});e.exports=i},function(e,n,t){(n=t(1)(!1)).push([e.i,".footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background-color: #aa6458c7;\n  height: 7vh;\n}\n\n.footer a {\n  align-items: center;\n  color: black;\n  font-size: 2rem;\n}\n\n.footer a:link {\n  text-decoration: none;\n}\n\n.footer a:visited {\n  text-decoration: none;\n}\n\n.footer-images {\n  height: 3rem;\n}",""]),e.exports=n},function(e,n,t){"use strict";t.r(n);t(2);var o=()=>{const e=document.createElement("section"),n=document.createElement("h1");return e.className="home-content",n.className="home-greeting",n.textContent="Welcome to my website! Feel free to look around:",e.append(n,(()=>{const e=document.createElement("section");return e.className="about-content",e})()),e};t(4),t(8),t(10),t(12),t(14);document.body.append((()=>{const e=document.createElement("header"),n=document.createElement("section"),t=document.createElement("nav");return e.className="navigation",n.className="name-heading",t.className="navbar",n.textContent="Damon Self",["Home","About","Projects","Contact","YouTube"].forEach(e=>{let n=document.createElement("a");n.href="#",n.textContent=e,t.appendChild(n)}),e.append(n,t),e})(),(()=>{const e=document.createElement("section");return e.className="main-content",e.appendChild(o()),e})(),(()=>{const e=document.createElement("section");return e.className="footer",[{name:"Damon Self © 2019","image-link":"#","content-link":"#"},{name:"linkedin","image-link":"http://www.vectorico.com/download/social_media/LinkedIn-Icon.png","content-link":"https://www.linkedin.com/in/damonself/"},{name:"github","image-link":"https://image.flaticon.com/icons/png/512/25/25231.png","content-link":"https://github.com/DaemonSpelledWrong"},{name:"youtube","image-link":"https://i.pinimg.com/originals/19/7b/36/197b365922d1ea3aa1a932ff9bbda4a6.png","content-link":"https://www.youtube.com/channel/UCyy2cgxviiZX5t7QY0NJqhA"}].forEach(n=>{const t=document.createElement("a"),o=document.createElement("img");o.className="footer-images",t.href=n["content-link"],o.src=n["image-link"],o.alt=n.name,t.appendChild(o),e.appendChild(t)}),e})())}]);