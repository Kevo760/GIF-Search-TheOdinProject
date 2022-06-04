(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"html {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: silver;\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: inherit;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 8rem auto;\r\n}\r\n\r\n#gif-form {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgb(59, 59, 59);\r\n    width: 18.5rem;\r\n    height: 4rem;\r\n    padding: 1rem;\r\n    gap: .5rem;\r\n    border-radius: .5rem;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n\r\n#gif-form input {\r\n    padding: .6rem;\r\n    border-radius: .2rem;\r\n    border: none;\r\n}\r\n\r\n#gif-form button {\r\n    padding: .5rem;\r\n}\r\n\r\n.gif-box {\r\n    margin-top: 5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 18.5rem;\r\n    height: 18rem;\r\n    padding: 1rem;\r\n    background-color: rgb(59, 59, 59);\r\n    border-radius: .5rem;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    gap: .5rem;\r\n}\r\n\r\n.img-box {\r\n    height: 14rem;\r\n    width: 100%;\r\n}\r\n\r\n#gif {\r\n    width: 100%;\r\n    height: 13rem;\r\n}\r\n\r\n#next-btn {\r\n    width: 100%;\r\n    padding: .5rem;\r\n}",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var u=t(i[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"da301589dcff6bb0954d.jpg";t.p;var n=t(379),r=t.n(n),o=t(795),i=t.n(o),a=t(569),c=t.n(a),s=t(565),d=t.n(s),u=t(216),l=t.n(u),p=t(589),f=t.n(p),m=t(426),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),r()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,function(e){const n=document.createElement("header");n.style.backgroundColor="rgb(59, 59, 59)",n.style.color="white",n.style.position="fixed",n.style.width="100%",n.style.height="4rem",n.style.left="0",n.style.top="0",n.style.display="flex",n.style.justifyContent="center",n.style.alignItems="center",n.style.boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px";const t=document.createElement("h1");t.classList.add("header-title"),t.innerText="GIF Searcher Lite",n.append(t),document.body.append(n)}(),function(){const n=document.createElement("div");n.classList.add("content"),n.append(function(){const e=document.createElement("form");e.id="gif-form";const n=document.createElement("input");n.type="text",n.placeholder="Search for a GIF",n.id="search-gif";const t=document.createElement("button");return t.innerText="Search",e.append(n),e.append(t),e}()),n.append(function(){const n=document.createElement("div");n.classList.add("gif-box");const t=document.createElement("div");t.classList.add("img-box");const r=document.createElement("img");r.id="gif",r.src=e,t.append(r);const o=document.createElement("button");return o.id="next-btn",o.innerText="Next GIF",n.append(t),n.append(o),n}()),document.body.append(n)}(),function(){const n=document.querySelector("#gif"),t=document.querySelector("#search-gif");let r="shaq";document.querySelector("#gif-form").addEventListener("submit",(function(o){o.preventDefault(),r=t.value,fetch(`https://api.giphy.com/v1/gifs/translate?api_key=LvORzdnADWvyluc0ptHK08Zu3ijRFDaR&s=${r}`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){n.src=e.data.images.original.url})).catch((function(){n.src=e}))})),document.querySelector("#next-btn").addEventListener("click",(function(){fetch(`https://api.giphy.com/v1/gifs/translate?api_key=LvORzdnADWvyluc0ptHK08Zu3ijRFDaR&s=${r}`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){n.src=e.data.images.original.url}))}))}()})()})();