(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f62c8d2"],{"4f1b":function(t,e,a){},"7d54":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[a("el-container",[a("el-aside",{attrs:{width:"215px"}},[a("div",[t._v("功能列表")]),t._l(t.items,(function(e,n){return a("el-link",{key:n,class:t.num==n?"act":"",attrs:{underline:!1},nativeOn:{click:function(e){return t.skip(n)}}},[t._v(" "+t._s(e.tit)+" "+t._s(e.tips[1].split(":")[1])+" ")])}))],2),a("el-main",{attrs:{id:"test"}},[a("div",{staticClass:"test"},t._l(t.items,(function(e,n){return a("div",{key:n,staticClass:"item",attrs:{id:n}},[a("h2",[t._v(" "+t._s(e.tit))]),a("div",{staticClass:"tip"},t._l(e.tips,(function(e,n){return a("span",{key:n},[t._v(t._s(e))])})),0),a("p",[t._v("请求参数")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"name",label:"参数名",width:"180"}}),a("el-table-column",{attrs:{prop:"type",label:"参数类型",width:"180"}}),a("el-table-column",{attrs:{prop:"state",label:"中文说明"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注"}})],1),a("h3",[t._v("发送请求")]),a("div",[t._l(e.test,(function(e,n){return a("el-input",{key:n,attrs:{placeholder:e.place},model:{value:e.input,callback:function(a){t.$set(e,"input",a)},expression:"items.input"}})})),a("div",{staticClass:"bottom"},[a("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.test(n,e.test)}}},[t._v("确认")]),a("span",{staticClass:"res"},[t._v("打印结果: "),a("span",{staticClass:"show"},[t._v(t._s(e.res))])])],1)],2)],1)})),0)])],1)],1)},s=[],o=a("5530"),i=a("1da1"),l=(a("96cf"),a("159b"),a("d3b7"),a("25f0"),{computed:{},mounted:function(){console.log(this.$DApp),this.init()},methods:{skip:function(t){this.num=t,console.log(t);var e=document.getElementById("test"),a=document.getElementById(t);e.scrollTop=a.offsetTop-50},init:function(){var t=this;this.$DApp.MortgageBase.initObj().then((function(e){t.MortgageBase=e,console.log(t.MortgageBase)})).catch((function(t){console.log(t)}))},dialog:function(t){0==t?this.$message({message:"请补充内容",type:"warning"}):1==t?this.$notify({title:"设置成功",message:"恭喜您已经设置成功",type:"success"}):2==t&&this.$notify.error({title:"出现错误",message:"请查看控制台报错信息"})},test:function(t,e){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var s,o,i,l,r,c,u,g,d,p,m,f,b;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(s=a.$utils.delBlank,0!=t){n.next=7;break}o=e[0].input,console.log(o),""===o?a.dialog(0):(i=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.MortgageBase.setManager(o).then((function(e){var n=e.status;n?(a.dialog(1),i.close(),a.items[t].res=n):(i.close(),a.dialog(2))})).catch((function(e){a.items[t].res="false",console.log(e),i.close(),a.dialog(2)}))),n.next=16;break;case 7:if(1!=t){n.next=15;break}return n.next=10,a.MortgageBase.manager();case 10:l=n.sent,console.log(l),a.items[t].res=l,n.next=16;break;case 15:2==t?(r=s(e[0].input),console.log(r),""===r?a.dialog(0):(c=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.MortgageBase.setTimeStart(r).then((function(e){console.log(e);var n=e.status;n&&(a.dialog(1),c.close(),a.items[t].res=n)})).catch((function(t){console.log(t),c.close(),a.dialog(2)})))):3==t?(u=s(e[0].input),console.log(u),""===u?a.dialog(0):(g=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.MortgageBase.setFundAddr(u).then((function(e){console.log(e);var n=e.status;n&&(a.dialog(1),g.close(),a.items[t].res=n)})).catch((function(t){console.log(t),g.close(),a.dialog(2)})))):4==t?(e.forEach((function(t){t.input=s(t.input)})),d=e[0].input,""===d?a.dialog(0):(p=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.MortgageBase.setMortgageMax(d).then((function(e){console.log(e);var n=e.status;n&&(a.dialog(1),p.close(),a.items[t].res=n)})).catch((function(t){console.log(t),p.close(),a.dialog(2)})))):5==t?(m=e[0].input,f=a.MortgageBase.contractObj.web3,m=f.utils.toWei(m.toString()),console.log(m),""===m?a.dialog(0):(b=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.MortgageBase.setupMoney(m).then((function(e){var n=e.status;n?(a.dialog(1),b.close(),a.items[t].res=n):(b.close(),a.dialog(2))})).catch((function(e){a.items[t].res="false",console.log(e),b.close(),a.dialog(2)})))):a.$DApp.MortgageBase.stopMortgage().then((function(t){console.log(t)})).catch((function(t){console.log(t),loading.close(),a.dialog(2)}));case 16:case"end":return n.stop()}}),n)})))()},nav:function(){this.$router.push("")}},data:function(){return{num:0,MortgageBase:{},items:[{res:"",tit:"1.设置管理员合约地址",tips:["请求合约名: CardMine","请求方法: setManager","请求方式: send"],tableData:[{name:"addr",type:"address",state:"输入manager合约地址",remark:""}],test:[{place:"addr",input:""}]},{res:"",tit:"2.获取合约管理员地址",tips:["请求合约名: CardMine","请求方法: manager","请求方式: call"],tableData:[],test:[]},{res:"",tit:"3.设置开始时间",tips:["请求合约名: CardMine","请求方法: setTimeStart","请求方式: send"],tableData:[{name:"_startTime",type:"uint256",state:"传入开始时间",remark:"当前时间戳"}],test:[{place:"_startTime",input:""}]},{res:"",tit:"4.设置手续费地址",tips:["请求合约名: CardMine","请求方法: setFundAddr","请求方式: send"],tableData:[{name:"addr",type:"address",state:"手续费地址",remark:"用户交易时收取手续费地址"}],test:[{place:"addr",input:""}]},{res:"",tit:"5.设置最大质押",tips:["请求合约名: CardMine","请求方法: setMortgageMax","请求方式: send"],tableData:[{name:"max",type:"int256",state:"可输入最大质押值",remark:""}],test:[{place:"max",input:""}]},{res:"",tit:"6.设置修改用户昵称的手续费",tips:["请求合约名: CardMine","请求方法: setupMoney","请求方式: send"],tableData:[{name:"money",type:"uint256",state:"用户修改昵称的手续费",remark:"\t注意单位。"}],test:[{place:"money",input:""}]},{res:"",tit:"7.关闭收服挖矿",tips:["请求合约名: CardMine","请求方法: stopMortgage","请求方式: send"]}]}},components:{}}),r=Object(o["a"])({},l),c=r,u=(a("db8c"),a("2877")),g=Object(u["a"])(c,n,s,!1,null,"0d94f37e",null);e["default"]=g.exports},db8c:function(t,e,a){"use strict";a("4f1b")}}]);