(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{458:function(t,n,e){"use strict";var a=e(161),r=e(7),i=e(24),s=e(459),o=e(162);a("search",1,(function(t,n,e){return[function(n){var e=i(this),a=null==n?void 0:n[t];return void 0!==a?a.call(n,e):new RegExp(n)[t](String(e))},function(t){var a=e(n,t,this);if(a.done)return a.value;var i=r(t),u=String(this),l=i.lastIndex;s(l,0)||(i.lastIndex=0);var c=o(i,u);return s(i.lastIndex,l)||(i.lastIndex=l),null===c?-1:c.index}]}))},459:function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},460:function(t,n,e){},475:function(t,n,e){"use strict";var a=e(460);e.n(a).a},480:function(t,n,e){"use strict";e.r(n);e(30),e(458);var a={data:function(){return{detailList:[{age:18,name:"王小虎"},{age:18,name:"王小虎"},{age:18,name:"王小虎"},{age:18,name:"王小虎"}]}},mounted:function(){this.search()},methods:{loadData:function(){return{data:this.detailList,recordsCount:30}},search:function(){this.$refs.grid.loadData()}}},r=(e(475),e(5)),i=Object(r.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"demo-block"},[n("grid",{ref:"grid",attrs:{remoteMethod:this.loadData}},[n("el-table-column",{attrs:{prop:"name",label:"名称"}}),this._v(" "),n("el-table-column",{attrs:{prop:"age",label:"年龄"}})],1)],1)}),[],!1,null,"56418df6",null);n.default=i.exports}}]);