define(["exports","metal/src/metal"],function(e,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var u=t(n),o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=function(){function e(){r(this,e)}return o(e,null,[{key:"buildConfigFromCall",value:function(e){var n={};e[1]&&(n.key=e[1]);for(var t=(e[2]||[]).concat(e.slice(3)),r=0;r<t.length;r+=2)n[t[r]]=t[r+1];return n}},{key:"buildCallFromConfig",value:function(e,n){for(var t=[e,n.key,[]],r=Object.keys(n),u=0;u<r.length;u++)"children"!==r[u]&&t.push(r[u],n[r[u]]);return t}},{key:"isComponentTag",value:function(e){return!u["default"].isString(e)||e[0]===e[0].toUpperCase()}}]),e}();e["default"]=a});