define(["exports","metal/src/metal","../IncrementalDomAop","../utils/IncrementalDomUtils"],function(e,n,t,r){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){var t=i({parent:s},C.CHILD_OWNER,p);return n?(t.text=e[0],e.length>1&&(t.args=e)):(t.tag=e[0],t.config=b["default"].buildConfigFromCall(e),b["default"].isComponentTag(t.tag)&&(t.config.ref=h["default"].isDefAndNotNull(t.config.ref)?t.config.ref:p.buildRef(e[0])),t.config.children=[]),f(t),t}function f(e){s.config.children.push(e)}function u(){s===m?(v["default"].stopInterception(),O=!1,g(m),g=null,s=null,p=null,m=null):s=s.parent}function c(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];s=o(t)}function d(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];o(t,!0)}Object.defineProperty(e,"__esModule",{value:!0});var g,s,p,m,h=l(n),v=l(t),b=l(r),y=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),C=function(){function e(){a(this,e)}return y(e,null,[{key:"capture",value:function(e,n){p=e,g=n,m={config:{children:[]}},s=m,O=!0,v["default"].startInterception({elementClose:u,elementOpen:c,text:d})}},{key:"render",value:function(n,t){if(O)return void f(n);if(!t||!t(n))if(h["default"].isDef(n.text)){var r=n.args?n.args:[];r[0]=n.text,IncrementalDOM.text.apply(null,r)}else{var l=b["default"].buildCallFromConfig(n.tag,n.config);if(IncrementalDOM.elementOpen.apply(null,l),n.config.children)for(var i=0;i<n.config.children.length;i++)e.render(n.config.children[i],t);IncrementalDOM.elementClose(n.tag)}}}]),e}(),O=!1;C.CHILD_OWNER="__metalChildOwner",e["default"]=C});