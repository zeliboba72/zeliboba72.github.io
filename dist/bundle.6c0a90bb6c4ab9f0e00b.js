(()=>{var e={6:(e,i,t)=>{"use strict";e.exports=t.p+"images/avatar.jpg"},268:(e,i,t)=>{"use strict";e.exports=t.p+"images/close.svg"},993:(e,i,t)=>{"use strict";e.exports=t.p+"images/edit.svg"},198:(e,i,t)=>{"use strict";e.exports=t.p+"images/img1.jpg"},635:(e,i,t)=>{"use strict";e.exports=t.p+"images/img2.jpg"},631:(e,i,t)=>{"use strict";e.exports=t.p+"images/img3.jpg"},262:(e,i,t)=>{"use strict";e.exports=t.p+"images/img4.jpg"},201:(e,i,t)=>{"use strict";e.exports=t.p+"images/img5.jpg"},124:(e,i,t)=>{"use strict";e.exports=t.p+"images/img6.jpg"},151:(e,i,t)=>{"use strict";e.exports=t.p+"images/logo.png"},160:(e,i,t)=>{"use strict";e.exports=t.p+"images/plus.svg"},884:()=>{const e=document.querySelector(".profile__button"),i=document.querySelector(".main"),t=document.querySelector(".modal-add-film");e.addEventListener("click",(()=>{if(t.classList.contains("open"))return;document.body.style.paddingRight=window.innerWidth-document.body.clientWidth+"px",document.body.style.overflow="hidden",t.classList.add("open");const e=document.querySelector(".modal-add-film__overlay"),o=document.querySelector(".modal-add-film__close"),n=document.querySelector(".modal-add-film__file-loader"),a=document.querySelector(".modal-add-film__button-submit"),r=document.querySelector(".modal-add-film__name");let d;function l(){if(0===r.value.length)return r.classList.add("empty-string"),void r.focus();if(!d)return;const e=document.createElement("div");e.classList.add("main__item"),e.insertAdjacentHTML("afterbegin",`\n      <div class="main__image-wrap">\n          <img src="${d}" alt="" class="main__image" />\n      </div>\n      <div class="main__description-wrap">\n          <h2 title="${r.value}" class="main__description">${r.value}</h2>\n          <label class="main__checkbox">\n          <input\n            type="checkbox"\n            class="main__checkbox__input visually-hidden"\n          />\n          <svg class="main__checkbox-like">\n            <use href="#like"></use>\n          </svg>\n        </label>\n      </div>`),i.append(e),a.removeEventListener("click",l),t.classList.add("submit"),setTimeout((()=>{m("submit")}),300)}function s(){a.removeEventListener("click",l),t.classList.add("close"),setTimeout((()=>{m("close")}),300)}function m(e){r.classList.remove("empty-string"),r.value="",a.classList.remove("active"),t.classList.remove("open"),t.classList.remove(e),document.body.style.overflow="visible",document.body.style.paddingRight=0}r.focus(),n.addEventListener("change",(function(){let e=n.files[0],i=new FileReader;i.readAsDataURL(e),i.onload=()=>{d=i.result,n.value=""},a.classList.add("active")})),a.addEventListener("click",l),o.addEventListener("click",s),e.addEventListener("mousedown",(i=>{i.target===e&&s()}))}))},702:()=>{const e=document.querySelector(".profile__edit"),i=document.querySelector(".profile__name"),t=document.querySelector(".profile__business"),o=document.querySelector(".modal-edit");e.addEventListener("click",(()=>{if(o.classList.contains("open"))return;document.body.style.paddingRight=window.innerWidth-document.body.clientWidth+"px",document.body.style.overflow="hidden",o.classList.add("open");const e=document.querySelector(".modal-edit__overlay"),n=document.querySelector(".modal-edit__close"),a=document.querySelector(".modal-edit__name"),r=document.querySelector(".modal-edit__business"),d=document.querySelector(".modal-edit__button");function l(){a.classList.remove("empty-string"),r.classList.remove("empty-string"),o.classList.add("close"),setTimeout((()=>{o.classList.remove("open"),o.classList.remove("close"),document.body.style.overflow="visible",document.body.style.paddingRight=0}),300)}a.focus(),a.value=i.title,r.value=t.title,e.addEventListener("mousedown",(i=>{i.target===e&&l()})),n.addEventListener("click",l),d.addEventListener("click",(function(){return 0===a.value.length?(0===r.value.length&&r.classList.add("empty-string"),a.classList.add("empty-string"),void a.focus()):0===r.value.length?(r.classList.add("empty-string"),void r.focus()):(a.classList.remove("empty-string"),r.classList.remove("empty-string"),i.innerHTML=a.value,i.title=a.value,t.innerHTML=r.value,t.title=r.value,o.classList.add("submit"),void setTimeout((()=>{o.classList.remove("open"),o.classList.remove("submit"),document.body.style.overflow="visible",document.body.style.paddingRight=0}),300))}))}))},703:(e,i,t)=>{"use strict";t.d(i,{Z:()=>a});var o=t(645),n=t.n(o)()((function(e){return e[1]}));n.push([e.id,"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}",""]);const a=n},493:(e,i,t)=>{"use strict";t.d(i,{Z:()=>f});var o=t(645),n=t.n(o),a=t(667),r=t.n(a),d=t(160),l=t(993),s=t(268),m=n()((function(e){return e[1]}));m.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;900&display=swap);"]);var p=r()(d),c=r()(l),_=r()(s);m.push([e.id,'body{font-family:"Inter",sans-serif;background-color:#000}.container-inner{max-width:900px;margin:0 auto}.header{display:flex;align-items:center;height:120px;border-bottom:1px solid rgba(84,84,84,.7)}.header__logo{opacity:1;transition:opacity .2s linear;width:160px;height:34px}.header__logo:hover{opacity:.7}.header__logo:focus{outline:none;box-shadow:0 0 3px 2px #fff}.header__logo .logo-img{display:block}@media(max-width: 910px){.header{padding:0 20px}}.profile{display:flex;align-items:center;min-height:210px;color:#fff}.profile__button{display:flex;justify-content:center;align-items:center;margin-left:auto;width:150px;height:50px;background-color:inherit;border:2px solid #fff;cursor:pointer;transition:opacity .2s linear}.profile__button:hover{opacity:.7}.profile__button:focus{outline:none;box-shadow:0 0 3px 2px #fff}.profile__button .icon-plus{width:22px;height:22px;background:url('+p+") no-repeat center}@media(max-width: 768px){.profile__button{margin:0 0 30px 0;width:280px}}.profile__main{display:flex;align-items:center}.profile__main .profile__avatar-wrap{width:120px;height:120px;border-radius:50%;overflow:hidden;margin-right:30px}.profile__main .profile__avatar-wrap .avatar{width:100%;height:100%;object-fit:cover}@media(max-width: 600px){.profile__main .profile__avatar-wrap{margin:0 0 20px 0}}.profile__main .profile__information{max-width:450px;position:relative}@media(max-width: 910px){.profile__main .profile__information{max-width:350px}}@media(max-width: 768px){.profile__main .profile__information{max-width:320px}}@media(max-width: 600px){.profile__main .profile__information{max-width:280px}}.profile__main .profile__information .profile__name{margin:0;font-weight:500;font-size:42px;margin-bottom:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media(max-width: 910px){.profile__main .profile__information .profile__name{font-size:36px}}@media(max-width: 768px){.profile__main .profile__information .profile__name{font-size:30px}}@media(max-width: 600px){.profile__main .profile__information .profile__name{font-size:26px}}.profile__main .profile__information .profile__business{margin:0;font-weight:400;font-size:18px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.profile__main .profile__information .profile__edit{width:24px;height:24px;background:url("+c+") no-repeat center;border:1px solid #fff;position:absolute;right:-50px;top:15px;cursor:pointer;transition:opacity .2s linear}.profile__main .profile__information .profile__edit:hover{opacity:.7}.profile__main .profile__information .profile__edit:focus{outline:none;box-shadow:0 0 3px 2px #fff}@media(max-width: 600px){.profile__main .profile__information .profile__edit{right:0px;top:-23px}}@media(max-width: 768px){.profile__main{margin:30px 0}}@media(max-width: 600px){.profile__main{flex-direction:column;text-align:center}}@media(max-width: 910px){.profile{padding:0 20px}}@media(max-width: 768px){.profile{flex-direction:column;justify-content:center;align-items:center}}.main{display:flex;justify-content:space-between;flex-wrap:wrap}.main__item{flex:0 0 32%;height:360px;border-radius:10px;overflow:hidden;background-color:#fff;margin-bottom:20px}.main__item .main__image-wrap{height:75%;overflow:hidden}.main__item .main__image-wrap .main__image{display:block;width:100%;height:100%;object-fit:cover;object-position:center;transition:transform .2s linear}.main__item .main__image-wrap .main__image:hover{transform:scale(1.05)}.main__item .main__description-wrap{height:25%;display:flex;align-items:center;justify-content:space-between;padding:0 20px}.main__item .main__description-wrap .main__description{font-size:16px;font-weight:900;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.main__item .main__description-wrap .main__checkbox{display:flex;align-items:center;justify-content:center;width:30px;height:30px;margin-left:10px;cursor:pointer}.main__item .main__description-wrap .main__checkbox .main__checkbox__input.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;border:0;clip:rect(0 0 0 0)}.main__item .main__description-wrap .main__checkbox .main__checkbox__input.visually-hidden:checked+.main__checkbox-like{fill:#fc4040}.main__item .main__description-wrap .main__checkbox .main__checkbox__input.visually-hidden:focus+.main__checkbox-like{box-shadow:0 0 3px 1px rgba(84,84,84,.7)}.main__item .main__description-wrap .main__checkbox .main__checkbox-like{width:30px;height:25px;fill:#fff;stroke:#000;stroke-width:20px;cursor:pointer;transition:opacity .2s linear}.main__item .main__description-wrap .main__checkbox .main__checkbox-like:hover{opacity:.7}@media(max-width: 768px){.main__item{flex:0 0 48%}}@media(max-width: 600px){.main__item{flex:0 0 100%}}@media(max-width: 910px){.main{padding:0 20px}}.footer{height:150px;display:flex;align-items:center}.footer__text{font-weight:400;color:#545454;font-size:16px}@media(max-width: 910px){.footer{padding:0 20px}}@media(max-width: 600px){.footer{justify-content:center}}.modal-edit{opacity:0;visibility:hidden;transition:opacity .3s ease-in-out}.modal-edit.open{visibility:visible;opacity:1}.modal-edit.open .modal-edit__window{transform:translate(0, 0)}.modal-edit.open.close{opacity:0}.modal-edit.open.close .modal-edit__window{transform:translate(0, -200px)}.modal-edit.open.submit{opacity:0}.modal-edit__overlay{overflow-y:auto;overflow-x:hidden;display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5);padding:0 20px}.modal-edit__overlay .modal-edit__window{transform:translate(0, -200px);transition:transform .3s ease-in-out;position:relative;display:flex;flex-direction:column;width:430px;background-color:#fff;border-radius:10px;padding:36px}.modal-edit__overlay .modal-edit__window .modal-edit__title{font-size:24px;font-weight:900;margin:0 0 50px 0}@media(max-width: 600px){.modal-edit__overlay .modal-edit__window .modal-edit__title{text-align:center;line-height:1.4}}.modal-edit__overlay .modal-edit__window input{height:40px;border:none;border-bottom:1px solid rgba(84,84,84,.7);outline:none;font-weight:400;font-size:14px;color:#000;position:relative}.modal-edit__overlay .modal-edit__window input:focus{border-bottom:1px solid #000}.modal-edit__overlay .modal-edit__window .modal-edit__name{margin-bottom:15px}.modal-edit__overlay .modal-edit__window .modal-edit__name.empty-string::placeholder{color:red}.modal-edit__overlay .modal-edit__window .modal-edit__business{margin-bottom:50px}.modal-edit__overlay .modal-edit__window .modal-edit__business.empty-string::placeholder{color:red}.modal-edit__overlay .modal-edit__window .modal-edit__button{height:50px;background-color:#000;color:#fff;border-radius:2px;border:none;cursor:pointer;transition:background-color .2s linear}.modal-edit__overlay .modal-edit__window .modal-edit__button:hover{background-color:#545454}.modal-edit__overlay .modal-edit__window .modal-edit__button:focus{outline:none;box-shadow:0px 0px 4px 4px #545454}.modal-edit__overlay .modal-edit__window .modal-edit__close{position:absolute;top:-40px;right:-40px;width:45px;height:45px;background:url("+_+") no-repeat center;cursor:pointer;transition:opacity .2s linear}.modal-edit__overlay .modal-edit__window .modal-edit__close:hover{opacity:.7}@media(max-width: 600px){.modal-edit__overlay .modal-edit__window .modal-edit__close{top:-50px;right:0}}.modal-add-film{opacity:0;visibility:hidden;transition:opacity .3s ease-in-out}.modal-add-film.open{visibility:visible;opacity:1}.modal-add-film.open .modal-add-film__window{transform:translate(0, 0)}.modal-add-film.open.close{opacity:0}.modal-add-film.open.close .modal-add-film__window{transform:translate(0, -200px)}.modal-add-film.open.submit{opacity:0}.modal-add-film__overlay{overflow-y:auto;overflow-x:hidden;display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5);padding:0 20px}.modal-add-film__overlay .modal-add-film__window{transform:translate(0, -200px);transition:transform .3s ease-in-out;position:relative;display:flex;flex-direction:column;width:430px;background-color:#fff;border-radius:10px;padding:36px}.modal-add-film__overlay .modal-add-film__window .modal-add-film__title{font-size:24px;font-weight:900;margin:0 0 30px 0}@media(max-width: 600px){.modal-add-film__overlay .modal-add-film__window .modal-add-film__title{text-align:center;line-height:1.4}}.modal-add-film__overlay .modal-add-film__window .modal-add-film__name{height:40px;border:none;border-bottom:1px solid rgba(84,84,84,.7);outline:none;font-weight:400;font-size:14px;color:#000;position:relative;margin-bottom:40px}.modal-add-film__overlay .modal-add-film__window .modal-add-film__name.empty-string::placeholder{color:red}.modal-add-film__overlay .modal-add-film__window .modal-add-film__name:focus{border-bottom:1px solid #000}.modal-add-film__overlay .modal-add-film__window .modal-add-film__file-loader-button{display:flex;align-items:center;justify-content:center;height:50px;background-color:#fff;border:2px solid #000;margin-bottom:10px;color:#000;font-weight:900;font-size:18px;cursor:pointer;transition:opacity .2s linear}.modal-add-film__overlay .modal-add-film__window .modal-add-film__file-loader-button:hover{opacity:.7}.modal-add-film__overlay .modal-add-film__window .modal-add-film__file-loader-button .modal-add-film__file-loader{display:none}.modal-add-film__overlay .modal-add-film__window .modal-add-film__button-submit{display:none;width:100%;height:50px;background-color:#000;color:#fff;font-weight:900;font-size:18px;border-radius:2px;border:none;cursor:pointer;transition:background-color .2s linear}.modal-add-film__overlay .modal-add-film__window .modal-add-film__button-submit.active{display:block}.modal-add-film__overlay .modal-add-film__window .modal-add-film__button-submit:hover{background-color:#545454}.modal-add-film__overlay .modal-add-film__window .modal-add-film__button-submit:focus{outline:none;box-shadow:0px 0px 4px 4px #545454}.modal-add-film__overlay .modal-add-film__window .modal-add-film__close{position:absolute;top:-40px;right:-40px;width:45px;height:45px;background:url("+_+") no-repeat center;cursor:pointer;transition:opacity .2s linear}.modal-add-film__overlay .modal-add-film__window .modal-add-film__close:hover{opacity:.7}@media(max-width: 600px){.modal-add-film__overlay .modal-add-film__window .modal-add-film__close{top:-50px;right:0}}",""]);const f=m},645:e=>{"use strict";e.exports=function(e){var i=[];return i.toString=function(){return this.map((function(i){var t=e(i);return i[2]?"@media ".concat(i[2]," {").concat(t,"}"):t})).join("")},i.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(o)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(n[r]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&n[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),i.push(l))}},i}},667:e=>{"use strict";e.exports=function(e,i){return i||(i={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),i.hash&&(e+=i.hash),/["'() \t\n]/.test(e)||i.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},379:(e,i,t)=>{"use strict";var o,n=function(){var e={};return function(i){if(void 0===e[i]){var t=document.querySelector(i);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[i]=t}return e[i]}}(),a=[];function r(e){for(var i=-1,t=0;t<a.length;t++)if(a[t].identifier===e){i=t;break}return i}function d(e,i){for(var t={},o=[],n=0;n<e.length;n++){var d=e[n],l=i.base?d[0]+i.base:d[0],s=t[l]||0,m="".concat(l," ").concat(s);t[l]=s+1;var p=r(m),c={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(a[p].references++,a[p].updater(c)):a.push({identifier:m,updater:u(c,i),references:1}),o.push(m)}return o}function l(e){var i=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=t.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(e){i.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(i);else{var r=n(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(i)}return i}var s,m=(s=[],function(e,i){return s[e]=i,s.filter(Boolean).join("\n")});function p(e,i,t,o){var n=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=m(i,n);else{var a=document.createTextNode(n),r=e.childNodes;r[i]&&e.removeChild(r[i]),r.length?e.insertBefore(a,r[i]):e.appendChild(a)}}function c(e,i,t){var o=t.css,n=t.media,a=t.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var _=null,f=0;function u(e,i){var t,o,n;if(i.singleton){var a=f++;t=_||(_=l(i)),o=p.bind(null,t,a,!1),n=p.bind(null,t,a,!0)}else t=l(i),o=c.bind(null,t,i),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;o(e=i)}else n()}}e.exports=function(e,i){(i=i||{}).singleton||"boolean"==typeof i.singleton||(i.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=d(e=e||[],i);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var n=r(t[o]);a[n].references--}for(var l=d(e,i),s=0;s<t.length;s++){var m=r(t[s]);0===a[m].references&&(a[m].updater(),a.splice(m,1))}t=l}}}}},i={};function t(o){var n=i[o];if(void 0!==n)return n.exports;var a=i[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return t.d(i,{a:i}),i},t.d=(e,i)=>{for(var o in i)t.o(i,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:i[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var i=t.g.document;if(!e&&i&&(i.currentScript&&(e=i.currentScript.src),!e)){var o=i.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{"use strict";t(702),t(884);var e=t(379),i=t.n(e),o=t(703);i()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var n=t(493);i()(n.Z,{insert:"head",singleton:!1}),n.Z.locals,t(6),t(151),t(198),t(635),t(631),t(262),t(201),t(124)})()})();