(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{180:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={props:{name:"",description:"",func:""},data:function(){return{show:!1,stringFunc:this.func}},methods:{evaluation:function evaluation(){eval(this.stringFunc),console.log(this.stringFunc)}}}},181:function(t,e,n){var content=n(204);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("7271f8de",content,!0,{sourceMap:!1})},203:function(t,e,n){"use strict";var c=n(181);n.n(c).a},204:function(t,e,n){(t.exports=n(18)(!1)).push([t.i,".task[data-v-0c637ffc]{margin:20px auto}.decision[data-v-0c637ffc],.task[data-v-0c637ffc]{background:rgba(0,0,0,.1)}.decision[data-v-0c637ffc]{border-bottom:3px dashed rgba(0,0,0,.7);padding:7px}.answer[data-v-0c637ffc],.decision .row[data-v-0c637ffc]{margin:5px}.answer[data-v-0c637ffc]{background:#8898aa;color:#fff;padding:7px;letter-spacing:2px;border-radius:.25rem}.answer__button[data-v-0c637ffc]{margin:5px}.subButton[data-v-0c637ffc]{font-size:.6em;text-transform:uppercase;font-weight:700;margin-left:20px}.methodDescription[data-v-0c637ffc]{padding:10px}",""])},225:function(t,e,n){"use strict";n.r(e);var c=n(180).a,o=(n(203),n(2)),component=Object(o.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task__container"},[n("div",{staticClass:"task"},[n("div",{staticClass:"decision ct-example-row"},[n("div",{staticClass:"row"},[n("base-button",{staticClass:"answer__button col col-lg-2",attrs:{type:"default"},on:{click:t.evaluation}},[t._v(t._s(t.name))]),t._v(" "),n("p",{staticClass:"answer col text-center",attrs:{id:t.name}},[n("badge",{attrs:{type:"default"}},[t._v("Press button to see result")])],1)],1)]),t._v(" "),n("pre",[n("code",[t._v("function() {  \n\t"+t._s(t.func)+" }\n\t\t")])]),t._v(" "),n("button",{staticClass:"subButton",on:{click:function(e){t.show=!t.show}}},[t._v("Show method description")]),t._v(" "),n("div",{staticClass:"methodDescription"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("p",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("Метод "),n("u",[t._v(t._s(t.name))]),t._v(" "+t._s(t.description))])])],1)])])},[],!1,null,"0c637ffc",null);e.default=component.exports}}]);