import{_ as N,b as W}from"./mitt.61a19a52.js";function A(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var j=A,C=N,M=function(){return C.Date.now()},B=M,R=/\s/;function F(e){for(var n=e.length;n--&&R.test(e.charAt(n)););return n}var G=F,D=G,H=/^\s+/;function P(e){return e&&e.slice(0,D(e)+1).replace(H,"")}var U=P;function X(e){return e!=null&&typeof e=="object"}var q=X,w=W,z=q,J="[object Symbol]";function K(e){return typeof e=="symbol"||z(e)&&w(e)==J}var Q=K,V=U,h=j,Y=Q,O=0/0,Z=/^[-+]0x[0-9a-f]+$/i,ee=/^0b[01]+$/i,ne=/^0o[0-7]+$/i,re=parseInt;function te(e){if(typeof e=="number")return e;if(Y(e))return O;if(h(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=h(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=V(e);var i=ee.test(e);return i||ne.test(e)?re(e.slice(2),i?2:8):Z.test(e)?O:+e}var ie=te,ae=j,y=B,$=ie,fe="Expected a function",oe=Math.max,se=Math.min;function ue(e,n,i){var o,u,b,s,t,f,c=0,x=!1,m=!1,v=!0;if(typeof e!="function")throw new TypeError(fe);n=$(n)||0,ae(i)&&(x=!!i.leading,m="maxWait"in i,b=m?oe($(i.maxWait)||0,n):b,v="trailing"in i?!!i.trailing:v);function T(r){var a=o,d=u;return o=u=void 0,c=r,s=e.apply(d,a),s}function E(r){return c=r,t=setTimeout(l,n),x?T(r):s}function k(r){var a=r-f,d=r-c,_=n-a;return m?se(_,b-d):_}function I(r){var a=r-f,d=r-c;return f===void 0||a>=n||a<0||m&&d>=b}function l(){var r=y();if(I(r))return p(r);t=setTimeout(l,k(r))}function p(r){return t=void 0,v&&o?T(r):(o=u=void 0,s)}function S(){t!==void 0&&clearTimeout(t),c=0,o=f=u=t=void 0}function L(){return t===void 0?s:p(y())}function g(){var r=y(),a=I(r);if(o=arguments,u=this,f=r,a){if(t===void 0)return E(f);if(m)return clearTimeout(t),t=setTimeout(l,n),T(f)}return t===void 0&&(t=setTimeout(l,n)),s}return g.cancel=S,g.flush=L,g}var me=ue;export{me as d,j as i};
