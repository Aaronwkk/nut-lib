(window.webpackJsonp=window.webpackJsonp||[]).push([[3,5],{458:function(t,n,e){"use strict";var r=e(161),a=e(7),o=e(24),i=e(459),u=e(162);r("search",1,(function(t,n,e){return[function(n){var e=o(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,t,this);if(r.done)return r.value;var o=a(t),s=String(this),c=o.lastIndex;i(c,0)||(o.lastIndex=0);var l=u(o,s);return i(o.lastIndex,c)||(o.lastIndex=c),null===l?-1:l.index}]}))},459:function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},460:function(t,n,e){},475:function(t,n,e){"use strict";var r=e(460);e.n(r).a},480:function(t,n,e){"use strict";e.r(n);e(30),e(458);var r={data:function(){return{form:{name:null},detailList:[{age:18,name:"王小虎"},{age:18,name:"王小虎"},{age:18,name:"王小虎"},{age:18,name:"王小虎"}]}},mounted:function(){this.search()},methods:{loadData:function(t){return console.log(t),{data:this.detailList,recordsCount:30}},search:function(){this.$refs.grid.loadData(this.form)}}},a=(e(475),e(5)),o=Object(a.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"demo-block"},[n("grid",{ref:"grid",attrs:{remoteMethod:this.loadData}},[n("el-table-column",{attrs:{prop:"name",label:"名称"}}),this._v(" "),n("el-table-column",{attrs:{prop:"age",label:"年龄"}})],1)],1)}),[],!1,null,"017eb5ec",null);n.default=o.exports},505:function(t,n,e){var r={"./basic.vue":480};function a(t){var n=o(t);return e(n)}function o(t){if(!e.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id=505},511:function(t,n,e){"use strict";e.r(n);e(253);var r={components:["basic"].reduce((function(t,n){var r;return t[n]=(r=n,e(505)("./".concat(r,".vue")).default),t}),{}),props:{name:{type:String,default:"basic"}}},a=e(5),o=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)(this.name,{tag:"component"})}),[],!1,null,null,null);n.default=o.exports}}]);