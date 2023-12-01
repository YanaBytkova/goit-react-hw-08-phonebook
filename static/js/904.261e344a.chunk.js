"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[904],{904:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r=t(791),u=t(434),a=t(155),o={},i="NOT_FOUND";var c=function(n,e){return n===e};function l(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,u=void 0===r?c:r,a=t.maxSize,o=void 0===a?1:a,l=t.resultEqualityCheck,s=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,u=0;u<r;u++)if(!n(e[u],t[u]))return!1;return!0}}(u),f=1===o?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:i},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(s):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var u=t[r];return r>0&&(t.splice(r,1),t.unshift(u)),u.value}return i}return{get:r,put:function(e,u){r(e)===i&&(t.unshift({key:e,value:u}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,s);function p(){var e=f.get(arguments);if(e===i){if(e=n.apply(null,arguments),l){var t=f.getEntries(),r=t.find((function(n){return l(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return p.clearCache=function(){return f.clear()},p}function s(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function f(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var u=function(){for(var e=arguments.length,r=new Array(e),u=0;u<e;u++)r[u]=arguments[u];var a,o=0,i={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(i=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=i,f=l.memoizeOptions,p=void 0===f?t:f,m=Array.isArray(p)?p:[p],v=s(r),h=n.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(m)),d=n((function(){for(var n=[],e=v.length,t=0;t<e;t++)n.push(v[t].apply(null,arguments));return a=h.apply(null,n)}));return Object.assign(d,{resultFunc:c,memoizedResultFunc:h,dependencies:v,lastResult:function(){return a},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),d};return u}var p=f(l),m=function(n){return n.spravochnik.contacts},v=function(n){return n.contactsStore.filterTerm},h=p([m,v],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),d=t(184),y=function(){var n=(0,u.v9)(v),e=(0,u.I0)();return(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:o.labelText,children:"Find contacts by name"}),(0,d.jsx)("input",{type:"text",value:n,onChange:function(n){var t=n.target.value;e((0,a.Wb)(t))}})]})},b=t(413),x=t(439),_={button:"ContactForm_button__eSwX9",form:"ContactForm_form__dhl+T"},g=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},j=function(){var n=(0,u.I0)(),e=(0,u.v9)(m),t=(0,r.useState)(""),o=(0,x.Z)(t,2),i=o[0],c=o[1],l=(0,r.useState)(""),s=(0,x.Z)(l,2),f=s[0],p=s[1],v=function(t){if(e.some((function(n){return n.name===t.name})))alert("".concat(t.name," is already in contacts."));else{var r=(0,b.Z)((0,b.Z)({},t),{},{id:g()});n((0,a.uK)(r))}},h=function(n){var e=n.target.value,t=n.target.name;"name"===t&&c(e),"number"===t&&p(e)};return(0,d.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.currentTarget;v({name:i,phone:f}),e.reset()},className:_.form,children:[(0,d.jsxs)("label",{className:_.formLabel,children:[(0,d.jsx)("p",{className:_.labelText,children:"Name"}),(0,d.jsx)("input",{type:"text",name:"name",required:!0,onChange:h})]}),(0,d.jsxs)("label",{className:_.formLabel,children:[(0,d.jsx)("p",{className:_.labelText,children:"Number"}),(0,d.jsx)("input",{type:"tel",name:"number",required:!0,onChange:h})]})," ",(0,d.jsx)("br",{}),(0,d.jsx)("button",{className:_.button,type:"submit",children:"Add contact"})]})},C="ContactList_list__csErn",N={item:"ContactItem_item__gxreB",name:"ContactItem_name__XjpNK",number:"ContactItem_number__mfZ8x"},k=function(n){var e=n.contact,t=(0,u.I0)();return(0,d.jsxs)("li",{className:N.item,children:[(0,d.jsx)("span",{className:N.name,children:e.name}),(0,d.jsx)("span",{className:N.number,children:e.phone}),(0,d.jsx)("button",{className:N.button,onClick:function(){return n=e.id,void t((0,a.GK)(n));var n},type:"button",children:"Delete"})]},e.id)},w=function(){var n=(0,u.I0)(),e=(0,u.v9)(m),t=(0,u.v9)(h);return(0,u.v9)(v).length>0&&(e=t),(0,r.useEffect)((function(){n((0,a.yF)())}),[n]),(0,d.jsx)("ul",{className:C,children:e.map((function(n){return(0,d.jsx)(k,{contact:n},n.id)}))})},S="App_container__ZdBeZ",A=function(){return(0,d.jsxs)("div",{className:S,children:[(0,d.jsx)("h1",{children:"Phonebook"}),(0,d.jsx)(j,{}),(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsx)(y,{}),(0,d.jsx)(w,{})]})}}}]);
//# sourceMappingURL=904.261e344a.chunk.js.map