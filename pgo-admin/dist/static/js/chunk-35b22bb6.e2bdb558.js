(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35b22bb6"],{"8e78":function(t,e,a){"use strict";a("faea")},"986d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[a("el-container",[a("el-aside",{attrs:{width:"215px"}},[a("div",[t._v("功能列表")]),t._l(t.items,(function(e,n){return a("el-link",{key:n,class:t.num==n?"act":"",attrs:{underline:!1},nativeOn:{click:function(e){return t.skip(n)}}},[t._v(" "+t._s(n+1)+"."+t._s(e.tit)+" "+t._s(e.tips[0])+" ")])}))],2),a("el-main",{attrs:{id:"test"}},[a("div",{staticClass:"test"},t._l(t.items,(function(e,n){return a("div",{key:n,staticClass:"item",attrs:{id:n}},[a("h2",[t._v(t._s(n+1)+"."+t._s(e.tit))]),a("div",{staticClass:"tip"},[a("span",[t._v("请求合约："+t._s(t.contractName))]),a("span",[t._v("请求方法："+t._s(e.tips[0]))]),a("span",[t._v("请求方式："+t._s(e.tips[1]))])]),a("p",[t._v("请求参数")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"name",label:"参数名",width:"180"}}),a("el-table-column",{attrs:{prop:"type",label:"参数类型",width:"180"}}),a("el-table-column",{attrs:{prop:"state",label:"中文说明"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注"}})],1),a("h3",[t._v("发送请求")]),a("div",[t._l(e.test,(function(e,n){return a("el-input",{key:n,attrs:{placeholder:e.place},model:{value:e.input,callback:function(a){t.$set(e,"input",a)},expression:"items.input"}})})),a("div",{staticClass:"bottom"},[a("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.test(n,e.test)}}},[t._v("确认")]),a("span",{staticClass:"res"},[t._v("打印结果: "),a("span",{staticClass:"show"},[t._v(t._s(e.res))])])],1)],2)],1)})),0)])],1)],1)},s=[],r=a("5530"),i=a("1da1"),c=(a("ac1f"),a("5319"),a("1276"),a("159b"),a("d3b7"),a("3ca3"),a("ddb0"),a("a15b"),a("96cf"),{computed:{},mounted:function(){this.init()},methods:{skip:function(t){this.num=t;var e=document.getElementById("test"),a=document.getElementById(t);e.scrollTop=a.offsetTop-50},init:function(){var t=this;this.$DApp.ERC20.init().then((function(e){t.ERC20=e})).catch((function(t){alert(t)}))},dialog:function(t){switch(t){case 0:this.$message({message:"请补充内容",type:"warning"});break;case 1:this.$notify({title:"操作成功",message:"恭喜您已经设置成功",type:"success"});break;case 2:this.$notify.error({title:"出现错误",message:"请查看控制台报错信息"});break;case 3:var e=this.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});break;case 4:e=this.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),e.close();break;default:break}},test:function(t,e){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var s,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:s=a.$utils.delBlank,r=a.giveOutPGO,a.setManager,a.manager,n.t0=t,n.next=0===n.t0?5:7;break;case 5:return r(t,e,s),n.abrupt("break",8);case 7:return n.abrupt("break",8);case 8:case"end":return n.stop()}}),n)})))()},send:function(t,e){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.ERC20.send(t,e);case 3:return s=n.sent,n.abrupt("return",s);case 7:n.prev=7,n.t0=n["catch"](0),console.log(n.t0),a.dialog(2);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))()},giveOutPGO:function(t,e,a){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var r,i,c,o,l;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(r=a(e[0].input),r=r.replace(/[\uff0c]/g,","),r=r.split(","),console.log(r),i=a(e[1].input),""!==r&&""!==i){s.next=9;break}n.dialog(0),s.next=28;break;case 9:return n.dialog(3),s.prev=10,c=[],r.forEach((function(t,e){var a=n.send(t,i);c.push(a)})),s.next=15,Promise.all(c);case 15:o=s.sent,l=[],o.forEach((function(t,e){void 0===t&&l.push(r[e])})),n.dialog(4),l.length>0?(l=l.join(", "),l+="钱包地址转账失败",n.items[t].res=l):(n.dialog(1),n.items[t].res="转账成功"),s.next=28;break;case 22:s.prev=22,s.t0=s["catch"](10),console.log(s.t0),n.dialog(4),n.dialog(2),n.items[t].res="Fail!";case 28:case"end":return s.stop()}}),s,null,[[10,22]])})))()}},data:function(){return{num:0,ERC20:{},contractName:"ERC20",items:[{res:"",tit:"批量发送PGO",tips:["transfer","send"],tableData:[{name:"tos",type:"address[]",state:"钱包地址",remark:"多个使用 ，隔开"},{name:"quantity ",type:"uint256",state:"数量",remark:""}],test:[{place:"tos",input:""},{place:"quantity",input:""}]}]}},components:{}}),o=Object(r["a"])({},c),l=o,u=(a("8e78"),a("2877")),p=Object(u["a"])(l,n,s,!1,null,"752191bc",null);e["default"]=p.exports},faea:function(t,e,a){}}]);