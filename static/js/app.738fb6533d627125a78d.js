webpackJsonp([9],{E7rD:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("xd7I"),i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-warp"},[n("div",{directives:[{name:"show",rawName:"v-show",value:"home"!=t.title,expression:"title!='home'"}],staticClass:"nav-left",on:{click:t.onClickLeft}},[t._v("<")]),t._v(" "),n("div",{staticClass:"nav-center"},[t._v(t._s(t.title))]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"home"!=t.title,expression:"title!='home'"}],staticClass:"nav-right",on:{click:t.onClickRight}},[t._v("X")])])},staticRenderFns:[]};var o={name:"App",components:{navMenu:n("C7Lr")({props:["title","start"],methods:{onClickLeft:function(){this.$router.go(-1)},onClickRight:function(){this.$router.go(-this.start)}}},i,!1,function(t){n("E7rD")},"data-v-4d61c857",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("nav-menu",{attrs:{title:this.$route.meta.title,start:this.$route.query.s}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var s=n("C7Lr")(o,r,!1,function(t){n("msut")},null,null).exports,p=n("3XdE"),c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"content"},[this._v("\n    home\n    "),e("button",{on:{click:this.goNext}},[this._v("next page1")])])])},staticRenderFns:[]},u=n("C7Lr")({methods:{goNext:function(){this.$router.push({path:"page1?s=1"})}}},c,!1,null,null,null).exports;a.a.use(p.a);var l=new p.a({routes:[{path:"/",name:"home",component:u,meta:{title:"home"}},{path:"/page1",name:"page1",props:function(t){return{start:t.query.s}},component:function(t){n.e(7).then(function(){var e=[n("7nqO")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"page1"}},{path:"/page2",name:"page2",props:function(t){return{start:t.query.s}},component:function(t){n.e(6).then(function(){var e=[n("lEAt")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"page2"}},{path:"/page3",name:"page3",props:function(t){return{start:t.query.s}},component:function(t){n.e(5).then(function(){var e=[n("2Bjb")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"page3"}},{path:"/page4",name:"page4",props:function(t){return{start:t.query.s}},component:function(t){n.e(4).then(function(){var e=[n("3K3d")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"page4"}},{path:"/page5",name:"page5",props:function(t){return{start:t.query.s}},component:function(t){n.e(3).then(function(){var e=[n("2E+t")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"page5"}},{path:"/page6",name:"page6",props:function(t){return{start:t.query.s}},component:function(t){n.e(2).then(function(){var e=[n("WHeP")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"page6"}},{path:"/page7",name:"page7",props:function(t){return{start:t.query.s}},component:function(t){n.e(1).then(function(){var e=[n("/w9M")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"page7"}},{path:"/page8",name:"page8",props:function(t){return{start:t.query.s}},component:function(t){n.e(0).then(function(){var e=[n("Q45C")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"page8"}}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:l,components:{App:s},template:"<App/>"})},msut:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.738fb6533d627125a78d.js.map