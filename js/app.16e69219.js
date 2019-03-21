(function(t){function e(e){for(var r,a,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)a=o[p],i[a]&&d.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/bootstrap-vue-cep-form/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),i=n("9f7b"),s=n.n(i),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("CepInput",{attrs:{index:t.current.index,value:t.current.value},on:{input:t.onNew}}),t.error?n("div",{staticClass:"container mt-3"},[n("b-alert",{attrs:{show:"",variant:"danger"}},[t._v("\n        "+t._s(t.error)+"\n      ")])],1):t._e(),n("CepTable",t._b({on:{delete:t.onDelete,edit:t.onEdit}},"CepTable",{ceps:t.ceps,isLoading:t.isLoading},!1)),n("hr"),n("footer",{staticClass:"container text-center"},[n("b-button-group",{attrs:{size:"sm"}},[n("b-button",{attrs:{variant:"dark",href:"https://vinicius73.dev/",target:"_blank"}},[t._v("@vinicius73")]),n("b-button",{staticClass:"text-red",attrs:{href:"https://github.com/vinicius73/bootstrap-vue-cep-form",target:"_blank"}},[t._v("\n          v"+t._s(t.$options.version)+"\n        ")])],1)],1)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"py-5 text-center"},[n("h2",[t._v("CEP Form")]),n("p",{staticClass:"lead"},[t._v("\n        Um exemplo de interação com API\n      ")])])])}],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-form",[n("b-container",[n("b-row",[n("b-col",[n("b-input-group",[n("b-form-input",{attrs:{placeholder:"CEP"},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}}),n("b-input-group-append",[n("b-button",{attrs:{disabled:!t.isValid,variant:t.isValid?"info":"danger"},on:{click:t.save}},[n("i",{staticClass:"fas fa-save"}),t._v("\n              "+t._s(t.isCreate?"Adicionar":"Atualizar")+"\n            ")])],1)],1)],1)],1)],1)],1)},l=[],u=n("bc3a"),p=n.n(u);const d=[/^[0-9]{5}-[0-9]{3}$/,/^[0-9]{8}$/],f=t=>{return(t||"").length>0&&d.some(e=>e.test(t))},b=t=>{const e=t.replace("-","");return p.a.get("https://viacep.com.br/ws/".concat(e,"/json/")).then(t=>{let e=t.data;return e})};var h={name:"CepInput",data:()=>({model:""}),props:{value:{type:String,default:""},index:{type:Number,default:-1}},computed:{isCreate(){return this.index<0},isValid(){return f(this.model)}},watch:{value:"sync"},methods:{sync(){this.model=this.value},save(){this.$emit("input",this.model)}},mounted(){this.sync()}},v=h,m=n("2877"),g=Object(m["a"])(v,c,l,!1,null,null,null),y=g.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container pt-2"},[n("b-card",[n("b-table",{staticClass:"cep-table",attrs:{busy:t.isLoading,items:t.list,fields:t.$options.fields,borderless:"",hover:""},scopedSlots:t._u([{key:"actions",fn:function(e){return[n("b-button",{staticClass:"rounded-circle",attrs:{size:"sm",variant:"info"},on:{click:function(n){return t.callEdit(e)}}},[n("i",{staticClass:"fas fa-edit"})]),n("b-button",{staticClass:"rounded-circle ml-2",attrs:{size:"sm",variant:"danger"},on:{click:function(n){return t.callDelete(e)}}},[n("i",{staticClass:"fas fa-trash-alt"})])]}}])},[n("div",{staticClass:"text-center text-info",attrs:{slot:"table-busy"},slot:"table-busy"},[n("b-spinner",{staticClass:"align-middle"})],1)])],1)],1)},x=[];function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){w(t,e,n[e])})}return t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O={name:"CepTable",fields:["cep","logradouro","complemento",{key:"actions",label:"Editar informações"}],props:{isLoading:{type:Boolean,default:!1},ceps:{type:Array,default:()=>[]}},computed:{list(){return this.ceps.map(t=>{return C({_rowVariant:"info"},t)})}},methods:{callDelete(t){this.$emit("delete",t.index)},callEdit(t){this.$emit("edit",t.index)}}},j=O,E=(n("efcc"),Object(m["a"])(j,_,x,!1,null,"45b43241",null)),k=E.exports;const P=["04104-010","04104-020","04104-030","04104-040","04104-050","04104-060","04104-070","04104-070","04104-090","04104-100"];var $={name:"app",version:"0.1.0-4a4ftq",data:()=>({error:!1,isLoading:!0,current:{value:"",index:-1},ceps:[]}),components:{CepInput:y,CepTable:k},methods:{onDelete(t){const e=[...this.ceps];e.splice(t,1),this.ceps=e},onEdit(t){const e=this.ceps[t];this.current={value:e.cep,index:t}},onNew(t){b(t).then(t=>{if(t.erro)return void this.setError("falha no carregamento...");const e=[...this.ceps];this.current.index<0?e.push(t):e[this.current.index]=t,this.ceps=e,this.$nextTick(()=>{this.current={value:"",index:-1}})}).catch(t=>{this.setError(t.message)})},setError(t){this.error=t,setTimeout(()=>{this.error=!1},1500)}},mounted(){this.isLoading=!0,Promise.all(P.map(b)).then(t=>{this.ceps=t.filter(t=>!t.erro)}).catch(t=>{this.setError(t.message)}).then(()=>{this.isLoading=!1})}},S=$,T=Object(m["a"])(S,a,o,!1,null,null,null),L=T.exports;r["a"].use(s.a),n("c1c3"),r["a"].config.productionTip=!1,new r["a"]({render:t=>t(L)}).$mount("#app")},a7e3:function(t,e,n){},c1c3:function(t,e,n){},efcc:function(t,e,n){"use strict";var r=n("a7e3"),i=n.n(r);i.a}});
//# sourceMappingURL=app.16e69219.js.map