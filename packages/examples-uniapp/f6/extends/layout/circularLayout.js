!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CircularLayout=e():t.CircularLayout=e()}(this,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=197)}({10:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(11),e),o(r(12),e),o(r(13),e),o(r(14),e),o(r(15),e),o(r(16),e)},11:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.camelize=e.isString=void 0;e.isString=function(t){return"string"==typeof t};var n,o,i=/-(\w)/g;e.camelize=(n=function(t){return t.replace(i,(function(t,e){return e?e.toUpperCase():""}))},o=Object.create(null),function(t){return o[t]||(o[t]=n(t))})},12:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isArray=void 0,e.isArray=Array.isArray},13:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toNumber=e.isNaN=e.isNumber=void 0;e.isNumber=function(t){return"number"==typeof t};e.isNaN=function(t){return Number.isNaN(Number(t))};e.toNumber=function(t){var r=parseFloat(t);return e.isNaN(r)?t:r}},14:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.traverseTreeUp=e.scaleMatrix=e.getAdjMatrix=e.floydWarshall=e.getDegree=void 0;e.getDegree=function(t,e,r){for(var n=[],o=0;o<t;o++)n[o]=0;return r?(r.forEach((function(t){t.source&&(n[e[t.source]]+=1),t.target&&(n[e[t.target]]+=1)})),n):n};e.floydWarshall=function(t){for(var e=[],r=t.length,n=0;n<r;n+=1){e[n]=[];for(var o=0;o<r;o+=1)n===o?e[n][o]=0:0!==t[n][o]&&t[n][o]?e[n][o]=t[n][o]:e[n][o]=1/0}for(var i=0;i<r;i+=1)for(n=0;n<r;n+=1)for(o=0;o<r;o+=1)e[n][o]>e[n][i]+e[i][o]&&(e[n][o]=e[n][i]+e[i][o]);return e};e.getAdjMatrix=function(t,e){var r=t.nodes,n=t.edges,o=[],i={};if(!r)throw new Error("invalid nodes data!");return r&&r.forEach((function(t,e){i[t.id]=e;o.push([])})),n&&n.forEach((function(t){var r=t.source,n=t.target,u=i[r],s=i[n];o[u][s]=1,e||(o[s][u]=1)})),o};e.scaleMatrix=function(t,e){var r=[];return t.forEach((function(t){var n=[];t.forEach((function(t){n.push(t*e)})),r.push(n)})),r};e.traverseTreeUp=function(t,e){"function"==typeof e&&function t(e,r){if(e&&e.children)for(var n=e.children.length-1;n>=0;n--)if(!t(e.children[n],r))return;return!!r(e)}(t,e)}},15:function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.clone=e.isObject=void 0;e.isObject=function(t){return null!==t&&"object"===n(t)};e.clone=function(t){if(null===t)return t;if(t instanceof Date)return new Date(t.getTime());if(t instanceof Array){var r=[];return t.forEach((function(t){r.push(t)})),r.map((function(t){return e.clone(t)}))}if("object"===n(t)&&t!=={}){var i=o({},t);return Object.keys(i).forEach((function(t){i[t]=e.clone(i[t])})),i}return t}},158:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.CircularLayout=void 0;var i=r(9),u=r(10);function s(t,e){var r=t.degree,n=e.degree;return r<n?-1:r>n?1:0}var c=function(t){function e(e){var r=t.call(this)||this;return r.radius=null,r.startRadius=null,r.endRadius=null,r.startAngle=0,r.endAngle=2*Math.PI,r.clockwise=!0,r.divisions=1,r.ordering=null,r.angleRatio=1,r.nodes=[],r.edges=[],r.nodeMap={},r.degrees=[],r.width=300,r.height=300,r.updateCfg(e),r}return o(e,t),e.prototype.getDefaultCfg=function(){return{radius:null,startRadius:null,endRadius:null,startAngle:0,endAngle:2*Math.PI,clockwise:!0,divisions:1,ordering:null,angleRatio:1}},e.prototype.execute=function(){var t=this.nodes,e=this.edges,r=t.length;if(0!==r){this.width||"undefined"==typeof window||(this.width=window.innerWidth),this.height||"undefined"==typeof window||(this.height=window.innerHeight),this.center||(this.center=[this.width/2,this.height/2]);var n=this.center;if(1===r)return t[0].x=n[0],t[0].y=n[1],void(this.onLayoutEnd&&this.onLayoutEnd());var o=this.radius,i=this.startRadius,s=this.endRadius,c=this.divisions,a=this.startAngle,f=this.endAngle,d=(f-a)/r,l={};t.forEach((function(t,e){l[t.id]=e})),this.nodeMap=l;var h=u.getDegree(t.length,l,e);this.degrees=h,o||i||s?!i&&s?i=s:i&&!s&&(s=i):o=this.height>this.width?this.width/2:this.height/2;var p=d*this.angleRatio,y=this.ordering,g=[];g="topology"===y?this.topologyOrdering():"topology-directed"===y?this.topologyOrdering(!0):"degree"===y?this.degreeOrdering():t;for(var v=this.clockwise,b=Math.ceil(r/c),_=0;_<r;++_){var O=o;O||null===i||null===s||(O=i+_*(s-i)/(r-1)),O||(O=10+100*_/(r-1));var j=a+_%b*p+2*Math.PI/c*Math.floor(_/b);v||(j=f-_%b*p-2*Math.PI/c*Math.floor(_/b)),g[_].x=n[0]+Math.cos(j)*O,g[_].y=n[1]+Math.sin(j)*O,g[_].weight=h[_]}return this.onLayoutEnd&&this.onLayoutEnd(),{nodes:g,edges:this.edges}}this.onLayoutEnd&&this.onLayoutEnd()},e.prototype.topologyOrdering=function(t){void 0===t&&(t=!1);var e=this.degrees,r=this.edges,n=this.nodes,o=u.clone(n),i=this.nodeMap,s=[o[0]],c=[n[0]],a=[],f=n.length;a[0]=!0,function(t,e,r,n){t.forEach((function(e,r){t[r].children=[],t[r].parent=[]})),n?e.forEach((function(e){var n=0;e.source&&(n=r[e.source]);var o=0;e.target&&(o=r[e.target]);var i=t[n].children,u=t[o].parent;i.push(t[o].id),u.push(t[n].id)})):e.forEach((function(e){var n=0;e.source&&(n=r[e.source]);var o=0;e.target&&(o=r[e.target]);var i=t[n].children,u=t[o].children;i.push(t[o].id),u.push(t[n].id)}))}(o,r,i,t);var d=0;return o.forEach((function(t,u){if(0!==u)if(u!==f-1&&e[u]===e[u+1]&&!function(t,e,r){for(var n=r.length,o=0;o<n;o++)if(t.id===r[o].source&&e.id===r[o].target||e.id===r[o].source&&t.id===r[o].target)return!0;return!1}(s[d],t,r)||a[u]){for(var l=s[d].children,h=!1,p=0;p<l.length;p++){var y=i[l[p]];if(e[y]===e[u]&&!a[y]){s.push(o[y]),c.push(n[i[o[y].id]]),a[y]=!0,h=!0;break}}for(var g=0;!h&&(a[g]||(s.push(o[g]),c.push(n[i[o[g].id]]),a[g]=!0,h=!0),++g!==f););}else s.push(t),c.push(n[i[t.id]]),a[u]=!0,d++})),c},e.prototype.degreeOrdering=function(){var t=this.nodes,e=[],r=this.degrees;return t.forEach((function(t,n){t.degree=r[n],e.push(t)})),e.sort(s),e},e.prototype.getType=function(){return"circular"},e}(i.Base);e.CircularLayout=c},16:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isFunction=void 0;e.isFunction=function(t){return"function"==typeof t}},197:function(t,e,r){"use strict";r.r(e);var n=r(158);e.default=n.CircularLayout},9:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Base=void 0;var n=function(){function t(){this.nodes=[],this.edges=[],this.combos=[],this.positions=[],this.destroyed=!1,this.onLayoutEnd=function(){}}return t.prototype.layout=function(t){return this.init(t),this.execute(!0)},t.prototype.init=function(t){this.nodes=t.nodes||[],this.edges=t.edges||[],this.combos=t.combos||[]},t.prototype.execute=function(t){},t.prototype.executeWithWorker=function(){},t.prototype.getDefaultCfg=function(){return{}},t.prototype.updateCfg=function(t){t&&Object.assign(this,t)},t.prototype.getType=function(){return"base"},t.prototype.destroy=function(){this.nodes=null,this.edges=null,this.combos=null,this.positions=null,this.destroyed=!0},t}();e.Base=n}}).default}));
//# sourceMappingURL=circularLayout.js.map