!function(){"use strict";var e={},t=[],n=[];function o(o,r){var i,a,l,s,p=n;for(s=arguments.length;s-- >2;)t.push(arguments[s]);for(r&&null!=r.children&&(t.length||t.push(r.children),delete r.children);t.length;)if((a=t.pop())&&void 0!==a.pop)for(s=a.length;s--;)t.push(a[s]);else"boolean"==typeof a&&(a=null),(l="function"!=typeof o)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(l=!1)),l&&i?p[p.length-1]+=a:p===n?p=[a]:p.push(a),i=l;var u=new function(){};return u.nodeName=o,u.children=p,u.attributes=null==r?void 0:r,u.key=null==r?void 0:r.key,void 0!==e.vnode&&e.vnode(u),u}function r(e,t){for(var n in t)e[n]=t[n];return e}var i="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,a=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,l=[];function s(t){!t._dirty&&(t._dirty=!0)&&1==l.push(t)&&(e.debounceRendering||i)(p)}function p(){var e,t=l;for(l=[];e=t.pop();)e._dirty&&U(e)}function u(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function c(e){var t=r({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function d(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===a.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,m,l):e.removeEventListener(t,m,l),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var s=r&&t!==(t=t.replace(/^xlink\:?/,""));null==o||!1===o?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function m(t){return this._listeners[t.type](e.event&&e.event(t)||t)}var b=[],h=0,v=!1,_=!1;function g(){for(var t;t=b.pop();)e.afterMount&&e.afterMount(t),t.componentDidMount&&t.componentDidMount()}function y(e,t,n,o,r,i){h++||(v=null!=r&&void 0!==r.ownerSVGElement,_=null!=e&&!("__preactattr_"in e));var a=x(e,t,n,o,i);return r&&a.parentNode!==r&&r.appendChild(a),--h||(_=!1,i||g()),a}function x(e,t,n,o,r){var i=e,a=v;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),C(e,!0))),i.__preactattr_=!0,i;var l,s,p=t.nodeName;if("function"==typeof p)return function(e,t,n,o){var r=e&&e._component,i=r,a=e,l=r&&e._componentConstructor===t.nodeName,s=l,p=c(t);for(;r&&!s&&(r=r._parentComponent);)s=r.constructor===t.nodeName;r&&s&&(!o||r._component)?(T(r,p,3,n,o),e=r.base):(i&&!l&&(P(i),e=a=null),r=N(t.nodeName,p,n),e&&!r.nextBase&&(r.nextBase=e,a=null),T(r,p,1,n,o),e=r.base,a&&e!==a&&(a._component=null,C(a,!1)));return e}(e,t,n,o);if(v="svg"===p||"foreignObject"!==p&&v,p=String(p),(!e||!u(e,p))&&(l=p,(s=v?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l)).normalizedNodeName=l,i=s,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),C(e,!0)}var m=i.firstChild,b=i.__preactattr_,h=t.children;if(null==b){b=i.__preactattr_={};for(var g=i.attributes,y=g.length;y--;)b[g[y].name]=g[y].value}return!_&&h&&1===h.length&&"string"==typeof h[0]&&null!=m&&void 0!==m.splitText&&null==m.nextSibling?m.nodeValue!=h[0]&&(m.nodeValue=h[0]):(h&&h.length||null!=m)&&function(e,t,n,o,r){var i,a,l,s,p,c=e.childNodes,d=[],m={},b=0,h=0,v=c.length,_=0,g=t?t.length:0;if(0!==v)for(var y=0;y<v;y++){var k=c[y],w=k.__preactattr_,N=g&&w?k._component?k._component.__key:w.key:null;null!=N?(b++,m[N]=k):(w||(void 0!==k.splitText?!r||k.nodeValue.trim():r))&&(d[_++]=k)}if(0!==g)for(var y=0;y<g;y++){s=t[y],p=null;var N=s.key;if(null!=N)b&&void 0!==m[N]&&(p=m[N],m[N]=void 0,b--);else if(!p&&h<_)for(i=h;i<_;i++)if(void 0!==d[i]&&(S=a=d[i],U=r,"string"==typeof(T=s)||"number"==typeof T?void 0!==S.splitText:"string"==typeof T.nodeName?!S._componentConstructor&&u(S,T.nodeName):U||S._componentConstructor===T.nodeName)){p=a,d[i]=void 0,i===_-1&&_--,i===h&&h++;break}p=x(p,s,n,o),l=c[y],p&&p!==e&&p!==l&&(null==l?e.appendChild(p):p===l.nextSibling?f(l):e.insertBefore(p,l))}var S,T,U;if(b)for(var y in m)void 0!==m[y]&&C(m[y],!1);for(;h<=_;)void 0!==(p=d[_--])&&C(p,!1)}(i,h,n,o,_||null!=b.dangerouslySetInnerHTML),function(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||d(e,o,n[o],n[o]=void 0,v);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||d(e,o,n[o],n[o]=t[o],v)}(i,t.attributes,b),v=a,i}function C(e,t){var n=e._component;n?P(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||f(e),k(e))}function k(e){for(e=e.lastChild;e;){var t=e.previousSibling;C(e,!0),e=t}}var w={};function N(e,t,n){var o,r=w[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),L.call(o,t,n)):((o=new L(t,n)).constructor=e,o.render=S),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function S(e,t,n){return this.constructor(e,n)}function T(t,n,o,r,i){t._disable||(t._disable=!0,(t.__ref=n.ref)&&delete n.ref,(t.__key=n.key)&&delete n.key,!t.base||i?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),r&&r!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=r),t.prevProps||(t.prevProps=t.props),t.props=n,t._disable=!1,0!==o&&(1!==o&&!1===e.syncComponentUpdates&&t.base?s(t):U(t,1,i)),t.__ref&&t.__ref(t))}function U(t,n,o,i){if(!t._disable){var a,l,s,p=t.props,u=t.state,f=t.context,d=t.prevProps||p,m=t.prevState||u,v=t.prevContext||f,_=t.base,x=t.nextBase,k=_||x,w=t._component,S=!1;if(_&&(t.props=d,t.state=m,t.context=v,2!==n&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(p,u,f)?S=!0:t.componentWillUpdate&&t.componentWillUpdate(p,u,f),t.props=p,t.state=u,t.context=f),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!S){a=t.render(p,u,f),t.getChildContext&&(f=r(r({},f),t.getChildContext()));var L,M,B=a&&a.nodeName;if("function"==typeof B){var E=c(a);(l=w)&&l.constructor===B&&E.key==l.__key?T(l,E,1,f,!1):(L=l,t._component=l=N(B,E,f),l.nextBase=l.nextBase||x,l._parentComponent=t,T(l,E,0,f,!1),U(l,1,o,!0)),M=l.base}else s=k,(L=w)&&(s=t._component=null),(k||1===n)&&(s&&(s._component=null),M=y(s,a,f,o||!_,k&&k.parentNode,!0));if(k&&M!==k&&l!==w){var O=k.parentNode;O&&M!==O&&(O.replaceChild(M,k),L||(k._component=null,C(k,!1)))}if(L&&P(L),t.base=M,M&&!i){for(var W=t,j=t;j=j._parentComponent;)(W=j).base=M;M._component=W,M._componentConstructor=W.constructor}}if(!_||o?b.unshift(t):S||(t.componentDidUpdate&&t.componentDidUpdate(d,m,v),e.afterUpdate&&e.afterUpdate(t)),null!=t._renderCallbacks)for(;t._renderCallbacks.length;)t._renderCallbacks.pop().call(t);h||i||g()}}function P(t){e.beforeUnmount&&e.beforeUnmount(t);var n=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var o=t._component;o?P(o):n&&(n.__preactattr_&&n.__preactattr_.ref&&n.__preactattr_.ref(null),t.nextBase=n,f(n),function(e){var t=e.constructor.name;(w[t]||(w[t]=[])).push(e)}(t),k(n)),t.__ref&&t.__ref(null)}function L(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}r(L.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=r({},n)),r(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),s(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),U(this,2)},render:function(){}});var M,B,E,O=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},W=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),j=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},z=function(e){function t(){O(this,t);var e=j(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={results:"",toggleCss:"dubterm-open"},e.toggleTerminal=e.toggleTerminal.bind(e),e.checkInput=e.checkInput.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,L),W(t,[{key:"componentWillMount",value:function(){var e=document.createElement("style");e.innerHTML='.dubterm-container {\n  position: fixed;\n  left: 0;\n  bottom: 56px;\n  bottom: 3.5rem;\n  z-index: 18;\n  width: 500px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  color: #839496;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n  -webkit-transform: translate(-460px, 0);\n          transform: translate(-460px, 0);\n  height: 80px; }\n\n.dubterm-open {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0); }\n\n.dubterm-toggle {\n  width: 50px;\n  height: 40px;\n  border: none;\n  background-color: #000;\n  cursor: pointer;\n  -ms-flex-item-align: end;\n      align-self: flex-end; }\n\n.dubterm-main {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  background-color: #002b36;\n  font-family: Consolas, monaco, monospace, "Courier New";\n  font-size: 13px; }\n\n.dubterm-results {\n  min-height: 12px;\n  padding: 5px;\n  background-color: #073642;\n  height: 40px; }\n\n/* The input container */\n.dubterm-input-c {\n  position: relative;\n  width: 100%;\n  height: 40px; }\n\n.dubterm-input-c span {\n  position: absolute;\n  width: 10px;\n  left: 11px;\n  top: 10px;\n  display: block;\n  height: 100%; }\n\n.dubterm-input-c input {\n  border: none;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  color: #ccc;\n  font-family: Consolas, monaco, monospace, "Courier New";\n  font-size: 13px;\n  padding: 0 0 0 20px; }\n',e.id="dub-terminal-css",document.head.appendChild(e)}},{key:"toggleTerminal",value:function(e){"dubterm-open"===this.state.toggleCss?this.setState({toggleCss:""}):this.setState({toggleCss:"dubterm-open"})}},{key:"checkInput",value:function(e){if(13===e.keyCode){if(console.log(e),e.preventDefault(),""===e.target.value)return;console.log(e.target.value),this.setState({results:e.target.value}),e.target.value=""}}},{key:"render",value:function(e,t){return o("div",{id:"dub-terminal",className:("dubterm-container "+t.toggleCss).trim()},o("div",{className:"dubterm-main"},o("div",{className:"dubterm-results"},t.results),o("div",{className:"dubterm-input-c"},o("input",{onKeyUp:this.checkInput,type:"text",id:"dubterm-input"}),o("span",null,">"))),o("button",{onClick:this.toggleTerminal,className:"dubterm-toggle"},o("span",null,">_")))}}]),t}();M=o(z,null),B=document.body,y(E,M,{},!1,B,!1)}();
//# sourceMappingURL=dub-terminal.js.map
