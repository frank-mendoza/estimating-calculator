parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Y661":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,o){o=o||window;for(var e=0;e<this.length;e++)t.call(o,this[e],e,this)})};exports.default=t;
},{}],"t0Kg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){for(var e=document.getElementsByClassName("js-select"),n=document.getElementsByClassName("js-radio"),t=document.getElementsByClassName("js-radio-2"),r=document.getElementsByClassName("js-input-radio"),l=document.getElementsByClassName("js-select-simulator"),a=document.getElementsByClassName("js-radio-overseas"),s=document.getElementsByClassName("js-radio-nooverseas"),o=document.getElementsByClassName("js-oversea-radio"),i=document.getElementsByClassName("js-oversea-radio-2"),c=document.getElementsByClassName("js-select-people-1"),u=document.getElementsByClassName("js-select-people-2"),d=document.getElementsByClassName("js-select-people"),L=document.getElementsByClassName("js-select-toggle"),m=document.getElementsByClassName("js-select-wrap"),v=document.getElementsByClassName("js-table-value"),g=document.getElementsByClassName("js-table-expert"),M=document.querySelector(".js-img-show"),H=document.querySelector(".js-total-value"),T=document.querySelector(".js-total-amount"),f=document.querySelector(".js-total-discount"),p=document.querySelector(".js-advisory"),S=document.querySelector(".js-tax"),y=document.querySelector(".js-stamp"),h=document.querySelector(".js-matters"),j=document.querySelector(".js-incstamp"),E=document.querySelector(".js-articles-table"),I=document.querySelector(".js-reg-table"),q=document.querySelector(".js-founder"),B=document.querySelector(".js-investor"),C=document.querySelector(".js-investment"),N=document.querySelector(".js-officers"),k=document.querySelector(".js-sign-stamp"),w=document.querySelector(".js-establishment"),b=document.querySelector(".js-reg-liscence"),x=document.querySelector(".js-discount-3"),A=document.querySelector(".js-notif-discount"),_=document.querySelector(".js-registration"),O=document.querySelector(".js-discount-amount"),P=document.querySelector(".js-discount-value"),z=document.querySelector(".js-discount-value2"),D=document.getElementsByClassName("js-discount"),F=document.getElementsByClassName("js-discount2"),G=document.getElementById("disc"),J=document.getElementById("disc2"),K=document.getElementById("disc3"),Q=document.getElementById("disc4"),R=0;R<D.length;R++)D[R].addEventListener("change",function(e){var n=e.target,t=n.name;"設⽴後の税務顧問契約"===t&&(null==x||x.classList.add("show"),null==S||S.classList.add("tax"),null==p||p.classList.add("active"),t=n.value),"設⽴後の税務署等への届出"===t&&(null==M||M.classList.remove("show")),V(),ge()});for(var U=0;U<F.length;U++)F[U].addEventListener("change",function(e){var n=e.target,t=n.name;"設⽴後の税務顧問契約"===t&&(null==p||p.classList.remove("active"),null==S||S.classList.remove("active"),null==x||x.classList.remove("show"),null==M||M.classList.remove("show"),t=n.value),"設⽴後の税務署等への届出"===t&&(null==M||M.classList.add("show")),V(),ge()});for(var V=function(){var e=G,n=J,t=K,r=Q,l=A,a=null==l?void 0:l.innerHTML;n.checked&&r.checked&&(a="20,000",l.innerHTML=a,null==M||M.classList.remove("show"),null!=z&&(z.innerHTML="20,000"),null!=f&&(f.innerHTML="0"),null!=_&&(_.innerHTML=l.innerHTML)),e.checked&&r.checked&&(a="20,000",l.innerHTML=a,null==M||M.classList.add("show"),null!=f&&(f.innerHTML="30,000"),null!=P&&null!=z&&(P.innerHTML="10,000",z.innerHTML="20,000"),null!=_&&(_.innerHTML=l.innerHTML)),e.checked&&t.checked&&(a="0",l.innerHTML=a,null!=f&&(f.innerHTML="10,000"),null!=P&&null!=z&&(z.innerHTML="20,000"),null!=_&&(_.innerHTML=l.innerHTML)),n.checked&&t.checked&&(a="0",l.innerHTML=a,null==x||x.classList.remove("show"),null!=f&&(f.innerHTML="0"),null!=P&&null!=z&&(P.innerHTML="10,000",z.innerHTML="20,000"),null!=_&&(_.innerHTML=l.innerHTML))},W=function(e){n[e].addEventListener("change",function(n){var t=n.target,l=r[e],a=t.name,s=t.name;a=t.value,l.innerHTML=parseInt(a).toLocaleString(),"定款作成方法"===s&&null!=j&&(j.innerHTML=parseInt(a).toLocaleString()),"法⼈形態"===s&&null!=I&&(I.innerHTML=parseInt(a).toLocaleString()),"印鑑"===s&&null!=k&&(k.innerHTML=parseInt(a).toLocaleString()),ge()})},X=0;X<n.length;X++)W(X);for(var Y=function(e){t[e].addEventListener("change",function(n){var t=n.target,l=r[e],a=t.name,s=t.name;a=t.value,l.innerHTML=parseInt(a).toLocaleString(),"定款作成方法"===s&&null!=j&&(j.innerHTML=parseInt(a).toLocaleString()),"法⼈形態"===s&&null!=I&&(I.innerHTML=parseInt(a).toLocaleString()),"印鑑"===s&&null!=k&&(k.innerHTML=parseInt(a).toLocaleString()),ge()})},Z=0;Z<t.length;Z++)Y(Z);for(var $=function(n){e[n].addEventListener("change",function(e){var t=e.target,r=l[n],a=t.name,s=t.name;a=t.value,r.innerHTML=parseInt(a).toLocaleString(),"現物出資"===s&&null!=C&&(C.innerHTML=parseInt(a).toLocaleString()),"株主・発起⼈"===s&&null!=q&&(q.innerHTML=parseInt(a).toLocaleString()),"謄本の必要部数"===s&&null!=y&&(y.innerHTML=parseInt(a).toLocaleString()),"資本⾦"===s&&null!=E&&(E.innerHTML=parseInt(a).toLocaleString()),"定款の必要部数"===s&&null!=h&&(h.innerHTML=parseInt(a).toLocaleString()),"設⽴までの希望⽇数"===s&&null!=w&&(w.innerHTML=parseInt(a).toLocaleString()),ge()})},ee=0;ee<e.length;ee++)$(ee);for(var ne=function(e){a[e].addEventListener("change",function(n){var t=n.target,r=L[e],l=o[e],a=(t.name,t.name);if(t.value){l.innerHTML=1e4.toLocaleString()}"出資者"===a&&null!=B&&(B.innerHTML=l.innerHTML),r.value="0",L[e].classList.add("active"),m[e].classList.add("active"),ge()})},te=0;te<a.length;te++)ne(te);for(var re=function(e){s[e].addEventListener("change",function(n){var t=n.target,r=L[e],l=o[e],a=(t.name,t.name);if(t.value){l.innerHTML=(0).toLocaleString()}"出資者"===a&&null!=B&&(B.innerHTML=l.innerHTML),r.value="0",L[e].classList.add("active"),m[e].classList.add("active"),ge()})},le=0;le<s.length;le++)re(le);for(var ae=function(e){a[e].addEventListener("change",function(n){var t=n.target,r=(u[e],o[e]),l=(t.name,t.name);if(t.value){r.innerHTML=1e4.toLocaleString()}"役員⼈数"===l&&null!=N&&(N.innerHTML=r.innerHTML),L[e].classList.add("active"),m[e].classList.add("active"),ge()})},se=0;se<a.length;se++)ae(se);for(var oe=function(e){s[e].addEventListener("change",function(n){var t=n.target,r=(u[e],o[e]),l=(t.name,t.name);if(t.value){r.innerHTML=(0).toLocaleString()}"役員⼈数"===l&&null!=N&&(N.innerHTML=r.innerHTML),L[e].classList.add("active"),m[e].classList.add("active"),ge()})},ie=0;ie<s.length;ie++)oe(ie);for(var ce=function(e){c[e].addEventListener("change",function(n){var t=document.querySelectorAll('input[name="出資者"]:checked'),r=n.target,l=o[e],a=r.name,s=r.name,i=t[e].id||0;if(t){if(a=r.value,"0"===i){var c=a;l.innerHTML=parseInt(c).toLocaleString(),"出資者"===s&&null!=B&&(B.innerHTML=l.innerHTML)}if("1"===i){var u=parseInt(a)+1e4;l.innerHTML=u.toLocaleString(),"出資者"===s&&null!=B&&(B.innerHTML=l.innerHTML)}}ge()})},ue=0;ue<c.length;ue++)ce(ue);for(var de=function(e){u[e].addEventListener("change",function(n){var t=document.querySelectorAll('input[name="役員⼈数"]:checked'),r=n.target,l=i[e],a=r.name,s=r.name;if(t){var o=t[e].id||0;if(a=r.value,"0"===o){var c=a;l.innerHTML=parseInt(c).toLocaleString(),"役員⼈数"===s&&null!=N&&(N.innerHTML=l.innerHTML)}if("1"===o){var u=parseInt(a)+1e4;l.innerHTML=u.toLocaleString(),"役員⼈数"===s&&null!=N&&(N.innerHTML=l.innerHTML)}}ge()})},Le=0;Le<u.length;Le++)de(Le);for(var me=function(e){d[e].addEventListener("change",function(n){var t=n.target,r=o[e],l=t.name;l=t.value,r.innerHTML=parseInt(l).toLocaleString(),ge()})},ve=0;ve<d.length&&ve<a.length;ve++)me(ve);var ge=function(){var e=0,n=0,t=0,r=0,l=0;if(null!=q&&null!=C&&null!=B&&null!=N){var a=q.innerHTML,s=C.innerHTML,o=B.innerHTML,i=N.innerHTML,c=s.replace(",",""),u=o.replace(",",""),d=i.replace(",",""),L=a.replace(",","");r=parseInt(L)+parseInt(c)+parseInt(u)+parseInt(d)}null!=b&&(b.innerHTML=r.toLocaleString());for(var m=0;m<g.length;m+=1){var M=g[m].innerHTML.replace(",","");parseInt(M)&&(n+=parseInt(M),null!=O&&(O.innerHTML=n.toLocaleString()))}for(m=0;m<v.length;m+=1){var p=v[m].innerHTML.replace(",","");parseInt(p)&&(e+=parseInt(p),null!=H&&(H.innerHTML=e.toLocaleString()))}if(null!=H){var S=(null==H?void 0:H.innerHTML).replace(",","");parseInt(S)}if(null!=f){var y=(null==f?void 0:f.innerHTML).replace(",","");t=parseInt(y)}l=e+n-t,null!=T&&(T.innerHTML=l.toLocaleString())}};exports.default=e;
},{}],"Rgmk":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("./components/forEachPolyfill")),o=e(require("./components/simulator"));document.addEventListener("DOMContentLoaded",function(){(0,t.default)(),(0,o.default)()},!1);
},{"./components/forEachPolyfill":"Y661","./components/simulator":"t0Kg"}]},{},["Rgmk"], null)
//# sourceMappingURL=/js/index.js.map