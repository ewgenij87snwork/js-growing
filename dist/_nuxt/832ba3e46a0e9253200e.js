(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{184:function(t,e,o){var content=o(210);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("51e35eed",content,!0,{sourceMap:!1})},209:function(t,e,o){"use strict";var n=o(184);o.n(n).a},210:function(t,e,o){(t.exports=o(18)(!1)).push([t.i,".modal.show{background-color:rgba(0,0,0,.3)}",""])},224:function(t,e,o){"use strict";o.r(e);o(30);var n={name:"modal",components:{SlideYUpTransition:o(70).b},props:{show:Boolean,showClose:{type:Boolean,default:!0},type:{type:String,default:"",validator:function(t){return-1!==["","notice","mini"].indexOf(t)},description:'Modal type (notice|mini|"") '},modalClasses:{type:[Object,String],description:"Modal dialog css classes"},modalContentClasses:{type:[Object,String],description:"Modal dialog content css classes"},gradient:{type:String,description:"Modal gradient type (danger, primary etc)"},headerClasses:{type:[Object,String],description:"Modal Header css classes"},bodyClasses:{type:[Object,String],description:"Modal Body css classes"},footerClasses:{type:[Object,String],description:"Modal Footer css classes"},animationDuration:{type:Number,default:500,description:"Modal transition duration"}},methods:{closeModal:function(){this.$emit("update:show",!1),this.$emit("close")}},watch:{show:function(t){var e=document.body.classList;t?e.add("modal-open"):e.remove("modal-open")}}},l=(o(209),o(2)),component=Object(l.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("SlideYUpTransition",{attrs:{duration:t.animationDuration}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"modal fade",class:[{"show d-block":t.show},{"d-none":!t.show},{"modal-mini":"mini"===t.type}],attrs:{tabindex:"-1",role:"dialog","aria-hidden":!t.show},on:{click:function(e){return e.target!==e.currentTarget?null:t.closeModal(e)}}},[o("div",{staticClass:"modal-dialog modal-dialog-centered",class:[{"modal-notice":"notice"===t.type},t.modalClasses]},[o("div",{staticClass:"modal-content",class:[t.gradient?"bg-gradient-"+t.gradient:"",t.modalContentClasses]},[t.$slots.header?o("div",{staticClass:"modal-header",class:[t.headerClasses]},[t._t("header"),t._v(" "),t._t("close-button",[t.showClose?o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:t.closeModal}},[o("span",{attrs:{"aria-hidden":!t.show}},[t._v("×")])]):t._e()])],2):t._e(),t._v(" "),o("div",{staticClass:"modal-body",class:t.bodyClasses},[t._t("default")],2),t._v(" "),t.$slots.footer?o("div",{staticClass:"modal-footer",class:t.footerClasses},[t._t("footer")],2):t._e()])])])])},[],!1,null,null,null);e.default=component.exports}}]);