(this["webpackJsonpchim-shop-chai"]=this["webpackJsonpchim-shop-chai"]||[]).push([[0],{13:function(n,t,e){n.exports=e(23)},23:function(n,t,e){"use strict";e.r(t);var a=e(1),r=e(0),i=e.n(r),o=e(8),c=e.n(o),l=e(2),u=e(3),m="https://panjs.com/ywc.json",s={small:577,medium:769,large:992,extra:1200},d={text:"#333333",primary:"#213a8f",secondary:"#e6332a",tertiary:"#fbbc33"},f={height:60};function h(){var n=Object(a.a)(["\n  display: inline-block;\n  width: 64px;\n  height: 64px;\n\n  &:after {\n    content: '';\n    display: block;\n    width: 46px;\n    height: 46px;\n    margin: 1px;\n    border-radius: 50%;\n    border: 5px solid white;\n    border-color: white transparent white transparent;\n    animation: "," 1.2s linear infinite;\n  }\n"]);return h=function(){return n},n}function p(){var n=Object(a.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return p=function(){return n},n}var g=Object(l.d)(p()),b=l.c.div(h(),g),x=function(){return i.a.createElement(b,null)};function v(){var n=Object(a.a)(["\n      pointer-events: none;\n    "]);return v=function(){return n},n}function w(){var n=Object(a.a)(["\n  background-color: rgba(0, 0, 0, 0.9);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: ",";\n  transition: 1s ease-in-out;\n\n  ","\n"]);return w=function(){return n},n}var O=l.c.div(w(),(function(n){return n.isOpen?1:0}),(function(n){return!n.isOpen&&Object(l.b)(v())})),j=function(n){var t=n.isOpen,e=void 0!==t&&t;return i.a.createElement(O,{isOpen:e},i.a.createElement(x,null))};function E(){var n=Object(a.a)(["\n  @media (max-width: ","px) {\n    color: rgba(0, 0, 0, 0.5);\n\n    &:hover {\n      color: rgba(0, 0, 0, 0.7);\n    }\n  }\n\n  @media (min-width: ","px) {\n    font-family: 'TATSanaChon', sans-serif;\n    font-weight: bold;\n    font-size: 14px;\n    position: relative;\n    white-space: nowrap;\n\n    &:after {\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 6px;\n      bottom: -14px;\n      left: 0;\n      transform: scaleX(0);\n      visibility: hidden;\n      transition: all 0.3s ease-in-out;\n      background-color: ",";\n    }\n\n    &:hover {\n      color: ",";\n\n      &:after {\n        transform: scaleX(1);\n        visibility: visible;\n      }\n    }\n  }\n"]);return E=function(){return n},n}function y(){var n=Object(a.a)(["\n  padding: 0 15px;\n  display: inline;\n  box-sizing: border-box;\n\n  @media (max-width: ","px) {\n    width: 100%;\n    padding: 0.5rem 0;\n    display: block;\n    text-align: right;\n  }\n"]);return y=function(){return n},n}var k=l.c.div(y(),s.small),T=l.c.a(E(),s.small,s.small,d.primary,d.primary),z=function(n){var t=n.href,e=n.children;return i.a.createElement(k,null,i.a.createElement(T,{href:t,target:"_blank"},e))};function S(){var n=Object(a.a)(["\n      top: 11px;\n      transform: rotate(-135deg);\n    "]);return S=function(){return n},n}function C(){var n=Object(a.a)(["\n  top: 20px;\n  ","\n"]);return C=function(){return n},n}function A(){var n=Object(a.a)(["\n      opacity: 0;\n      left: -60px;\n      pointer-events: none;\n    "]);return A=function(){return n},n}function _(){var n=Object(a.a)(["\n  top: 10px;\n  ","\n"]);return _=function(){return n},n}function B(){var n=Object(a.a)(["\n      top: 11px;\n      transform: rotate(135deg);\n    "]);return B=function(){return n},n}function F(){var n=Object(a.a)(["\n  top: 0;\n  ","\n"]);return F=function(){return n},n}function I(){var n=Object(a.a)(["\n  width: 100%;\n  height: 3px;\n  position: absolute;\n  left: 0;\n  background-color: ",";\n  transition: 0.25s ease-in-out;\n  transform: rotate(0);\n  opacity: 1;\n"]);return I=function(){return n},n}function M(){var n=Object(a.a)(["\n  width: 30px;\n  height: 20px;\n  position: relative;\n  cursor: pointer;\n"]);return M=function(){return n},n}var H=l.c.div(M()),L=l.c.div(I(),d.text),R=Object(l.c)(L)(F(),(function(n){return n.active&&Object(l.b)(B())})),K=Object(l.c)(L)(_(),(function(n){return n.active&&Object(l.b)(A())})),D=Object(l.c)(L)(C(),(function(n){return n.active&&Object(l.b)(S())})),G=function(n){var t=n.active,e=void 0!==t&&t,a=n.onClick;return i.a.createElement(H,{onClick:a},i.a.createElement(R,{active:e}),i.a.createElement(K,{active:e}),i.a.createElement(D,{active:e}))};function J(){var n=Object(a.a)(["\n  height: 100%;\n"]);return J=function(){return n},n}function W(){var n=Object(a.a)(["\n        max-height: ","px;\n      "]);return W=function(){return n},n}function X(){var n=Object(a.a)(["\n  max-width: 100%;\n  height: ","px;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  overflow: auto;\n\n  @media (max-width: ","px) {\n    width: 100%;\n    height: auto;\n    max-height: 0;\n    display: block;\n    overflow: hidden;\n    transition: max-height 0.3s ease-in-out;\n\n    ","\n  }\n"]);return X=function(){return n},n}function P(){var n=Object(a.a)(["\n  width: 100%;\n  height: ","px;\n  display: none;\n\n  @media (max-width: ","px) {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n"]);return P=function(){return n},n}function $(){var n=Object(a.a)(["\n  background-color: white;\n  width: 100%;\n  padding: 8px 15px;\n  min-height: ","px;\n  top: 0;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 99;\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);\n  box-sizing: border-box;\n"]);return $=function(){return n},n}var q=l.c.div($(),f.height),N=l.c.div(P(),f.height-16,s.small),Q=l.c.div(X(),f.height-16,s.small,(function(n){return n.isOpen&&Object(l.b)(W(),(function(n){return 44*n.itemCount}))})),U=l.c.img.attrs({src:"/chim-shop-chai/images/logo.png"})(J()),V=function(n){var t=n.items,e=void 0===t?[]:t,a=Object(r.useState)(!1),o=Object(u.a)(a,2),c=o[0],l=o[1];return i.a.createElement(q,null,i.a.createElement(N,null,i.a.createElement(U,null),i.a.createElement(G,{active:c,onClick:function(){return l(!c)}})),i.a.createElement(Q,{isOpen:c,itemCount:e.length},e.map((function(n,t){var e=n.label,a=n.href;return i.a.createElement(z,{key:t,href:a},e)}))))};function Y(){var n=Object(a.a)(["\n  max-width: 100%;\n  height: auto;\n"]);return Y=function(){return n},n}function Z(){var n=Object(a.a)(["\n  height: 100%;\n  width: 33.333333%;\n  padding: 20px;\n  background-image: url(",");\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]);return Z=function(){return n},n}function nn(){var n=Object(a.a)(["\n  height: 350px;\n  display: flex;\n  justify-content: center;\n\n  @media (max-width: ","px) {\n    height: 242px;\n  }\n\n  @media (max-width: ","px) {\n    height: 221px;\n  }\n"]);return nn=function(){return n},n}var tn=l.c.div(nn(),s.medium,s.small),en=l.c.div(Z(),(function(n){return n.src})),an=l.c.img.attrs({src:"/chim-shop-chai/images/hero-banner/banner-logo.png"})(Y()),rn=function(){return i.a.createElement(tn,null,i.a.createElement(en,{src:"".concat("/chim-shop-chai","/images/hero-banner/banner-left.png")}),i.a.createElement(en,{src:"".concat("/chim-shop-chai","/images/hero-banner/banner-center.png")},i.a.createElement(an,null)),i.a.createElement(en,{src:"".concat("/chim-shop-chai","/images/hero-banner/banner-right.png")}))};function on(){var n=Object(a.a)(["\n  color: white;\n  background-color: ",";\n  font-size: 24px;\n  font-weight: bold;\n  padding: 10px 50px;\n  border-radius: 5px;\n  box-shadow: 0 15px 30px 0 rgba(28, 78, 132, 0.4);\n\n  &:hover {\n    background-color: ",";\n  }\n\n  &:after {\n    content: '';\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n    position: absolute;\n    left: 0;\n    right: 0;\n    z-index: -1;\n\n    @media (max-width: ","px) {\n      display: none;\n    }\n  }\n\n  @media (max-width: ","px) {\n    font-size: 20px;\n    padding: 20px;\n  }\n\n  @media (max-width: ","px) {\n    font-size: 18px;\n    padding: 10px;\n  }\n"]);return on=function(){return n},n}function cn(){var n=Object(a.a)(["\n  width: fit-content;\n  max-width: 100%;\n  margin: auto;\n  padding: 10px 15px;\n  display: block;\n"]);return cn=function(){return n},n}function ln(){var n=Object(a.a)(["\n  color: ",";\n  font-size: 48px;\n  margin: -10px 0 0;\n\n  @media (max-width: ","px) {\n    font-size: 36px;\n  }\n\n  @media (max-width: ","px) {\n    font-size: 30px;\n  }\n"]);return ln=function(){return n},n}function un(){var n=Object(a.a)(["\n  margin: 0;\n"]);return un=function(){return n},n}function mn(){var n=Object(a.a)(["\n  font-family: 'TATSanaChonBold', sans-serif;\n  font-weight: bold;\n  text-align: center;\n  padding: 26px 0;\n  z-index: 99;\n"]);return mn=function(){return n},n}var sn=l.c.div(mn()),dn=l.c.p(un()),fn=l.c.p(ln(),d.secondary,s.medium,s.small),hn=l.c.a.attrs({target:"_blank"})(cn()),pn=l.c.div.attrs((function(n){return{dangerouslySetInnerHTML:{__html:n.html}}}))(on(),d.primary,d.tertiary,s.small,s.medium,s.small),gn=function(n){var t=n.duration,e=n.link,a=void 0===e?{}:e;return i.a.createElement(sn,null,i.a.createElement(dn,null,"\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48"),i.a.createElement(fn,null,t),i.a.createElement(hn,{href:a.href},i.a.createElement(pn,{html:a.label})))};function bn(){var n=Object(a.a)(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 30px;\n  box-sizing: border-box;\n\n  @media (min-width: ","px) {\n    padding: 0 15px;\n    max-width: 540px;\n  }\n\n  @media (min-width: ","px) {\n    max-width: 720px;\n  }\n\n  @media (min-width: ","px) {\n    max-width: 960px;\n  }\n\n  @media (min-width: ","px) {\n    max-width: 1140px;\n  }\n"]);return bn=function(){return n},n}var xn=l.c.div(bn(),s.small,s.medium,s.large,s.extra);function vn(){var n=Object(a.a)(["\n  font-size: 18px;\n  width: 100%;\n  margin: 0;\n"]);return vn=function(){return n},n}function wn(){var n=Object(a.a)(["\n  font-size: 18px;\n  font-family: 'TATSanaChonBold', sans-serif;\n  font-weight: bold;\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n"]);return wn=function(){return n},n}function On(){var n=Object(a.a)(["\n  color: ",";\n  font-size: 36px;\n  font-family: 'TATSanaChonBold', sans-serif;\n  font-weight: bold;\n  margin-top: 0;\n  margin-bottom: 1.5rem;\n\n  @media (max-width: ","px) {\n    font-size: 24px;\n    line-height: 1.3;\n  }\n\n  @media (max-width: ","px) {\n    font-size: 24px;\n    line-height: 1.6;\n  }\n"]);return On=function(){return n},n}function jn(){var n=Object(a.a)(["\n  padding: 30px 0;\n\n  @media (min-width: ","px) {\n    width: 83.333333%;\n  }\n"]);return jn=function(){return n},n}var En=l.c.div(jn(),s.medium),yn=l.c.p.attrs((function(n){return{dangerouslySetInnerHTML:{__html:n.html}}}))(On(),d.secondary,s.medium,s.small),kn=l.c.p(wn()),Tn=l.c.p.attrs((function(n){return{dangerouslySetInnerHTML:{__html:n.html}}}))(vn()),zn=function(n){var t=n.title,e=n.description,a=n.conditionTitle,r=n.condition;return i.a.createElement(xn,null,i.a.createElement(En,null,i.a.createElement(yn,{html:t}),i.a.createElement(Tn,{html:e}),i.a.createElement(kn,null,a),i.a.createElement(Tn,{html:r})))};function Sn(){var n=Object(a.a)(["\n  width: 100%;\n  height: auto;\n"]);return Sn=function(){return n},n}function Cn(){var n=Object(a.a)(["\n  width: 33.333333%;\n  padding: 0 15px;\n  display: inline-block;\n  box-sizing: border-box;\n\n  @media (max-width: ","px) {\n    width: 100%;\n  }\n"]);return Cn=function(){return n},n}function An(){var n=Object(a.a)(["\n  padding: 100px 0;\n"]);return An=function(){return n},n}var _n=l.c.div(An()),Bn=l.c.a(Cn(),s.small),Fn=l.c.img(Sn()),In=function(n){var t=n.items,e=void 0===t?[]:t;return i.a.createElement(xn,null,i.a.createElement(_n,null,e.map((function(n,t){var e=n.image,a=n.tel;return i.a.createElement(Bn,{key:t,href:"tel:".concat(a)},i.a.createElement(Fn,{src:"/chim-shop-chai"+e}))}))))};function Mn(){var n=Object(a.a)(["\n  width: 100%;\n  height: auto;\n"]);return Mn=function(){return n},n}function Hn(){var n=Object(a.a)(["\n  width: 100%;\n  height: auto;\n"]);return Hn=function(){return n},n}var Ln=l.c.source(Hn()),Rn=l.c.img(Mn()),Kn=function(n){var t=n.path,e=n.alt;return i.a.createElement("picture",null,i.a.createElement(Ln,{srcSet:"".concat(t,".webp"),type:"image/webp"}),i.a.createElement(Ln,{srcSet:"".concat(t,".png"),type:"image/png"}),i.a.createElement(Rn,{src:"".concat(t,".png"),alt:e}))};function Dn(){var n=Object(a.a)(["\n  width: 102px;\n  height: auto;\n  transition: all 0.55s ease-in-out;\n  transform: scale(1);\n\n  &:hover {\n    transform: scale(1.2);\n  }\n\n  @media (max-width: ","px) {\n    width: 56px;\n  }\n"]);return Dn=function(){return n},n}function Gn(){var n=Object(a.a)(["\n  width: fit-content;\n  padding: 0 15px;\n  display: inline-block;\n  box-sizing: border-box;\n"]);return Gn=function(){return n},n}function Jn(){var n=Object(a.a)(["\n  @media (max-width: ","px) {\n    width: 33.333333%;\n    text-align: center;\n  }\n"]);return Jn=function(){return n},n}function Wn(){var n=Object(a.a)(["\n  padding-bottom: 100px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]);return Wn=function(){return n},n}var Xn=l.c.div(Wn()),Pn=l.c.div(Jn(),s.small),$n=l.c.a(Gn()),qn=l.c.div(Dn(),s.small),Nn=function(n){var t=n.items,e=void 0===t?[]:t;return i.a.createElement(xn,null,i.a.createElement(Xn,null,e.map((function(n,t){var e=n.image,a=n.link;return i.a.createElement(Pn,{key:t},i.a.createElement($n,{href:a,target:"_blank"},i.a.createElement(qn,null,i.a.createElement(Kn,{path:"/chim-shop-chai"+e}))))}))))};function Qn(){var n=Object(a.a)(["\n  font-size: 14px;\n  margin: 0;\n"]);return Qn=function(){return n},n}function Un(){var n=Object(a.a)(["\n  color: ",";\n  font-weight: bold;\n  margin-bottom: 0;\n"]);return Un=function(){return n},n}function Vn(){var n=Object(a.a)(["\n  width: 108px;\n"]);return Vn=function(){return n},n}function Yn(){var n=Object(a.a)(["\n  @media (max-width: ","px) {\n    width: 100%;\n  }\n"]);return Yn=function(){return n},n}function Zn(){var n=Object(a.a)(["\n  width: 25%;\n  padding: 0 15px;\n  box-sizing: border-box;\n\n  @media (max-width: ","px) {\n    width: 33.333333%;\n  }\n\n  @media (max-width: ","px) {\n    width: 100%;\n  }\n"]);return Zn=function(){return n},n}function nt(){var n=Object(a.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return nt=function(){return n},n}function tt(){var n=Object(a.a)(["\n  background-color: #fafafa;\n  padding: 30px 0;\n"]);return tt=function(){return n},n}var et=l.c.div(tt()),at=l.c.div(nt()),rt=l.c.div(Zn(),s.medium,s.small),it=Object(l.c)(rt)(Yn(),s.medium),ot=l.c.img.attrs({src:"/chim-shop-chai/images/logo.png"})(Vn()),ct=l.c.p(Un(),d.secondary),lt=l.c.p.attrs((function(n){return{dangerouslySetInnerHTML:{__html:n.html}}}))(Qn()),ut=function(n){var t=n.items,e=void 0===t?[]:t;return i.a.createElement(et,null,i.a.createElement(xn,null,i.a.createElement(at,null,i.a.createElement(it,null,i.a.createElement(ot,null)),e.map((function(n,t){var e=n.title,a=n.detail;return i.a.createElement(rt,{key:t},i.a.createElement(ct,null,e),i.a.createElement(lt,{html:a}))})))))};function mt(){var n=Object(a.a)(["\n  color: white;\n  font-family: 'TATSanaChonBold', sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  box-sizing: border-box;\n"]);return mt=function(){return n},n}function st(){var n=Object(a.a)(["\n  @media (max-width: ","px) {\n    width: 100%;\n  }\n"]);return st=function(){return n},n}function dt(){var n=Object(a.a)(["\n  width: 25%;\n  padding: 0.5rem 15px;\n  box-sizing: border-box;\n\n  @media (max-width: ","px) {\n    width: 33.333333%;\n  }\n\n  @media (max-width: ","px) {\n    width: 100%;\n  }\n"]);return dt=function(){return n},n}function ft(){var n=Object(a.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return ft=function(){return n},n}function ht(){var n=Object(a.a)(["\n  background-color: ",";\n"]);return ht=function(){return n},n}var pt=l.c.div(ht(),d.primary),gt=l.c.div(ft()),bt=l.c.div(dt(),s.medium,s.small),xt=Object(l.c)(bt)(st(),s.medium),vt=l.c.a.attrs({target:"_blank"})(mt()),wt=function(n){var t=n.items,e=void 0===t?[]:t,a=n.copyright;return i.a.createElement(pt,null,i.a.createElement(xn,null,i.a.createElement(gt,null,i.a.createElement(xt,null,i.a.createElement(vt,null,"Copyright \xa9 ",a)),e.map((function(n,t){var e=n.title,a=n.href;return i.a.createElement(bt,{key:t},i.a.createElement(vt,{href:a},e))})))))},Ot=function(n){var t=n.contact,e=n.link,a=n.copyright;return i.a.createElement(i.a.Fragment,null,i.a.createElement(ut,{items:t}),i.a.createElement(wt,{items:e,copyright:a}))},jt=function(){var n=Object(r.useState)(),t=Object(u.a)(n,2),e=t[0],a=t[1];return Object(r.useEffect)((function(){var n;n=a,fetch(m).then((function(n){return n.json()})).then((function(t){return n({navbar:{items:t.navbarItems},register:{duration:t.duration,link:{label:"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19 \u0e40\u0e1f\u0e2a 2<br>\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 24 \u0e15.\u0e04.62 \u0e27\u0e31\u0e19\u0e25\u0e30 2 \u0e23\u0e2d\u0e1a \u0e40\u0e27\u0e25\u0e32 6.00 \u0e41\u0e25\u0e30 18.00 \u0e19.<br>(\u0e08\u0e33\u0e01\u0e31\u0e14\u0e08\u0e33\u0e19\u0e27\u0e19\u0e1c\u0e39\u0e49\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e23\u0e2d\u0e1a\u0e25\u0e30 5 \u0e41\u0e2a\u0e19\u0e04\u0e19 \u0e23\u0e27\u0e21 1 \u0e25\u0e49\u0e32\u0e19\u0e04\u0e19\u0e15\u0e48\u0e2d\u0e27\u0e31\u0e19)",href:"https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/"}},detail:{title:"\u0e21\u0e32\u0e15\u0e23\u0e01\u0e32\u0e23\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e42\u0e20\u0e04<br>\u0e43\u0e19\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28 \u201c\u0e0a\u0e34\u0e21\u0e0a\u0e49\u0e2d\u0e1b\u0e43\u0e0a\u0e49\u201d",description:t.detail,conditionTitle:"\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e21\u0e32\u0e15\u0e23\u0e01\u0e32\u0e23",condition:t.condition},tat:[{image:"/images/tat-banner/KTB.png",tel:"021111144"},{image:"/images/tat-banner/CGD.png",tel:"022706400"},{image:"/images/tat-banner/Hotline.png",tel:"1672"}],brand:[{image:"/images/brand-logo/MOF",link:"https://www.mof.go.th/th/home"},{image:"/images/brand-logo/FPO",link:"http://www.fpo.go.th"},{image:"/images/brand-logo/CGD",link:"https://www.cgd.go.th"},{image:"/images/brand-logo/Krungthai",link:"https://www.newcb.ktb.co.th"},{image:"/images/brand-logo/MOTS",link:"https://www.mots.go.th"},{image:"/images/brand-logo/TAT",link:"https://thai.tourismthailand.org"}],footer:{contact:[{title:"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19",detail:'\u0e01\u0e32\u0e23\u0e23\u0e31\u0e1a\u0e2a\u0e34\u0e17\u0e18\u0e34 \u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e41\u0e2d\u0e1b\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e48\u0e19 <span class="nowrap">\u201c\u0e40\u0e1b\u0e4b\u0e32\u0e15\u0e31\u0e07\u201d</span> \u0e41\u0e25\u0e30 <span class="nowrap">\u201c\u0e16\u0e38\u0e07\u0e40\u0e07\u0e34\u0e19\u201d</span><br>\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d \u0e0a\u0e34\u0e21\u0e0a\u0e49\u0e2d\u0e1b\u0e43\u0e0a\u0e49 Call Center by Krungthai \u0e42\u0e17\u0e23. <a class="ml-1" href="tel:021111144"><span class="nowrap">0 2111 1144</span></a>'},{title:"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19",detail:'\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e41\u0e25\u0e30\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e21\u0e32\u0e15\u0e23\u0e01\u0e32\u0e23\u0e2f<br>\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d \u0e42\u0e17\u0e23. <a class="ml-1" href="tel:022706400"><span class="nowrap">0 2270 6400 \u0e01\u0e14 7</span></a>'},{title:"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e17\u0e35\u0e48\u0e22\u0e27\u0e0a\u0e34\u0e21\u0e0a\u0e49\u0e2d\u0e1b\u0e43\u0e0a\u0e49",detail:'\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d \u0e17\u0e17\u0e17.<br>\u0e42\u0e17\u0e23 <a class="ml-1" href="tel:1672"><span>1672</span></a>'}],link:[{title:"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e21\u0e32\u0e15\u0e23\u0e01\u0e32\u0e23",href:"https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/"},{title:"\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",href:"https://www2.xn--b3caa1e2a7e2b0h2be.com/howto-register"},{title:"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32\u0e17\u0e35\u0e48\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23",href:"https://www2.xn--b3caa1e2a7e2b0h2be.com/thung-ngern-shop-province"}],copyright:"2003-2019"}})})).catch(console.log)}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(j,{isOpen:!e}),e?i.a.createElement(i.a.Fragment,null,i.a.createElement(V,{items:e.navbar.items}),i.a.createElement(rn,null),i.a.createElement(gn,e.register),i.a.createElement(zn,e.detail),i.a.createElement(In,{items:e.tat}),i.a.createElement(Nn,{items:e.brand}),i.a.createElement(Ot,e.footer)):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Et(){var n=Object(a.a)(["\n  @font-face {\n    font-family: 'TATSanaSuksa';\n    font-style: normal;\n    font-weight: normal;\n    font-display: swap;\n    src: url(","/fonts/TATSanaSuksa-Regular.woff2) format('woff2');\n  }\n\n  @font-face {\n    font-family: 'TATSanaChon';\n    font-style: normal;\n    font-weight: normal;\n    font-display: swap;\n    src: url(","/fonts/TATSanaChon-Regular.woff2) format('woff2');\n  }\n\n  @font-face {\n    font-family: 'TATSanaChonBold';\n    font-style: normal;\n    font-weight: bold;\n    font-display: swap;\n    src: url(","/fonts/TATSanaChon-Bold.woff2) format('woff2');\n  }\n\n  body {\n    color: ",";\n    font-family: 'TATSanaSuksa', sans-serif;\n    font-size: 16px;\n    line-height: 1.8;\n    margin: 0;\n    padding-top: ","px;\n  }\n\n  a {\n    color: ",";\n    text-decoration: none;\n  }\n\n  .nowrap {\n    white-space: nowrap;\n  }\n"]);return Et=function(){return n},n}var yt=Object(l.a)(Et(),"/chim-shop-chai","/chim-shop-chai","/chim-shop-chai",d.text,f.height,d.text);c.a.render(i.a.createElement(i.a.Fragment,null,i.a.createElement(yt,null),i.a.createElement(jt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.e421d9cb.chunk.js.map