(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38db4753"],{"92a6":function(t,e,a){},c69d:function(t,e,a){"use strict";a("92a6")},ef16:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[a("el-container",[a("el-aside",{attrs:{width:"215px"}},[a("div",[t._v("功能列表")]),t._l(t.items,(function(e,n){return a("el-link",{key:n,class:t.num==n?"act":"",attrs:{underline:!1},nativeOn:{click:function(e){return t.skip(n)}}},[t._v(" "+t._s(n+1)+"."+t._s(e.tit)+" "+t._s(e.tips[0])+" ")])}))],2),a("el-main",{attrs:{id:"test"}},[a("div",{staticClass:"test"},t._l(t.items,(function(e,n){return a("div",{key:n,staticClass:"item",attrs:{id:n}},[a("h2",[t._v(t._s(n+1)+"."+t._s(e.tit))]),a("div",{staticClass:"tip"},[a("span",[t._v("请求合约："+t._s(t.contractName))]),a("span",[t._v("请求方法："+t._s(e.tips[0]))]),a("span",[t._v("请求方式："+t._s(e.tips[1]))])]),a("p",[t._v("请求参数")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"name",label:"参数名",width:"180"}}),a("el-table-column",{attrs:{prop:"type",label:"参数类型",width:"180"}}),a("el-table-column",{attrs:{prop:"state",label:"中文说明"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注"}})],1),a("h3",[t._v("发送请求")]),a("div",[t._l(e.test,(function(e,n){return a("el-input",{key:n,attrs:{placeholder:e.place},model:{value:e.input,callback:function(a){t.$set(e,"input",a)},expression:"items.input"}})})),a("div",{staticClass:"bottom"},[a("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.test(n,e.test)}}},[t._v("确认")]),a("span",{staticClass:"res"},[t._v("打印结果: "),a("span",{staticClass:"show"},[t._v(t._s(e.res))])])],1)],2)],1)})),0)])],1)],1)},s=[],r=a("5530"),i=a("1da1"),o=(a("498a"),a("96cf"),{data:function(){return{num:0,EquipPack:{},contractName:"EquipPack",items:[{res:"",tit:"设置管理员合约地址",tips:["setManager","send"],tableData:[{name:"addr",type:"address",state:"输入manager合约地址",remark:""}],test:[{place:"addr",input:""}]},{res:"",tit:"获取合约管理员地址",tips:["manager","call"],tableData:[],test:[]},{res:"",tit:"设置管理员",tips:["setGovernance","send"],tableData:[{name:"_governance ",type:"address",state:"账户地址",remark:""}],test:[{place:"_governance ",input:""}]},{res:"",tit:"增加或增发装备",tips:["addEquip","send"],tableData:[{name:"equipId",type:"uint256 ",state:"装备ID",remark:""},{name:"amount",type:"uint256 ",state:"装备数量",remark:""}],test:[{place:"equipId  ",input:""},{place:"amount  ",input:""}]},{res:"",tit:"授权商店",tips:["setShop","send"],tableData:[{name:"shop ",type:"address  ",state:"商店合约地址",remark:""},{name:"enabled ",type:"bool  ",state:"是否授权",remark:"true/false"}],test:[{place:"shop   ",input:""},{place:"amount  ",input:""}]},{res:"",tit:"获取装备ID集合",tips:["getEqIds","CALL"],tableData:[],test:[]},{res:"",tit:"转移装备",tips:["safeTransferFrom","send"],tableData:[{name:"from  ",type:"address  ",state:"来源地址",remark:""},{name:"to  ",type:"address   ",state:"去向地址",remark:"EquipDock合约地址"},{name:"id   ",type:"uint256    ",state:"装备ID",remark:""},{name:"amount   ",type:"uint256    ",state:"数量 ",remark:""},{name:"data   ",type:"bytes    ",state:"携带数据",remark:'to为个人地址则为""，to为合约地址则为"0x0101"'}],test:[{place:"from    ",input:""},{place:"to   ",input:""},{place:"id    ",input:""},{place:"amount   ",input:""},{place:"data    ",input:""}]},{res:"",tit:"获取管理员",tips:["governance","call"],tableData:[],test:[]}]}},computed:{},mounted:function(){this.init()},methods:{skip:function(t){this.num=t;var e=document.getElementById("test"),a=document.getElementById(t);e.scrollTop=a.offsetTop-50},init:function(){var t=this;this.$DApp.EquipPack.init().then((function(e){t.EquipPack=e,console.log(e)})).catch((function(t){alert(t)}))},dialog:function(t){switch(t){case 0:this.$message({message:"请补充内容",type:"warning"});break;case 1:this.$notify({title:"操作成功",message:"恭喜您已经设置成功",type:"success"});break;case 2:this.$notify.error({title:"出现错误",message:"请查看控制台报错信息"});break;case 3:var e=this.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});break;case 4:e=this.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),e.close();break;default:break}},test:function(t,e){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var s,r,i,o,c,l,u,p;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a.$utils.delBlank,s=a.setManager,r=a.manager,i=a.setGovernance,o=a.addEquip,c=a.setShop,l=a.safeTransferFrom,u=a.getEqIds,p=a.governance,n.t0=t,n.next=0===n.t0?5:1===n.t0?7:2===n.t0?9:3===n.t0?11:4===n.t0?13:5===n.t0?15:6===n.t0?17:7===n.t0?19:21;break;case 5:return s(t,e),n.abrupt("break",22);case 7:return r(t,e),n.abrupt("break",22);case 9:return i(t,e),n.abrupt("break",22);case 11:return o(t,e),n.abrupt("break",22);case 13:return c(t,e),n.abrupt("break",22);case 15:return u(t,e),n.abrupt("break",22);case 17:return l(t,e),n.abrupt("break",22);case 19:return p(t,e),n.abrupt("break",22);case 21:return n.abrupt("break",22);case 22:case"end":return n.stop()}}),n)})))()},setManager:function(t,e){var a=this,n=e[0].input;if(n=n.trim(),console.log(n),""===n)this.dialog(0);else{var s=this.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});this.EquipPack.setManager(n).then((function(e){var n=e.status;n?(a.dialog(1),s.close(),a.items[t].res=n):(s.close(),a.dialog(2))})).catch((function(e){a.items[t].res="false",console.log(e),s.close(),a.dialog(2)}))}},manager:function(t,e){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.EquipPack.manager();case 2:n=e.sent,console.log(n),a.items[t].res=n;case 5:case"end":return e.stop()}}),e)})))()},getEqIds:function(t,e){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.EquipPack.getEqIds();case 3:n=e.sent,console.log(n),a.items[t].res=n,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},governance:function(t,e){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.EquipPack.governance();case 3:n=e.sent,console.log(n),a.items[t].res=n,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},setGovernance:function(t,e){var a=this,n=e[0].input;if(n=n.trim(),console.log(n),""===n)this.dialog(0);else{var s=this.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});this.EquipPack.setGovernance(n).then((function(e){var n=e.status;n?(a.dialog(1),s.close(),a.items[t].res=n):(s.close(),a.dialog(2))})).catch((function(e){a.items[t].res="false",console.log(e),s.close(),a.dialog(2)}))}},addEquip:function(t,e){var a=this,n=e[0].input,s=e[1].input;if(n=n.trim(),s=s.trim(),console.log(n,s),""===n||""===s)this.dialog(0);else{var r=this.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});this.EquipPack.addEquip(n,s).then((function(e){var n=e.status;n?(a.dialog(1),r.close(),a.items[t].res=n):(r.close(),a.dialog(2))})).catch((function(e){a.items[t].res="false",console.log(e),r.close(),a.dialog(2)}))}},setShop:function(t,e){var a=this,n=e[0].input,s=e[1].input;if(n=n.trim(),s=s.trim(),""===n||""===s)this.dialog(0);else{s=s.toLowerCase(),s="true"===s,console.log(n,s);var r=this.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});this.EquipPack.setShop(n,s).then((function(e){var n=e.status;n?(a.dialog(1),r.close(),a.items[t].res=n):(r.close(),a.dialog(2))})).catch((function(e){a.items[t].res="false",console.log(e),r.close(),a.dialog(2)}))}},safeTransferFrom:function(t,e){var a=this,n=e[0].input,s=e[1].input,r=e[2].input,i=e[3].input,o=e[4].input;if(n=n.trim(),s=s.trim(),r=r.trim(),i=i.trim(),o=o.trim(),console.log(n,s,r,i,o),""===n||""===s||""===r||""===i||""===o)this.dialog(0);else{var c=this.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});this.EquipPack.safeTransferFrom(n,s,r,i,o).then((function(e){var n=e.status;n?(a.dialog(1),c.close(),a.items[t].res=n):(c.close(),a.dialog(2))})).catch((function(e){a.items[t].res="false",console.log(e),c.close(),a.dialog(2)}))}}},components:{}}),c=Object(r["a"])({},o),l=c,u=(a("c69d"),a("2877")),p=Object(u["a"])(l,n,s,!1,null,"98b4c86a",null);e["default"]=p.exports}}]);