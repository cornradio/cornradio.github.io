window.viewerOptions={},(()=>{var n={1540:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(3645),i=n.n(o),a=n(6127),s=i()(function(e){return e[1]});s.i(a.Z),s.push([e.id,".viewer-toolbar ul li{margin-right:.25rem}.viewer-backdrop{background-color:rgba(0,0,0,.85)}",""]);const r=s},6127:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(3645),s=n.n(o)()(function(e){return e[1]});s.push([e.id,`/*!
 * Viewer.js v1.10.2
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-10-22T13:59:46.805Z
 */

.viewer-zoom-in::before,
.viewer-zoom-out::before,
.viewer-one-to-one::before,
.viewer-reset::before,
.viewer-prev::before,
.viewer-play::before,
.viewer-next::before,
.viewer-rotate-left::before,
.viewer-rotate-right::before,
.viewer-flip-horizontal::before,
.viewer-flip-vertical::before,
.viewer-fullscreen::before,
.viewer-fullscreen-exit::before,
.viewer-close::before {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAAUCAYAAABWOyJDAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAQPSURBVHic7Zs/iFxVFMa/0U2UaJGksUgnIVhYxVhpjDbZCBmLdAYECxsRFBTUamcXUiSNncgKQbSxsxH8gzAP3FU2jY0kKKJNiiiIghFlccnP4p3nPCdv3p9778vsLOcHB2bfveeb7955c3jvvNkBIMdxnD64a94GHMfZu3iBcRynN7zAOI7TG15gHCeeNUkr8zaxG2lbYDYsdgMbktBsP03jdQwljSXdtBhLOmtjowC9Mg9L+knSlcD8TNKpSA9lBpK2JF2VdDSR5n5J64m0qli399hNFMUlpshQii5jbXTbHGviB0nLNeNDSd9VO4A2UdB2fp+x0eCnaXxWXGA2X0au/3HgN9P4LFCjIANOJdrLr0zzZ+BEpNYDwKbpnQMeAw4m8HjQtM6Z9qa917zPQwFr3M5KgA6J5rTJCdFZJj9/lyvGhsDvwFNVuV2MhhjrK6b9bFiE+j1r87eBl4HDwCF7/U/k+ofAX5b/EXBv5JoLMuILzf3Ap6Z3EzgdqHMCuF7hcQf4HDgeoHnccncqdK/TvSDWffFXI/exICY/xZyqc6XLWF1UFZna4gJ7q8BsRvgd2/xXpo6P+D9dfT7PpECtA3cnWPM0GXGFZh/wgWltA+cDNC7X+AP4GzjZQe+k5dRxuYPeiuXU7e1qwLpDz7dFjXKRaSwuMLvAlG8zZlG+YmiK1HoFqT7wP2z+4Q45TfEGcMt01xLoNZEBTwRqD4BLpnMLeC1A41UmVxsXgXeBayV/Wx20rpTyrpnWRft7p6O/FdqzGrDukPNtkaMoMo3FBdBSQMOnYBCReyf05s126fU9ytfX98+mY54Kxnp7S9K3kj6U9KYdG0h6UdLbkh7poFXMfUnSOyVvL0h6VtIXHbS6nOP+s/Zm9mvyXW1uuC9ohZ72E9uDmXWLJOB1GxsH+DxPftsB8B6wlGDN02TAkxG6+4D3TWsbeC5CS8CDFce+AW500LhhOW2020TRjK3b21HEmgti9m0RonxbdMZeVzV+/4tF3cBpP7E9mKHNL5q8h5g0eYsCMQz0epq8gQrwMXAgcs0FGXGFRcB9wCemF9PkbYqM/Bas7fxLwNeJPdTdpo4itQti8lPMqTpXuozVRVXPpbHI3KkNTB1NfkL81j2mvhDp91HgV9MKuRIqrykj3WPq4rHyL+axj8/qGPmTqi6F9YDlHOvJU6oYcTsh/TYSzWmTE6JT19CtLTJt32D6CmHe0eQn1O8z5AXgT4sx4Vcu0/EQecMydB8z0hUWkTd2t4CrwNEePqMBcAR4mrBbwyXLPWJa8zrXmmLEhNBmfpkuY2102xxrih+pb+ieAb6vGhuA97UcJ5KR8gZ77K+99xxeYBzH6Q3/Z0fHcXrDC4zjOL3hBcZxnN74F+zlvXFWXF9PAAAAAElFTkSuQmCC');
  background-repeat: no-repeat;
  background-size: 280px;
  color: transparent;
  display: block;
  font-size: 0;
  height: 20px;
  line-height: 0;
  width: 20px;
}

.viewer-zoom-in::before {
  background-position: 0 0;
  content: 'Zoom In';
}

.viewer-zoom-out::before {
  background-position: -20px 0;
  content: 'Zoom Out';
}

.viewer-one-to-one::before {
  background-position: -40px 0;
  content: 'One to One';
}

.viewer-reset::before {
  background-position: -60px 0;
  content: 'Reset';
}

.viewer-prev::before {
  background-position: -80px 0;
  content: 'Previous';
}

.viewer-play::before {
  background-position: -100px 0;
  content: 'Play';
}

.viewer-next::before {
  background-position: -120px 0;
  content: 'Next';
}

.viewer-rotate-left::before {
  background-position: -140px 0;
  content: 'Rotate Left';
}

.viewer-rotate-right::before {
  background-position: -160px 0;
  content: 'Rotate Right';
}

.viewer-flip-horizontal::before {
  background-position: -180px 0;
  content: 'Flip Horizontal';
}

.viewer-flip-vertical::before {
  background-position: -200px 0;
  content: 'Flip Vertical';
}

.viewer-fullscreen::before {
  background-position: -220px 0;
  content: 'Enter Full Screen';
}

.viewer-fullscreen-exit::before {
  background-position: -240px 0;
  content: 'Exit Full Screen';
}

.viewer-close::before {
  background-position: -260px 0;
  content: 'Close';
}

.viewer-container {
  bottom: 0;
  direction: ltr;
  font-size: 0;
  left: 0;
  line-height: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  -webkit-tap-highlight-color: transparent;
  top: 0;
  -ms-touch-action: none;
  touch-action: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.viewer-container::-moz-selection,
.viewer-container *::-moz-selection {
  background-color: transparent;
}

.viewer-container::selection,
.viewer-container *::selection {
  background-color: transparent;
}

.viewer-container:focus {
  outline: 0;
}

.viewer-container img {
  display: block;
  height: auto;
  max-height: none !important;
  max-width: none !important;
  min-height: 0 !important;
  min-width: 0 !important;
  width: 100%;
}

.viewer-canvas {
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
}

.viewer-canvas > img {
  height: auto;
  margin: 15px auto;
  max-width: 90% !important;
  width: auto;
}

.viewer-footer {
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  text-align: center;
}

.viewer-navbar {
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.viewer-list {
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: 50px;
  margin: 0;
  overflow: hidden;
  padding: 1px 0;
}

.viewer-list > li {
  color: transparent;
  cursor: pointer;
  float: left;
  font-size: 0;
  height: 50px;
  line-height: 0;
  opacity: 0.5;
  overflow: hidden;
  -webkit-transition: opacity 0.15s;
  transition: opacity 0.15s;
  width: 30px;
}

.viewer-list > li:focus,
.viewer-list > li:hover {
  opacity: 0.75;
}

.viewer-list > li:focus {
  outline: 0;
}

.viewer-list > li + li {
  margin-left: 1px;
}

.viewer-list > .viewer-loading {
  position: relative;
}

.viewer-list > .viewer-loading::after {
  border-width: 2px;
  height: 20px;
  margin-left: -10px;
  margin-top: -10px;
  width: 20px;
}

.viewer-list > .viewer-active,
.viewer-list > .viewer-active:focus,
.viewer-list > .viewer-active:hover {
  opacity: 1;
}

.viewer-player {
  background-color: #000;
  bottom: 0;
  cursor: none;
  display: none;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

.viewer-player > img {
  left: 0;
  position: absolute;
  top: 0;
}

.viewer-toolbar > ul {
  display: inline-block;
  margin: 0 auto 5px;
  overflow: hidden;
  padding: 6px 3px;
}

.viewer-toolbar > ul > li {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
  float: left;
  height: 24px;
  overflow: hidden;
  -webkit-transition: background-color 0.15s;
  transition: background-color 0.15s;
  width: 24px;
}

.viewer-toolbar > ul > li:focus,
.viewer-toolbar > ul > li:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.viewer-toolbar > ul > li:focus {
  -webkit-box-shadow: 0 0 3px #fff;
  box-shadow: 0 0 3px #fff;
  outline: 0;
  position: relative;
  z-index: 1;
}

.viewer-toolbar > ul > li::before {
  margin: 2px;
}

.viewer-toolbar > ul > li + li {
  margin-left: 1px;
}

.viewer-toolbar > ul > .viewer-small {
  height: 18px;
  margin-bottom: 3px;
  margin-top: 3px;
  width: 18px;
}

.viewer-toolbar > ul > .viewer-small::before {
  margin: -1px;
}

.viewer-toolbar > ul > .viewer-large {
  height: 30px;
  margin-bottom: -3px;
  margin-top: -3px;
  width: 30px;
}

.viewer-toolbar > ul > .viewer-large::before {
  margin: 5px;
}

.viewer-tooltip {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  color: #fff;
  display: none;
  font-size: 12px;
  height: 20px;
  left: 50%;
  line-height: 20px;
  margin-left: -25px;
  margin-top: -10px;
  position: absolute;
  text-align: center;
  top: 50%;
  width: 50px;
}

.viewer-title {
  color: #ccc;
  display: inline-block;
  font-size: 12px;
  line-height: 1.2;
  margin: 0 5% 5px;
  max-width: 90%;
  opacity: 0.8;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-transition: opacity 0.15s;
  transition: opacity 0.15s;
  white-space: nowrap;
}

.viewer-title:hover {
  opacity: 1;
}

.viewer-button {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
  height: 80px;
  overflow: hidden;
  position: absolute;
  right: -40px;
  top: -40px;
  -webkit-transition: background-color 0.15s;
  transition: background-color 0.15s;
  width: 80px;
}

.viewer-button:focus,
.viewer-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.viewer-button:focus {
  -webkit-box-shadow: 0 0 3px #fff;
  box-shadow: 0 0 3px #fff;
  outline: 0;
}

.viewer-button::before {
  bottom: 15px;
  left: 15px;
  position: absolute;
}

.viewer-fixed {
  position: fixed;
}

.viewer-open {
  overflow: hidden;
}

.viewer-show {
  display: block;
}

.viewer-hide {
  display: none;
}

.viewer-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

.viewer-invisible {
  visibility: hidden;
}

.viewer-move {
  cursor: move;
  cursor: -webkit-grab;
  cursor: grab;
}

.viewer-fade {
  opacity: 0;
}

.viewer-in {
  opacity: 1;
}

.viewer-transition {
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

@-webkit-keyframes viewer-spinner {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes viewer-spinner {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.viewer-loading::after {
  -webkit-animation: viewer-spinner 1s linear infinite;
  animation: viewer-spinner 1s linear infinite;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-left-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  content: '';
  display: inline-block;
  height: 40px;
  left: 50%;
  margin-left: -20px;
  margin-top: -20px;
  position: absolute;
  top: 50%;
  width: 40px;
  z-index: 1;
}

@media (max-width: 767px) {
  .viewer-hide-xs-down {
    display: none;
  }
}

@media (max-width: 991px) {
  .viewer-hide-sm-down {
    display: none;
  }
}

@media (max-width: 1199px) {
  .viewer-hide-md-down {
    display: none;
  }
}
`,""]);const i=s},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n}).join("")},t.i=function(e,n,s){"string"==typeof e&&(e=[[null,e,""]]);var o,i,a,r,c={};if(s)for(i=0;i<this.length;i++)r=this[i][0],r!=null&&(c[r]=!0);for(a=0;a<e.length;a++)o=[].concat(e[a]),s&&c[o[0]]||(n&&(o[2]?o[2]="".concat(n," and ").concat(o[2]):o[2]=n),t.push(o))},t}},3379:(e,t,n)=>{"use strict";var o,i,a,d,h,p=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},m=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch{n=null}e[t]=n}return e[t]}}(),s=[];function r(e){for(var n=-1,t=0;t<s.length;t++)if(s[t].identifier===e){n=t;break}return n}function l(e,t){for(var d={},u=[],i=0;i<e.length;i++){var o,l,n=e[i],a=t.base?n[0]+t.base:n[0],h=d[a]||0,c="".concat(a," ").concat(h);d[a]=h+1,o=r(c),l={css:n[1],media:n[2],sourceMap:n[3]},-1!==o?(s[o].references++,s[o].updater(l)):s.push({identifier:c,updater:g(l,t),references:1}),u.push(c)}return u}function c(e){var o,i,t=document.createElement("style"),s=e.attributes||{};if(void 0===s.nonce&&(o=n.nc,o&&(s.nonce=o)),Object.keys(s).forEach(function(e){t.setAttribute(e,s[e])}),"function"==typeof e.insert)e.insert(t);else{if(i=m(e.insert||"head"),!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}d=(a=[],function(e,t){return a[e]=t,a.filter(Boolean).join(`
`)});function u(e,t,n,s){if(i=n?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css,e.styleSheet)e.styleSheet.cssText=d(t,i);else{var i,a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function f(e,t,n){var s=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(s+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}i=null,h=0;function g(e,t){if(t.singleton){var n,s,o,a=h++;n=i||(i=c(t)),s=u.bind(null,n,a,!1),o=u.bind(null,n,a,!0)}else n=c(t),s=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=p());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(o=0;o<n.length;o++)c=r(n[o]),s[c].references--;for(var o,i,c,d=l(e,t),a=0;a<n.length;a++)i=r(n[a]),0===s[i].references&&(s[i].updater(),s.splice(i,1));n=d}}}},1949:function(e){e.exports=function(){"use strict";function Ae(e,t){var n,s=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,n)),s}function U(e){for(var t,n=1;n<arguments.length;n++)t=null!=arguments[n]?arguments[n]:{},n%2?Ae(Object(t),!0).forEach(function(n){De(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ae(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))});return e}function xe(e){return(xe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Pe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fe(e,t){for(var n,s=0;s<t.length;s++)n=t[s],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function Ne(e,t,n){return t&&Fe(e.prototype,t),n&&Fe(e,n),e}function De(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d,L,V,Ce={backdrop:!0,button:!0,navbar:!0,title:!0,toolbar:!0,className:"",container:"body",filter:null,fullscreen:!0,inheritedAttributes:["crossOrigin","decoding","isMap","loading","referrerPolicy","sizes","srcset","useMap"],initialViewIndex:0,inline:!1,interval:5e3,keyboard:!0,focus:!0,loading:!0,loop:!0,minWidth:200,minHeight:100,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,slideOnTouch:!0,toggleOnDblclick:!0,tooltip:!0,transition:!0,zIndex:2015,zIndexInline:0,zoomRatio:.1,minZoomRatio:.01,maxZoomRatio:100,url:"src",ready:null,show:null,shown:null,hide:null,hidden:null,view:null,viewed:null,move:null,moved:null,rotate:null,rotated:null,scale:null,scaled:null,zoom:null,zoomed:null,play:null,stop:null},He='<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>',P="undefined"!=typeof window&&void 0!==window.document,p=P?window:{},j=!!P&&!!p.document.documentElement&&"ontouchstart"in p.document.documentElement,Y=!!P&&"PointerEvent"in p,n="viewer",H="move",pe="switch",k="zoom",I="".concat(n,"-active"),ot="".concat(n,"-close"),B="".concat(n,"-fade"),$="".concat(n,"-fixed"),Ye="".concat(n,"-fullscreen"),ye="".concat(n,"-fullscreen-exit"),g="".concat(n,"-hide"),We="".concat(n,"-hide-md-down"),Ve="".concat(n,"-hide-sm-down"),Ie="".concat(n,"-hide-xs-down"),f="".concat(n,"-in"),A="".concat(n,"-invisible"),v="".concat(n,"-loading"),Le="".concat(n,"-move"),Me="".concat(n,"-open"),O="".concat(n,"-show"),r="".concat(n,"-transition"),w="click",K="dblclick",Te="dragstart",Se="focusin",Oe="keydown",m="load",T="error",Ue=j?"touchend touchcancel":"mouseup",Ke=j?"touchmove":"mousemove",Xe=j?"touchstart":"mousedown",be=Y?"pointerdown":Xe,ge=Y?"pointermove":Ke,Q=Y?"pointerup pointercancel":Ue,fe="resize",h="transitionend",me="wheel",ne="ready",ke="show",Z="shown",J="hide",ee="hidden",te="view",S="viewed",se="move",oe="moved",ie="rotate",ae="rotated",re="scale",ce="scaled",le="zoom",X="zoomed",ue="play",he="stop",z="".concat(n,"Action"),q=/\s\s*/,N=["zoom-in","zoom-out","one-to-one","reset","prev","play","next","rotate-left","rotate-right","flip-horizontal","flip-vertical"],ve,_e,Ee,ze;function E(e){return"string"==typeof e}ve=Number.isNaN||p.isNaN;function l(e){return"number"==typeof e&&!ve(e)}function y(e){return void 0===e}function b(e){return"object"===xe(e)&&null!==e}_e=Object.prototype.hasOwnProperty;function M(e){if(!b(e))return!1;try{var t=e.constructor,n=t.prototype;return t&&n&&_e.call(n,"isPrototypeOf")}catch{return!1}}function o(e){return"function"==typeof e}function i(e,t){if(e&&o(t))if(Array.isArray(e)||l(e.length)){var n,s=e.length;for(n=0;n<s&&!1!==t.call(e,e[n],n,e);n+=1);}else b(e)&&Object.keys(e).forEach(function(n){t.call(e,e[n],n,e)});return e}d=Object.assign||function(e){for(var n=arguments.length,s=new Array(n>1?n-1:0),t=1;t<n;t++)s[t-1]=arguments[t];return b(e)&&s.length>0&&s.forEach(function(t){b(t)&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e},Ee=/^(?:width|height|left|top|marginLeft|marginTop)$/;function u(e,t){var n=e.style;i(t,function(e,t){Ee.test(t)&&l(e)&&(e+="px"),n[t]=e})}function Re(e){return E(e)?e.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):e}function _(e,t){return!!e&&!!t&&(e.classList?e.classList.contains(t):e.className.indexOf(t)>-1)}function e(t,n){if(t&&n)if(l(t.length))i(t,function(t){e(t,n)});else if(t.classList)t.classList.add(n);else{var s=t.className.trim();s?s.indexOf(n)<0&&(t.className="".concat(s," ").concat(n)):t.className=n}}function s(e,t){e&&t&&(l(e.length)?i(e,function(e){s(e,t)}):e.classList?e.classList.remove(t):e.className.indexOf(t)>=0&&(e.className=e.className.replace(t,"")))}function C(t,n,o){n&&(l(t.length)?i(t,function(e){C(e,n,o)}):o?e(t,n):s(t,n))}ze=/([a-z\d])([A-Z])/g;function G(e){return e.replace(ze,"$1-$2").toLowerCase()}function x(e,t){return b(e[t])?e[t]:e.dataset?e.dataset[t]:e.getAttribute("data-".concat(G(t)))}function W(e,t,n){b(n)?e[t]=n:e.dataset?e.dataset[t]=n:e.setAttribute("data-".concat(G(t)),n)}V=function(){if(e=!1,P){var e,t=!1,n=function(){},s=Object.defineProperty({},"once",{get:function(){return e=!0,t},set:function(e){t=e}});p.addEventListener("test",n,s),p.removeEventListener("test",n,s)}return e}();function a(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=n;t.trim().split(q).forEach(function(t){if(!V){var i=e.listeners;i&&i[t]&&i[t][n]&&(s=i[t][n],delete i[t][n],0===Object.keys(i[t]).length&&delete i[t],0===Object.keys(i).length&&delete e.listeners)}e.removeEventListener(t,s,o)})}function t(e,t,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n;t.trim().split(q).forEach(function(t){if(s.once&&!V){var a=e.listeners,i=void 0===a?{}:a;o=function(){delete i[t][n],e.removeEventListener(t,o,s);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];n.apply(e,c)},i[t]||(i[t]={}),i[t][n]&&e.removeEventListener(t,i[t][n],s),i[t][n]=o,e.listeners=i}e.addEventListener(t,o,s)})}function c(e,t,n,s){var i;return o(Event)&&o(CustomEvent)?i=new CustomEvent(t,U({bubbles:!0,cancelable:!0,detail:n},s)):(i=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(i)}function Be(e){var t=e.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}function R(e){var n,s=e.rotate,o=e.scaleX,i=e.scaleY,a=e.translateX,r=e.translateY,t=[];return l(a)&&0!==a&&t.push("translateX(".concat(a,"px)")),l(r)&&0!==r&&t.push("translateY(".concat(r,"px)")),l(s)&&0!==s&&t.push("rotate(".concat(s,"deg)")),l(o)&&1!==o&&t.push("scaleX(".concat(o,")")),l(i)&&1!==i&&t.push("scaleY(".concat(i,")")),n=t.length?t.join(" "):"none",{WebkitTransform:n,msTransform:n,transform:n}}function $e(e){return E(e)?decodeURIComponent(e.replace(/^.*\//,"").replace(/[?&#].*$/,"")):""}L=p.navigator&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(p.navigator.userAgent);function we(e,t,n){var o,s=document.createElement("img");return e.naturalWidth&&!L?(n(e.naturalWidth,e.naturalHeight),s):(o=document.body||document.documentElement,s.onload=function(){n(s.width,s.height),L||o.removeChild(s)},i(t.inheritedAttributes,function(t){var n=e.getAttribute(t);null!==n&&s.setAttribute(t,n)}),s.src=e.src,L||(s.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(s)),s)}function D(e){switch(e){case 2:return Ie;case 3:return Ve;case 4:return We;default:return""}}function qe(e){var n=U({},e),t=[];return i(e,function(e,s){delete n[s],i(n,function(n){var s=Math.abs(e.startX-n.startX),o=Math.abs(e.startY-n.startY),i=Math.abs(e.endX-n.endX),a=Math.abs(e.endY-n.endY),r=Math.sqrt(s*s+o*o),c=(Math.sqrt(i*i+a*a)-r)/r;t.push(c)})}),t.sort(function(e,t){return Math.abs(e)<Math.abs(t)}),t[0]}function F(e,t){var n=e.pageX,s=e.pageY,o={endX:n,endY:s};return t?o:U({timeStamp:Date.now(),startX:n,startY:s},o)}function Ge(e){var n=0,s=0,t=0;return i(e,function(e){var o=e.startX,i=e.startY;n+=o,s+=i,t+=1}),{pageX:n/=t,pageY:s/=t}}var je,Qe={render:function(){this.initContainer(),this.initViewer(),this.initList(),this.renderViewer()},initBody:function(){var e=this.element.ownerDocument,t=e.body||e.documentElement;this.body=t,this.scrollbarWidth=window.innerWidth-e.documentElement.clientWidth,this.initialBodyPaddingRight=t.style.paddingRight,this.initialBodyComputedPaddingRight=window.getComputedStyle(t).paddingRight},initContainer:function(){this.containerData={width:window.innerWidth,height:window.innerHeight}},initViewer:function(){var e,t=this.options,n=this.parent;t.inline&&(e={width:Math.max(n.offsetWidth,t.minWidth),height:Math.max(n.offsetHeight,t.minHeight)},this.parentData=e),!this.fulled&&e||(e=this.containerData),this.viewerData=d({},e)},renderViewer:function(){this.options.inline&&!this.fulled&&u(this.viewer,this.viewerData)},initList:function(){var l=this,d=this.element,n=this.options,o=this.list,c=[];o.innerHTML="",i(this.images,function(e,t){var s,a,r=e.src,u=e.alt||$e(r),d=l.getImageURL(e);(r||d)&&(s=document.createElement("li"),a=document.createElement("img"),i(n.inheritedAttributes,function(t){var n=e.getAttribute(t);null!==n&&a.setAttribute(t,n)}),a.src=r||d,a.alt=u,a.setAttribute("data-original-url",d||r),s.setAttribute("data-index",t),s.setAttribute("data-viewer-action","view"),s.setAttribute("role","button"),n.keyboard&&s.setAttribute("tabindex",0),s.appendChild(a),o.appendChild(s),c.push(s))}),this.items=c,i(c,function(o){var r,c,i=o.firstElementChild;W(i,"filled",!0),n.loading&&e(o,v),t(i,m,r=function(e){a(i,T,c),n.loading&&s(o,v),l.loadImage(e)},{once:!0}),t(i,T,c=function(){a(i,m,r),n.loading&&s(o,v)},{once:!0})}),n.transition&&t(d,S,function(){e(o,r)},{once:!0})},renderList:function(){if(t=this.index,e=this.items[t],e){var e,t,i=e.nextElementSibling,n=parseInt(window.getComputedStyle(i||e).marginLeft,10),s=e.offsetWidth,o=s+n;u(this.list,d({width:o*this.length-n},R({translateX:(this.viewerData.width-s)/2-o*t})))}},resetList:function(){var e=this.list;e.innerHTML="",s(e,r),u(e,R({translateX:0}))},initImage:function(e){var a,s=this,o=this.options,l=this.image,r=this.viewerData,c=this.footer.offsetHeight,t=r.width,n=Math.max(r.height-c,c),i=this.imageData||{};this.imageInitializing={abort:function(){a.onload=null}},a=we(l,o,function(a,r){var h=a/r,c=t,l=n;s.imageInitializing=!1,n*h>t?l=t/h:c=n*h;var c=Math.min(.9*c,a),l=Math.min(.9*l,r),f=(t-c)/2,p=(n-l)/2,u={left:f,top:p,x:f,y:p,width:c,height:l,oldRatio:1,ratio:c/a,aspectRatio:h,naturalWidth:a,naturalHeight:r},m=d({},u);o.rotatable&&(u.rotate=i.rotate||0,m.rotate=0),o.scalable&&(u.scaleX=i.scaleX||1,u.scaleY=i.scaleY||1,m.scaleX=1,m.scaleY=1),s.imageData=u,s.initialImageData=m,e&&e()})},renderImage:function(e){var o,i=this,s=this.image,n=this.imageData;u(s,d({width:n.width,height:n.height,marginLeft:n.x,marginTop:n.y},R(n))),e&&((this.viewing||this.moving||this.rotating||this.scaling||this.zooming)&&this.options.transition&&_(s,r)?(o=function(){i.imageRendering=!1,e()},this.imageRendering={abort:function(){a(s,h,o)}},t(s,h,o,{once:!0})):e())},resetImage:function(){if(this.viewing||this.viewed){var e=this.image;this.viewing&&this.viewing.abort(),e.parentNode.removeChild(e),this.image=null}}},Ze={bind:function(){var e=this.options,n=this.viewer,o=this.canvas,s=this.element.ownerDocument;t(n,w,this.onClick=this.click.bind(this)),t(n,Te,this.onDragStart=this.dragstart.bind(this)),t(o,be,this.onPointerDown=this.pointerdown.bind(this)),t(s,ge,this.onPointerMove=this.pointermove.bind(this)),t(s,Q,this.onPointerUp=this.pointerup.bind(this)),t(s,Oe,this.onKeyDown=this.keydown.bind(this)),t(window,fe,this.onResize=this.resize.bind(this)),e.zoomable&&e.zoomOnWheel&&t(n,me,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleOnDblclick&&t(o,K,this.onDblclick=this.dblclick.bind(this))},unbind:function(){var e=this.options,t=this.viewer,s=this.canvas,n=this.element.ownerDocument;a(t,w,this.onClick),a(t,Te,this.onDragStart),a(s,be,this.onPointerDown),a(n,ge,this.onPointerMove),a(n,Q,this.onPointerUp),a(n,Oe,this.onKeyDown),a(window,fe,this.onResize),e.zoomable&&e.zoomOnWheel&&a(t,me,this.onWheel,{passive:!1,capture:!0}),e.toggleOnDblclick&&a(s,K,this.onDblclick)}},Je={click:function(e){var n=this.options,o=this.imageData,t=e.target,s=x(t,z);switch(s||"img"!==t.localName||"li"!==t.parentElement.localName||(s=x(t=t.parentElement,z)),j&&e.isTrusted&&t===this.canvas&&clearTimeout(this.clickCanvasTimeout),s){case"mix":this.played?this.stop():n.inline?this.fulled?this.exit():this.full():this.hide();break;case"hide":this.hide();break;case"view":this.view(x(t,"index"));break;case"zoom-in":this.zoom(.1,!0);break;case"zoom-out":this.zoom(-.1,!0);break;case"one-to-one":this.toggle();break;case"reset":this.reset();break;case"prev":this.prev(n.loop);break;case"play":this.play(n.fullscreen);break;case"next":this.next(n.loop);break;case"rotate-left":this.rotate(-90);break;case"rotate-right":this.rotate(90);break;case"flip-horizontal":this.scaleX(-o.scaleX||-1);break;case"flip-vertical":this.scaleY(-o.scaleY||-1);break;default:this.played&&this.stop()}},dblclick:function(e){e.preventDefault(),this.viewed&&e.target===this.image&&(j&&e.isTrusted&&clearTimeout(this.doubleClickImageTimeout),this.toggle(e))},load:function(){e=this,this.timeout&&(clearTimeout(this.timeout),this.timeout=!1);var e,a=this.element,n=this.options,i=this.image,l=this.index,d=this.viewerData;s(i,A),n.loading&&s(this.canvas,v),i.style.cssText="height:0;"+"margin-left:".concat(d.width/2,"px;")+"margin-top:".concat(d.height/2,"px;")+"max-width:none!important;position:relative;width:0;",this.initImage(function(){C(i,Le,n.movable),C(i,r,n.transition),e.renderImage(function(){e.viewed=!0,e.viewing=!1,o(n.viewed)&&t(a,S,n.viewed,{once:!0}),c(a,S,{originalImage:e.images[l],index:l,image:i},{cancelable:!1})})})},loadImage:function(e){var s=e.target,o=s.parentNode,t=o.offsetWidth||30,n=o.offsetHeight||50,i=!!x(s,"filled");we(s,this.options,function(e,o){var a=e/o,r=t,c=n;n*a>t?i?r=n*a:c=t/a:i?c=t/a:r=n*a,u(s,d({width:r,height:c},R({translateX:(t-r)/2,translateY:(n-c)/2})))})},keydown:function(e){var n,t=this.options;if(t.keyboard){switch(n=e.keyCode||e.which||e.charCode,n){case 13:this.viewer.contains(e.target)&&this.click(e)}if(this.fulled)switch(n){case 27:this.played?this.stop():t.inline?this.fulled&&this.exit():this.hide();break;case 32:this.played&&this.stop();break;case 37:this.prev(t.loop);break;case 38:e.preventDefault(),this.zoom(t.zoomRatio,!0);break;case 39:this.next(t.loop);break;case 40:e.preventDefault(),this.zoom(-t.zoomRatio,!0);break;case 48:case 49:e.ctrlKey&&(e.preventDefault(),this.toggle())}}},dragstart:function(e){"img"===e.target.localName&&e.preventDefault()},pointerdown:function(e){var t,n=this.options,o=this.pointers,a=e.buttons,c=e.button;!this.viewed||this.showing||this.viewing||this.hiding||("mousedown"===e.type||"pointerdown"===e.type&&"mouse"===e.pointerType)&&(l(a)&&1!==a||l(c)&&0!==c||e.ctrlKey)||(e.preventDefault(),e.changedTouches?i(e.changedTouches,function(e){o[e.identifier]=F(e)}):o[e.pointerId||0]=F(e),t=!!n.movable&&H,n.zoomOnTouch&&n.zoomable&&Object.keys(o).length>1?t=k:n.slideOnTouch&&("touch"===e.pointerType||"touchstart"===e.type)&&this.isSwitchable()&&(t=pe),!n.transition||t!==H&&t!==k||s(this.image,r),this.action=t)},pointermove:function(e){var t=this.pointers,n=this.action;this.viewed&&n&&(e.preventDefault(),e.changedTouches?i(e.changedTouches,function(e){d(t[e.identifier]||{},F(e,!0))}):d(t[e.pointerId||0]||{},F(e,!0)),this.change(e))},pointerup:function(t){var n,l=this,s=this.options,o=this.action,a=this.pointers;t.changedTouches?i(t.changedTouches,function(e){n=a[e.identifier],delete a[e.identifier]}):(n=a[t.pointerId||0],delete a[t.pointerId||0]),o&&(t.preventDefault(),!s.transition||o!==H&&o!==k||e(this.image,r),this.action=!1,j&&o!==k&&n&&Date.now()-n.timeStamp<500&&(clearTimeout(this.clickCanvasTimeout),clearTimeout(this.doubleClickImageTimeout),s.toggleOnDblclick&&this.viewed&&t.target===this.image?this.imageClicked?(this.imageClicked=!1,this.doubleClickImageTimeout=setTimeout(function(){c(l.image,K)},50)):(this.imageClicked=!0,this.doubleClickImageTimeout=setTimeout(function(){l.imageClicked=!1},500)):(this.imageClicked=!1,s.backdrop&&"static"!==s.backdrop&&t.target===this.canvas&&(this.clickCanvasTimeout=setTimeout(function(){c(l.canvas,w)},50)))))},resize:function(){var e=this;if(this.isShown&&!this.hiding&&(this.fulled&&(this.close(),this.initBody(),this.open()),this.initContainer(),this.initViewer(),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){e.renderImage()}),this.played)){if(this.options.fullscreen&&this.fulled&&!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement))return void this.stop();i(this.player.getElementsByTagName("img"),function(n){t(n,m,e.loadImage.bind(e),{once:!0}),c(n,m)})}},wheel:function(e){if(n=this,this.viewed&&(e.preventDefault(),!this.wheeling)){this.wheeling=!0,setTimeout(function(){n.wheeling=!1},50);var n,s=Number(this.options.zoomRatio)||.1,t=1;e.deltaY?t=e.deltaY>0?1:-1:e.wheelDelta?t=-e.wheelDelta/120:e.detail&&(t=e.detail>0?1:-1),this.zoom(-t*s,!0,e)}}},et={show:function(){var n,l,d=arguments.length>0&&void 0!==arguments[0]&&arguments[0],u=this.element,i=this.options;return i.inline||this.showing||this.isShown||this.showing?this:this.ready?(o(i.show)&&t(u,ke,i.show,{once:!0}),!1===c(u,ke)||!this.ready?this:(this.hiding&&this.transitioning.abort(),this.showing=!0,this.open(),n=this.viewer,s(n,g),n.setAttribute("role","dialog"),n.setAttribute("aria-labelledby",this.title.id),n.setAttribute("aria-modal",!0),n.removeAttribute("aria-hidden"),i.transition&&!d?(l=this.shown.bind(this),this.transitioning={abort:function(){a(n,h,l),s(n,f)}},e(n,r),n.initialOffsetWidth=n.offsetWidth,t(n,h,l,{once:!0}),e(n,f)):(e(n,f),this.shown()),this)):(this.build(),this.ready&&this.show(d),this)},hide:function(){var l,u,d=this,g=arguments.length>0&&void 0!==arguments[0]&&arguments[0],m=this.element,n=this.options;if(n.inline||this.hiding||!this.isShown&&!this.showing)return this;if(o(n.hide)&&t(m,J,n.hide,{once:!0}),!1===c(m,J))return this;this.showing&&this.transitioning.abort(),this.hiding=!0,this.played?this.stop():this.viewing&&this.viewing.abort();var e=this.viewer,i=this.image,p=function(){s(e,f),d.hidden()};return n.transition&&!g?(u=function t(n){n&&n.target===e&&(a(e,h,t),d.hidden())},l=function(){_(e,r)?(t(e,h,u),s(e,f)):p()},this.transitioning={abort:function(){d.viewed&&_(i,r)?a(i,h,l):_(e,r)&&a(e,h,u)}},this.viewed&&_(i,r)?(t(i,h,l,{once:!0}),this.zoomTo(0,!1,null,!0)):l()):p(),this},view:function(){if(r=this,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.initialViewIndex,l=Number(l)||0,this.hiding||this.played||l<0||l>=this.length||this.viewed&&l===this.index)return this;if(!this.isShown)return this.index=l,this.show();this.viewing&&this.viewing.abort();var r,l,f,b,j,w,h=this.element,d=this.options,y=this.title,p=this.canvas,u=this.items[l],g=u.querySelector("img"),O=x(g,"originalUrl"),_=g.getAttribute("alt"),n=document.createElement("img");return i(d.inheritedAttributes,function(e){var t=g.getAttribute(e);null!==t&&n.setAttribute(e,t)}),n.src=O,n.alt=_,o(d.view)&&t(h,te,d.view,{once:!0}),!1===c(h,te,{originalImage:this.images[l],index:l,image:n})||!this.isShown||this.hiding||this.played?this:(f=this.items[this.index],f&&(s(f,I),f.removeAttribute("aria-selected")),e(u,I),u.setAttribute("aria-selected",!0),d.focus&&u.focus(),this.image=n,this.viewed=!1,this.index=l,this.imageData={},e(n,A),d.loading&&e(p,v),p.innerHTML="",p.appendChild(n),this.renderList(),y.innerHTML="",j=function(){var e=r.imageData,t=Array.isArray(d.title)?d.title[1]:d.title;y.innerHTML=Re(o(t)?t.call(r,n,e):"".concat(_," (").concat(e.naturalWidth," × ").concat(e.naturalHeight,")"))},t(h,S,j,{once:!0}),this.viewing={abort:function(){a(h,S,j),n.complete?r.imageRendering?r.imageRendering.abort():r.imageInitializing&&r.imageInitializing.abort():(n.src="",a(n,m,b),r.timeout&&clearTimeout(r.timeout))}},n.complete?this.load():(t(n,m,b=function(){a(n,T,w),r.load()},{once:!0}),t(n,T,w=function(){a(n,m,b),r.timeout&&(clearTimeout(r.timeout),r.timeout=!1),s(n,A),d.loading&&s(r.canvas,v)},{once:!0}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){s(n,A),r.timeout=!1},1e3)),this)},prev:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.index-1;return e<0&&(e=t?this.length-1:0),this.view(e),this},next:function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.length-1,e=this.index+1;return e>t&&(e=n?0:t),this.view(e),this},move:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=this.imageData;return this.moveTo(y(e)?e:n.x+Number(e),y(t)?t:n.y+Number(t)),this},moveTo:function(e){var m=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,h=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=this.element,i=this.options,s=this.imageData;if(e=Number(e),n=Number(n),this.viewed&&!this.played&&i.movable){var r=s.x,d=s.y,u=!1;if(l(e)?u=!0:e=r,l(n)?u=!0:n=d,u){if(o(i.move)&&t(a,se,i.move,{once:!0}),!1===c(a,se,{x:e,y:n,oldX:r,oldY:d,originalEvent:h}))return this;s.x=e,s.y=n,s.left=e,s.top=n,this.moving=!0,this.renderImage(function(){m.moving=!1,o(i.moved)&&t(a,oe,i.moved,{once:!0}),c(a,oe,{x:e,y:n,oldX:r,oldY:d,originalEvent:h},{cancelable:!1})})}}return this},rotate:function(e){return this.rotateTo((this.imageData.rotate||0)+Number(e)),this},rotateTo:function(e){var i,r=this,s=this.element,n=this.options,a=this.imageData;if(l(e=Number(e))&&this.viewed&&!this.played&&n.rotatable){if(i=a.rotate,o(n.rotate)&&t(s,ie,n.rotate,{once:!0}),!1===c(s,ie,{degree:e,oldDegree:i}))return this;a.rotate=e,this.rotating=!0,this.renderImage(function(){r.rotating=!1,o(n.rotated)&&t(s,ae,n.rotated,{once:!0}),c(s,ae,{degree:e,oldDegree:i},{cancelable:!1})})}return this},scaleX:function(e){return this.scale(e,this.imageData.scaleY),this},scaleY:function(e){return this.scale(this.imageData.scaleX,e),this},scale:function(e){var h=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,i=this.element,s=this.options,a=this.imageData;if(e=Number(e),n=Number(n),this.viewed&&!this.played&&s.scalable){var r=a.scaleX,d=a.scaleY,u=!1;if(l(e)?u=!0:e=r,l(n)?u=!0:n=d,u){if(o(s.scale)&&t(i,re,s.scale,{once:!0}),!1===c(i,re,{scaleX:e,scaleY:n,oldScaleX:r,oldScaleY:d}))return this;a.scaleX=e,a.scaleY=n,this.scaling=!0,this.renderImage(function(){h.scaling=!1,o(s.scaled)&&t(i,ce,s.scaled,{once:!0}),c(i,ce,{scaleX:e,scaleY:n,oldScaleX:r,oldScaleY:d},{cancelable:!1})})}}return this},zoom:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,t=this.imageData;return e=(e=Number(e))<0?1/(1-e):1+e,this.zoomTo(t.width*e/t.naturalWidth,n,s),this},zoomTo:function(e){var d,u,j,y,E=this,k=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,p=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=this.element,s=this.options,h=this.pointers,n=this.imageData,C=n.x,O=n.y,m=n.width,g=n.height,x=n.naturalWidth,w=n.naturalHeight;if(l(e=Math.max(0,e))&&this.viewed&&!this.played&&(p||s.zoomable)){p||(j=Math.max(.01,s.minZoomRatio),y=Math.min(100,s.maxZoomRatio),e=Math.min(Math.max(e,j),y)),i&&s.zoomRatio>=.055&&e>.95&&e<1.05&&(e=1);var _=x*e,b=w*e,f=_-m,v=b-g,r=n.ratio;if(o(s.zoom)&&t(a,le,s.zoom,{once:!0}),!1===c(a,le,{ratio:e,oldRatio:r,originalEvent:i}))return this;this.zooming=!0,i?(u=Be(this.viewer),d=h&&Object.keys(h).length?Ge(h):{pageX:i.pageX,pageY:i.pageY},n.x-=f*((d.pageX-u.left-C)/m),n.y-=v*((d.pageY-u.top-O)/g)):(n.x-=f/2,n.y-=v/2),n.left=n.x,n.top=n.y,n.width=_,n.height=b,n.oldRatio=r,n.ratio=e,this.renderImage(function(){E.zooming=!1,o(s.zoomed)&&t(a,X,s.zoomed,{once:!0}),c(a,X,{ratio:e,oldRatio:r,originalEvent:i},{cancelable:!1})}),k&&this.tooltip()}return this},play:function(){if(g=this,d=arguments.length>0&&void 0!==arguments[0]&&arguments[0],!this.isShown||this.played)return this;if(u=this.element,n=this.options,o(n.play)&&t(u,ue,n.play,{once:!0}),!1===c(u,ue))return this;var n,d,u,g,j,v=this.player,b=this.loadImage.bind(this),h=[],p=0,a=0;return(this.played=!0,this.onLoadWhenPlay=b,d&&this.requestFullscreen(d),e(v,O),i(this.items,function(s,o){var c=s.querySelector("img"),i=document.createElement("img");i.src=x(c,"originalUrl"),i.alt=c.getAttribute("alt"),i.referrerPolicy=c.referrerPolicy,p+=1,e(i,B),C(i,r,n.transition),_(s,I)&&(e(i,f),a=o),h.push(i),t(i,m,b,{once:!0}),v.appendChild(i)}),l(n.interval)&&n.interval>0)&&(j=function t(){g.playing=setTimeout(function(){s(h[a],f),e(h[a=(a+=1)<p?a:0],f),t()},n.interval)},p>1&&j()),this},stop:function(){if(n=this,!this.played)return this;var e,n,r=this.element,l=this.options;return o(l.stop)&&t(r,he,l.stop,{once:!0}),!1===c(r,he)?this:(e=this.player,this.played=!1,clearTimeout(this.playing),i(e.getElementsByTagName("img"),function(e){a(e,m,n.onLoadWhenPlay)}),s(e,O),e.innerHTML="",this.exitFullscreen(),this)},full:function(){var a=this,n=this.options,t=this.viewer,o=this.image,i=this.list;return!this.isShown||this.played||this.fulled||!n.inline||(this.fulled=!0,this.open(),e(this.button,ye),n.transition&&(s(i,r),this.viewed&&s(o,r)),e(t,$),t.setAttribute("role","dialog"),t.setAttribute("aria-labelledby",this.title.id),t.setAttribute("aria-modal",!0),t.removeAttribute("style"),u(t,{zIndex:n.zIndex}),n.focus&&this.enforceFocus(),this.initContainer(),this.viewerData=d({},this.containerData),this.renderList(),this.viewed&&this.initImage(function(){a.renderImage(function(){n.transition&&setTimeout(function(){e(o,r),e(i,r)},0)})})),this},exit:function(){var a=this,t=this.options,n=this.viewer,o=this.image,i=this.list;return this.isShown&&!this.played&&this.fulled&&t.inline?(this.fulled=!1,this.close(),s(this.button,ye),t.transition&&(s(i,r),this.viewed&&s(o,r)),t.focus&&this.clearEnforceFocus(),n.removeAttribute("role"),n.removeAttribute("aria-labelledby"),n.removeAttribute("aria-modal"),s(n,$),u(n,{zIndex:t.zIndexInline}),this.viewerData=d({},this.parentData),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){a.renderImage(function(){t.transition&&setTimeout(function(){e(o,r),e(i,r)},0)})}),this):this},tooltip:function(){var o=this,i=this.options,n=this.tooltipBox,a=this.imageData;return this.viewed&&!this.played&&i.tooltip?(n.textContent="".concat(Math.round(100*a.ratio),"%"),this.tooltipping?clearTimeout(this.tooltipping):i.transition?(this.fading&&c(n,h),e(n,O),e(n,B),e(n,r),n.removeAttribute("aria-hidden"),n.initialOffsetWidth=n.offsetWidth,e(n,f)):(e(n,O),n.removeAttribute("aria-hidden")),this.tooltipping=setTimeout(function(){i.transition?(t(n,h,function(){s(n,O),s(n,B),s(n,r),n.setAttribute("aria-hidden",!0),o.fading=!1},{once:!0}),s(n,f),o.fading=!0):(s(n,O),n.setAttribute("aria-hidden",!0)),o.tooltipping=!1},1e3),this):this},toggle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return 1===this.imageData.ratio?this.zoomTo(this.imageData.oldRatio,!0,e):this.zoomTo(1,!0,e),this},reset:function(){return this.viewed&&!this.played&&(this.imageData=d({},this.initialImageData),this.renderImage()),this},update:function(){var t,s,a,r,c=this,n=this.element,l=this.options,d=this.isImg;return d&&!n.parentNode?this.destroy():(t=[],i(d?[n]:n.querySelectorAll("img"),function(e){o(l.filter)?l.filter.call(c,e)&&t.push(e):c.getImageURL(e)&&t.push(e)}),t.length?(this.images=t,this.length=t.length,this.ready?(s=[],(i(this.items,function(e,n){var o=e.querySelector("img"),i=t[n];i&&o&&i.src===o.src&&i.alt===o.alt||s.push(n)}),u(this.list,{width:"auto"}),this.initList(),this.isShown)&&(this.length?this.viewed&&(a=s.indexOf(this.index),a>=0?(this.viewed=!1,this.view(Math.max(Math.min(this.index-a,this.length-1),0))):(r=this.items[this.index],e(r,I),r.setAttribute("aria-selected",!0))):(this.image=null,this.viewed=!1,this.index=0,this.imageData={},this.canvas.innerHTML="",this.title.innerHTML=""))):this.build(),this):this)},destroy:function(){var e=this.element,t=this.options;return e[n]?(this.destroyed=!0,this.ready?(this.played&&this.stop(),t.inline?(this.fulled&&this.exit(),this.unbind()):this.isShown?(this.viewing&&(this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort()),this.hiding&&this.transitioning.abort(),this.hidden()):this.showing&&(this.transitioning.abort(),this.hidden()),this.ready=!1,this.viewer.parentNode.removeChild(this.viewer)):t.inline&&(this.delaying?this.delaying.abort():this.initializing&&this.initializing.abort()),t.inline||a(e,w,this.onStart),e[n]=void 0,this):this}},tt={getImageURL:function(e){var t=this.options.url;return t=E(t)?e.getAttribute(t):o(t)?t.call(this,e):""},enforceFocus:function(){var e=this;this.clearEnforceFocus(),t(document,Se,this.onFocusin=function(t){var s=e.viewer,n=t.target;n===document||n===s||s.contains(n)||null!==n.getAttribute("tabindex")&&"true"===n.getAttribute("aria-modal")||s.focus()})},clearEnforceFocus:function(){this.onFocusin&&(a(document,Se,this.onFocusin),this.onFocusin=null)},open:function(){var t=this.body;e(t,Me),t.style.paddingRight="".concat(this.scrollbarWidth+(parseFloat(this.initialBodyComputedPaddingRight)||0),"px")},close:function(){var e=this.body;s(e,Me),e.style.paddingRight=this.initialBodyPaddingRight},shown:function(){var n=this.element,e=this.options,s=this.viewer;this.fulled=!0,this.isShown=!0,this.render(),this.bind(),this.showing=!1,e.focus&&(s.focus(),this.enforceFocus()),o(e.shown)&&t(n,Z,e.shown,{once:!0}),!1!==c(n,Z)&&this.ready&&this.isShown&&!this.hiding&&this.view(this.index)},hidden:function(){var i=this.element,s=this.options,n=this.viewer;s.fucus&&this.clearEnforceFocus(),this.fulled=!1,this.viewed=!1,this.isShown=!1,this.close(),this.unbind(),e(n,g),n.removeAttribute("role"),n.removeAttribute("aria-labelledby"),n.removeAttribute("aria-modal"),n.setAttribute("aria-hidden",!0),this.resetList(),this.resetImage(),this.hiding=!1,this.destroyed||(o(s.hidden)&&t(i,ee,s.hidden,{once:!0}),c(i,ee,null,{cancelable:!1}))},requestFullscreen:function(e){var t,n=this.element.ownerDocument;this.fulled&&!(n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.msFullscreenElement)&&(t=n.documentElement,t.requestFullscreen?M(e)?t.requestFullscreen(e):t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen())},exitFullscreen:function(){var e=this.element.ownerDocument;this.fulled&&(e.fullscreenElement||e.webkitFullscreenElement||e.mozFullScreenElement||e.msFullscreenElement)&&(e.exitFullscreen?e.exitFullscreen():e.webkitExitFullscreen?e.webkitExitFullscreen():e.mozCancelFullScreen?e.mozCancelFullScreen():e.msExitFullscreen&&e.msExitFullscreen())},change:function(e){var n,o,a,r=this.options,s=this.pointers,t=s[Object.keys(s)[0]];if(t){switch(n=t.endX-t.startX,o=t.endY-t.startY,this.action){case H:this.move(n,o,e);break;case k:this.zoom(qe(s),!1,e);break;case pe:this.action="switched",a=Math.abs(n),a>1&&a>Math.abs(o)&&(this.pointers={},n>1?this.prev(r.loop):n<-1&&this.next(r.loop))}i(s,function(e){e.startX=e.endX,e.startY=e.endY})}},isSwitchable:function(){var e=this.imageData,t=this.viewerData;return this.length>1&&e.x>=0&&e.y>=0&&e.width<=t.width&&e.height<=t.height}},nt=p.Viewer,st=(je=-1,function(){return je+=1}),de=function(){function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Pe(this,s),!e||1!==e.nodeType)throw new Error("The first argument is required and must be an element.");this.element=e,this.options=d({},Ce,M(t)&&t),this.action=!1,this.fading=!1,this.fulled=!1,this.hiding=!1,this.imageClicked=!1,this.imageData={},this.index=this.options.initialViewIndex,this.isImg=!1,this.isShown=!1,this.length=0,this.moving=!1,this.played=!1,this.playing=!1,this.pointers={},this.ready=!1,this.rotating=!1,this.scaling=!1,this.showing=!1,this.timeout=!1,this.tooltipping=!1,this.viewed=!1,this.viewing=!1,this.wheeling=!1,this.zooming=!1,this.id=st(),this.init()}return Ne(s,[{key:"init",value:function(){var r,l,d,u,e=this,c=this.element,s=this.options;c[n]||(c[n]=this,s.focus&&!s.keyboard&&(s.focus=!1),d="img"===c.localName,r=[],i(d?[c]:c.querySelectorAll("img"),function(t){o(s.filter)?s.filter.call(e,t)&&r.push(t):e.getImageURL(t)&&r.push(t)}),this.isImg=d,this.length=r.length,this.images=r,this.initBody(),y(document.createElement(n).style.transition)&&(s.transition=!1),s.inline?(u=0,l=function(){var t;(u+=1)===e.length&&(e.initializing=!1,e.delaying={abort:function(){clearTimeout(t)}},t=setTimeout(function(){e.delaying=!1,e.build()},0))},this.initializing={abort:function(){i(r,function(e){e.complete||a(e,m,l)})}},i(r,function(e){e.complete?l():t(e,m,l,{once:!0})})):t(c,w,this.onStart=function(t){var n=t.target;"img"!==n.localName||o(s.filter)&&!s.filter.call(e,n)||e.view(e.images.indexOf(n))}))}},{key:"build",value:function(){if(!this.ready){var m=this.element,s=this.options,p=m.parentNode,j=document.createElement("div");j.innerHTML=He;var r,b,a=j.querySelector(".".concat(n,"-container")),v=a.querySelector(".".concat(n,"-title")),d=a.querySelector(".".concat(n,"-toolbar")),_=a.querySelector(".".concat(n,"-navbar")),h=a.querySelector(".".concat(n,"-button")),O=a.querySelector(".".concat(n,"-canvas"));if(this.parent=p,this.viewer=a,this.title=v,this.toolbar=d,this.navbar=_,this.button=h,this.canvas=O,this.footer=a.querySelector(".".concat(n,"-footer")),this.tooltipBox=a.querySelector(".".concat(n,"-tooltip")),this.player=a.querySelector(".".concat(n,"-player")),this.list=a.querySelector(".".concat(n,"-list")),a.id="".concat(n).concat(this.id),v.id="".concat(n,"Title").concat(this.id),e(v,s.title?D(Array.isArray(s.title)?s.title[0]:s.title):g),e(_,s.navbar?D(s.navbar):g),C(h,g,!s.button),s.keyboard&&h.setAttribute("tabindex",0),s.backdrop&&(e(a,"".concat(n,"-backdrop")),s.inline||"static"===s.backdrop||W(O,z,"hide")),E(s.className)&&s.className&&s.className.split(q).forEach(function(t){e(a,t)}),s.toolbar){var x=document.createElement("ul"),f=M(s.toolbar),k=N.slice(0,3),S=N.slice(7,9),F=N.slice(9);f||e(d,D(s.toolbar)),i(f?s.toolbar:N,function(i,a){var d=f&&M(i),c=f?G(a):i,u=d&&!y(i.show)?i.show:i;if(u&&(s.zoomable||-1===k.indexOf(c))&&(s.rotatable||-1===S.indexOf(c))&&(s.scalable||-1===F.indexOf(c))){var m=d&&!y(i.size)?i.size:i,h=d&&!y(i.click)?i.click:i,r=document.createElement("li");s.keyboard&&r.setAttribute("tabindex",0),r.setAttribute("role","button"),e(r,"".concat(n,"-").concat(c)),o(h)||W(r,z,c),l(u)&&e(r,D(u)),-1!==["small","large"].indexOf(m)?e(r,"".concat(n,"-").concat(m)):"play"===c&&e(r,"".concat(n,"-large")),o(h)&&t(r,w,h),x.appendChild(r)}}),d.appendChild(x)}else e(d,g);s.rotatable||(b=d.querySelectorAll('li[class*="rotate"]'),e(b,A),i(b,function(e){d.appendChild(e)})),s.inline?(e(h,Ye),u(a,{zIndex:s.zIndexInline}),"static"===window.getComputedStyle(p).position&&u(p,{position:"relative"}),p.insertBefore(a,m.nextSibling)):(e(h,ot),e(a,$),e(a,B),e(a,g),u(a,{zIndex:s.zIndex}),r=s.container,E(r)&&(r=m.ownerDocument.querySelector(r)),r||(r=this.body),r.appendChild(a)),s.inline&&(this.render(),this.bind(),this.isShown=!0),this.ready=!0,o(s.ready)&&t(m,ne,s.ready,{once:!0}),!1!==c(m,ne)?this.ready&&s.inline&&this.view(this.index):this.ready=!1}}}],[{key:"noConflict",value:function(){return window.Viewer=nt,s}},{key:"setDefaults",value:function(e){d(Ce,M(e)&&e)}}]),s}();return d(de.prototype,Qe,Ze,Je,et,tt),de}()}},t={};function e(s){var o,i=t[s];return void 0!==i?i.exports:(o=t[s]={id:s,exports:{}},n[s].call(o.exports,o,o.exports,e),o.exports)}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})},e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var t=e(1949),n=e.n(t);class s{constructor(){this.options=window.viewerOptions,this.gallery=new(n())(document.querySelector("main"),this.options)}run(){const e=this;document.querySelectorAll("img").forEach(function(t){"A"!==t.parentElement.tagName&&t.addEventListener("click",function(){e.gallery.show()})})}}document.addEventListener("DOMContentLoaded",()=>{(new s).run()})})(),(()=>{"use strict";var n=e(3379),s=e.n(n),t=e(1540),o={insert:"head",singleton:!1};s()(t.Z,o),t.Z.locals})()})()