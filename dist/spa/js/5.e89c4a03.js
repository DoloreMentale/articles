(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{f3e7:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",[s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-12 col-sm-6"},[s("q-list",{attrs:{separator:""}},[s("q-item-label",{attrs:{header:""}},[e._v("\n          All changes\n        ")]),e._l(e.changesHistory,(function(t,a){return s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a},[s("q-item-section",[s("q-item-label",{class:{"text-positive":"added"===t.type,"text-negative":"removed"===t.type}},[s("q-icon",{attrs:{name:"added"===t.type?"add":"remove"}}),e._v("\n              This post have been "+e._s(t.type)+" at "+e._s(t.timestamp)+"\n            ")],1)],1),s("q-item-section",[s("q-item-label",[e._v("\n              #"+e._s(t.post.id)+". "+e._s(t.post.title)+"\n            ")]),s("q-item-label",{attrs:{caption:""}},[e._v("\n              "+e._s(t.post.body)+"\n            ")]),s("q-item-label",{attrs:{overline:""}},[e._v("\n              User ID: "+e._s(t.post.userId)+"\n            ")])],1)],1)}))],2)],1)])])},i=[],n=s("7053"),o=s.n(n),r=s("2f62"),c={name:"History",methods:o()({},Object(r["d"])(["reverseHistoryChangesArray","getPostsFromLocalStorage"])),computed:o()({},Object(r["c"])(["changesHistory"])),mounted:function(){this.reverseHistoryChangesArray(),this.getPostsFromLocalStorage()}},l=c,p=s("2877"),m=s("9989"),d=s("1c1c"),v=s("0170"),b=s("66e5"),u=s("4074"),y=s("0016"),_=s("714f"),h=s("eebe"),g=s.n(h),q=Object(p["a"])(l,a,i,!1,null,"66b3c8c7",null);t["default"]=q.exports;g()(q,"components",{QPage:m["a"],QList:d["a"],QItemLabel:v["a"],QItem:b["a"],QItemSection:u["a"],QIcon:y["a"]}),g()(q,"directives",{Ripple:_["a"]})}}]);