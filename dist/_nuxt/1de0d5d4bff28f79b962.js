(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{355:function(t,e,o){var content=o(383);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(29).default)("d4fda9e4",content,!0,{sourceMap:!1})},382:function(t,e,o){"use strict";var r=o(355);o.n(r).a},383:function(t,e,o){(t.exports=o(28)(!1)).push([t.i,'@-webkit-keyframes blurshow-data-v-5eff5844{0%{-webkit-filter:blur(3px);filter:blur(3px);transform:skew(-15deg)}30%{-webkit-filter:blur(2px);filter:blur(2px);transform:skew(-10deg)}50%{-webkit-filter:blur(0);filter:blur(0);transform:skew(15deg)}}@keyframes blurshow-data-v-5eff5844{0%{-webkit-filter:blur(3px);filter:blur(3px);transform:skew(-15deg)}30%{-webkit-filter:blur(2px);filter:blur(2px);transform:skew(-10deg)}50%{-webkit-filter:blur(0);filter:blur(0);transform:skew(15deg)}}.titlePage[data-v-5eff5844]{text-align:center;padding-top:30px;margin-bottom:10px;text-transform:uppercase;font-style:italic;letter-spacing:2px;line-height:2}pre[data-v-5eff5844]{white-space:pre-wrap;word-wrap:break-word;margin-bottom:0}.hvr-underline-from-left[data-v-5eff5844]{display:inline-block;vertical-align:middle;transform:translateZ(0);box-shadow:0 0 1px transparent;-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;overflow:hidden}.hvr-underline-from-left[data-v-5eff5844]:before{content:"";position:absolute;z-index:-1;left:0;right:100%;bottom:0;background:#172b4d;height:4px;transition-property:right;transition-duration:.3s;transition-timing-function:ease-out}.hvr-underline-from-left[data-v-5eff5844]:active:before,.hvr-underline-from-left[data-v-5eff5844]:focus:before,.hvr-underline-from-left[data-v-5eff5844]:hover:before{right:0}.list-counter-circle[data-v-5eff5844]{list-style:none;counter-reset:list;margin:20px auto;padding:25px;overflow:hidden}.list-counter-circle>a[data-v-5eff5844]{position:relative;display:block;min-height:2rem;line-height:1.6rem;margin-left:1.75rem;margin-bottom:1.25rem;padding-left:1rem;padding-right:.5rem;color:var(--link-color-text);background:var(--link-color-bg);border-radius:.25rem;will-change:transform;transition:.4s ease-in-out;-webkit-font-smoothing:subpixel-antialiased}.list-counter-circle>a[data-v-5eff5844]:active,.list-counter-circle>a[data-v-5eff5844]:hover{-webkit-animation:blurshow-data-v-5eff5844 .3s ease;animation:blurshow-data-v-5eff5844 .3s ease;-webkit-filter:drop-shadow(2px 2px 2px #2f2f2f) saturate(-50%);filter:drop-shadow(2px 2px 2px #2F2F2F) saturate(-50%);transform:scale(1.065)}.list-counter-circle>a li[data-v-5eff5844]{color:var(--link-color-text);font-size:1.2rem}.list-counter-circle>a[data-v-5eff5844]:last-child{margin-bottom:0}.list-counter-circle>a[data-v-5eff5844]:before{content:counter(list);counter-increment:list;position:absolute;left:-2rem;top:-.25rem;bottom:-.25rem;width:2.5rem;line-height:2rem;border-radius:1.25rem;border:.25rem solid var(--link-color-text);text-align:center;color:var(--link-color-text);background:var(--link-color-bg)}.todo[data-v-5eff5844]{text-align:center;border:1px solid #fff;width:80vw;height:auto;box-shadow:2px 3px 15px rgba(0,0,0,.5);background:#f6f6f6;padding-bottom:60px;margin:40px auto}.todo__header[data-v-5eff5844]{color:#000;font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:400;text-transform:uppercase;margin:70px auto 30px}.todo__add[data-v-5eff5844]{color:#fff;font-size:2em;width:.5em;height:.5em;display:flex;justify-content:center;align-items:center;padding:15px;cursor:pointer;background:#73ff73;border-radius:10px;box-shadow:1px 1px 1px #47a947;margin:20px auto 0}.todo__add[data-v-5eff5844]:hover{box-shadow:none;margin-top:21px}.todo__container[data-v-5eff5844]{width:80%;margin:0 auto}input[data-v-5eff5844]{width:60%;padding:10px;font-size:1em;margin:10px auto;box-shadow:1px 3px 20px 0 rgba(0,0,0,.3)}',""])},423:function(t,e,o){"use strict";o.r(e);var r={name:"todo",components:{toDoItem:function(){return o.e(27).then(o.bind(null,435))}},data:function(){return{list:[{id:1,text:"clean the house"},{id:2,text:"buy milk"}],todo:""}},methods:{createNewToDoItem:function(){if(this.todo){var t=Math.max.apply(null,this.list.map(function(t){return t.id}))+1;this.list.push({id:t,text:this.todo}),this.todo=""}else alert("Please enter a todo!")},onDeleteItem:function(t){this.list=this.list.filter(function(e){return e!==t})}}},n=(o(382),o(2)),component=Object(n.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"todo"},[o("h1",{staticClass:"todo__header"},[t._v('"To Do"')]),t._v(" "),o("div",{staticClass:"todo__container"},[o("div",{staticClass:"todo__content"},[t._l(t.list,function(e){return o("toDoItem",{key:e.id,attrs:{todo:e},on:{delete:t.onDeleteItem}})}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo,expression:"todo"}],attrs:{type:"text"},domProps:{value:t.todo},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createNewToDoItem(e)},input:function(e){e.target.composing||(t.todo=e.target.value)}}}),t._v(" "),o("div",{staticClass:"todo__add",on:{click:function(e){return t.createNewToDoItem()}}},[t._v("+")])],2)])])])},[],!1,null,"5eff5844",null);e.default=component.exports}}]);