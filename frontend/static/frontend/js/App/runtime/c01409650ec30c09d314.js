(self.webpackChunkreact_tailwindcss_biolerplate=self.webpackChunkreact_tailwindcss_biolerplate||[]).push([[363],{363:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(294);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e){var t=e.csrfmiddlewaretoken,n=e.csrfCookie;(0,r.useEffect)((function(){n||t||(document.querySelector("body").innerHTML="",alert("Security Layer not found"))}),[]);var l,o,c={},i="",u=function(){document.querySelector("#submitAuthenticationBtn").innerHTML=i},m=(l=(0,r.useState)(""),o=2,function(e){if(Array.isArray(e))return e}(l)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return l}}(l,o)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(l,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=m[0],d=m[1];return r.createElement(r.Fragment,null,r.createElement("form",{onSubmit:function(e){e.preventDefault(),function(){document.querySelectorAll("#authenticationForm input").forEach((function(e){c[e.name]=e.value}));var e=document.querySelector("#submitAuthenticationBtn");i=e.innerHTML,e.innerHTML="<div class='loading'></div>"}(),fetch("./api/account/signin",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json; charset=UTF-8","X-CSRFToken":t},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){u(),console.log(e),e.error?d(e.error):location.replace("./")})).catch((function(e){u(),console.log("There is a catch ".concat(e))}))},className:"mx-auto my-12 md:my-16 p-6 bg-white space-y-4 max-w-sm  rounded-lg shadow-md"},r.createElement("h1",{className:"text-2xl -mt-2"},"Login"),""!==s?r.createElement("div",{className:"text-center bg-red-50 rounded-lg  border-2 border-red-500 text-md text-red-500 font-bold"},s):r.createElement(r.Fragment,null),r.createElement("div",null,r.createElement("label",null,"Email"),r.createElement("input",{type:"email",placeholder:"example@mail.com"})),r.createElement("div",null,r.createElement("label",null,"Password"),r.createElement("input",{type:"password",placeholder:"● ● ● ●"})),r.createElement("button",{id:"submitAuthenticationBtn",className:"btn-primary w-full"},"Sign In")))}}}]);