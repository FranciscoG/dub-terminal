!function(){"use strict";var e={},t=[],n=[];function o(o,r){var i,a,s,l,u=n;for(l=arguments.length;l-- >2;)t.push(arguments[l]);for(r&&null!=r.children&&(t.length||t.push(r.children),delete r.children);t.length;)if((a=t.pop())&&void 0!==a.pop)for(l=a.length;l--;)t.push(a[l]);else"boolean"==typeof a&&(a=null),(s="function"!=typeof o)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(s=!1)),s&&i?u[u.length-1]+=a:u===n?u=[a]:u.push(a),i=s;var c=new function(){};return c.nodeName=o,c.children=u,c.attributes=null==r?void 0:r,c.key=null==r?void 0:r.key,void 0!==e.vnode&&e.vnode(c),c}function r(e,t){for(var n in t)e[n]=t[n];return e}var i="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,a=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,s=[];function l(t){!t._dirty&&(t._dirty=!0)&&1==s.push(t)&&(e.debounceRendering||i)(u)}function u(){var e,t=s;for(s=[];e=t.pop();)e._dirty&&O(e)}function c(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function p(e){var t=r({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function f(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===a.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var s=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,m,s):e.removeEventListener(t,m,s),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var l=r&&t!==(t=t.replace(/^xlink\:?/,""));null==o||!1===o?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(l?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function m(t){return this._listeners[t.type](e.event&&e.event(t)||t)}var b=[],v=0,h=!1,_=!1;function g(){for(var t;t=b.pop();)e.afterMount&&e.afterMount(t),t.componentDidMount&&t.componentDidMount()}function y(e,t,n,o,r,i){v++||(h=null!=r&&void 0!==r.ownerSVGElement,_=null!=e&&!("__preactattr_"in e));var a=x(e,t,n,o,i);return r&&a.parentNode!==r&&r.appendChild(a),--v||(_=!1,i||g()),a}function x(e,t,n,o,r){var i=e,a=h;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),k(e,!0))),i.__preactattr_=!0,i;var s,l,u=t.nodeName;if("function"==typeof u)return function(e,t,n,o){var r=e&&e._component,i=r,a=e,s=r&&e._componentConstructor===t.nodeName,l=s,u=p(t);for(;r&&!l&&(r=r._parentComponent);)l=r.constructor===t.nodeName;r&&l&&(!o||r._component)?(T(r,u,3,n,o),e=r.base):(i&&!s&&(U(i),e=a=null),r=N(t.nodeName,u,n),e&&!r.nextBase&&(r.nextBase=e,a=null),T(r,u,1,n,o),e=r.base,a&&e!==a&&(a._component=null,k(a,!1)));return e}(e,t,n,o);if(h="svg"===u||"foreignObject"!==u&&h,u=String(u),(!e||!c(e,u))&&(s=u,(l=h?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,i=l,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),k(e,!0)}var m=i.firstChild,b=i.__preactattr_,v=t.children;if(null==b){b=i.__preactattr_={};for(var g=i.attributes,y=g.length;y--;)b[g[y].name]=g[y].value}return!_&&v&&1===v.length&&"string"==typeof v[0]&&null!=m&&void 0!==m.splitText&&null==m.nextSibling?m.nodeValue!=v[0]&&(m.nodeValue=v[0]):(v&&v.length||null!=m)&&function(e,t,n,o,r){var i,a,s,l,u,p=e.childNodes,f=[],m={},b=0,v=0,h=p.length,_=0,g=t?t.length:0;if(0!==h)for(var y=0;y<h;y++){var C=p[y],w=C.__preactattr_,N=g&&w?C._component?C._component.__key:w.key:null;null!=N?(b++,m[N]=C):(w||(void 0!==C.splitText?!r||C.nodeValue.trim():r))&&(f[_++]=C)}if(0!==g)for(var y=0;y<g;y++){l=t[y],u=null;var N=l.key;if(null!=N)b&&void 0!==m[N]&&(u=m[N],m[N]=void 0,b--);else if(!u&&v<_)for(i=v;i<_;i++)if(void 0!==f[i]&&(S=a=f[i],O=r,"string"==typeof(T=l)||"number"==typeof T?void 0!==S.splitText:"string"==typeof T.nodeName?!S._componentConstructor&&c(S,T.nodeName):O||S._componentConstructor===T.nodeName)){u=a,f[i]=void 0,i===_-1&&_--,i===v&&v++;break}u=x(u,l,n,o),s=p[y],u&&u!==e&&u!==s&&(null==s?e.appendChild(u):u===s.nextSibling?d(s):e.insertBefore(u,s))}var S,T,O;if(b)for(var y in m)void 0!==m[y]&&k(m[y],!1);for(;v<=_;)void 0!==(u=f[_--])&&k(u,!1)}(i,v,n,o,_||null!=b.dangerouslySetInnerHTML),function(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||f(e,o,n[o],n[o]=void 0,h);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||f(e,o,n[o],n[o]=t[o],h)}(i,t.attributes,b),h=a,i}function k(e,t){var n=e._component;n?U(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||d(e),C(e))}function C(e){for(e=e.lastChild;e;){var t=e.previousSibling;k(e,!0),e=t}}var w={};function N(e,t,n){var o,r=w[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),P.call(o,t,n)):((o=new P(t,n)).constructor=e,o.render=S),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function S(e,t,n){return this.constructor(e,n)}function T(t,n,o,r,i){t._disable||(t._disable=!0,(t.__ref=n.ref)&&delete n.ref,(t.__key=n.key)&&delete n.key,!t.base||i?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),r&&r!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=r),t.prevProps||(t.prevProps=t.props),t.props=n,t._disable=!1,0!==o&&(1!==o&&!1===e.syncComponentUpdates&&t.base?l(t):O(t,1,i)),t.__ref&&t.__ref(t))}function O(t,n,o,i){if(!t._disable){var a,s,l,u=t.props,c=t.state,d=t.context,f=t.prevProps||u,m=t.prevState||c,h=t.prevContext||d,_=t.base,x=t.nextBase,C=_||x,w=t._component,S=!1;if(_&&(t.props=f,t.state=m,t.context=h,2!==n&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(u,c,d)?S=!0:t.componentWillUpdate&&t.componentWillUpdate(u,c,d),t.props=u,t.state=c,t.context=d),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!S){a=t.render(u,c,d),t.getChildContext&&(d=r(r({},d),t.getChildContext()));var P,j,L=a&&a.nodeName;if("function"==typeof L){var M=p(a);(s=w)&&s.constructor===L&&M.key==s.__key?T(s,M,1,d,!1):(P=s,t._component=s=N(L,M,d),s.nextBase=s.nextBase||x,s._parentComponent=t,T(s,M,0,d,!1),O(s,1,o,!0)),j=s.base}else l=C,(P=w)&&(l=t._component=null),(C||1===n)&&(l&&(l._component=null),j=y(l,a,d,o||!_,C&&C.parentNode,!0));if(C&&j!==C&&s!==w){var A=C.parentNode;A&&j!==A&&(A.replaceChild(j,C),P||(C._component=null,k(C,!1)))}if(P&&U(P),t.base=j,j&&!i){for(var B=t,I=t;I=I._parentComponent;)(B=I).base=j;j._component=B,j._componentConstructor=B.constructor}}if(!_||o?b.unshift(t):S||(t.componentDidUpdate&&t.componentDidUpdate(f,m,h),e.afterUpdate&&e.afterUpdate(t)),null!=t._renderCallbacks)for(;t._renderCallbacks.length;)t._renderCallbacks.pop().call(t);v||i||g()}}function U(t){e.beforeUnmount&&e.beforeUnmount(t);var n=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var o=t._component;o?U(o):n&&(n.__preactattr_&&n.__preactattr_.ref&&n.__preactattr_.ref(null),t.nextBase=n,d(n),function(e){var t=e.constructor.name;(w[t]||(w[t]=[])).push(e)}(t),C(n)),t.__ref&&t.__ref(null)}function P(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function j(e,t,n){return y(n,e,{},!1,t,!1)}r(P.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=r({},n)),r(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),l(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),O(this,2)},render:function(){}});var L={command:"mute"};var M={command:"afk"};var A={mute:function(){var e=$(".mute"),t={};return e.hasClass("sound-muted")?(e.trigger("click"),t.success="mute OFF"):(e.trigger("click"),t.success="mute ON"),Object.assign({},L,t)},afk:function(e){var t={};if(!dubplus)return t.error="dubplus not found. Install extension first: https://dub.plus",Object.assign({},M,t);if(e&&e.length>0)$("#dubplus-afk .extra-icon").trigger("click"),$(".dp-modal textarea").val(e.join(" ")),setTimeout(function(){$("#dp-modal-confirm").trigger("click")},500),t.success="new AFK message saved";else{var n=document.querySelector("#dubplus-afk.dubplus-switch-on"),o=dubplus["dubplus-afk"];n?(o.turnOff(),o.toggleAndSave("dubplus-afk",!1),t.success="AFK mode off"):(o.turnOn(),o.toggleAndSave("dubplus-afk",!0),t.success="AFK mode on")}return Object.assign({},M,t)}},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},I=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t};function E(e){return e.error?o("p",{className:"dubterm-results__error"},e.error):e.success?o("p",{className:"dubterm-results__success"},e.success):e.info?o("p",{className:"dubterm-results__info"},e.info):null}j(o("style",{id:"dub-terminal-css"},'.dubterm-container {\n  position: fixed;\n  left: 0;\n  bottom: 56px;\n  bottom: 3.6rem;\n  z-index: 18;\n  width: 500px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  color: #839496;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n  -webkit-transform: translate(-460px, 0);\n          transform: translate(-460px, 0);\n  height: 80px; }\n\n.dubterm-open {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0); }\n\n.dubterm-toggle {\n  width: 50px;\n  height: 40px;\n  border: none;\n  background-color: #000;\n  cursor: pointer;\n  -ms-flex-item-align: end;\n      align-self: flex-end; }\n\n.dubterm-main {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  background-color: #002b36;\n  font-family: Consolas, monaco, monospace, "Courier New";\n  font-size: 13px; }\n\n.dubterm-results {\n  min-height: 12px;\n  padding: 11px 18px;\n  background-color: #073642;\n  height: 40px;\n  overflow: hidden;\n  overflow-y: auto;\n  border-top: 1px solid #93a1a1;\n  border-right: 1px solid #93a1a1;\n  border-bottom: 1px solid #93a1a1; }\n  .dubterm-results p {\n    margin: 0; }\n\n.dubterm-results__error {\n  color: #dc322f; }\n\n.dubterm-results__success {\n  color: #2aa198; }\n\n/* The input container */\n.dubterm-input-c {\n  position: relative;\n  width: 100%;\n  height: 40px; }\n\n.dubterm-input-c span {\n  position: absolute;\n  width: 10px;\n  left: 10px;\n  top: 10px;\n  display: block;\n  height: 100%; }\n\n.dubterm-input-c input {\n  border: none;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  color: #ccc;\n  font-family: Consolas, monaco, monospace, "Courier New";\n  font-size: 13px;\n  padding: 0 0 0 20px; }\n'),document.querySelector("head")),j(o(function(e){function t(){B(this,t);var e=z(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={toggleCss:"dubterm-open",result:{info:"hi "+Dubtrack.session.get("username")}},e.toggleTerminal=e.toggleTerminal.bind(e),e.checkInput=e.checkInput.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,P),I(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({toggleCss:""})},1500)}},{key:"toggleTerminal",value:function(e){"dubterm-open"===this.state.toggleCss?this.setState({toggleCss:""}):this.setState({toggleCss:"dubterm-open"})}},{key:"parseInput",value:function(e){var t=e.split(" "),n=t.shift();return A[n]?A[n](t):{error:n+" is not a recognized command"}}},{key:"checkInput",value:function(e){if(13===e.keyCode){if(e.preventDefault(),""===e.target.value)return;var t=this.parseInput(e.target.value);this.setState({result:t}),e.target.value=""}}},{key:"render",value:function(e,t){return o("div",{id:"dub-terminal",className:("dubterm-container "+t.toggleCss).trim()},o("div",{className:"dubterm-main"},o("div",{className:"dubterm-results"},o(E,t.result)),o("div",{className:"dubterm-input-c"},o("input",{onKeyUp:this.checkInput,type:"text",id:"dubterm-input"}),o("span",null,">"))),o("button",{onClick:this.toggleTerminal,className:"dubterm-toggle"},o("span",null,">_")))}}]),t}(),null),document.body)}();
//# sourceMappingURL=dub-terminal.js.map
