(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c229cbba"],{"6ec9":function(e,t,a){},"862d":function(e,t,a){"use strict";a("6ec9")},"94ee":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"index"},[a("el-container",[a("el-aside",{attrs:{width:"215px"}},[a("div",[e._v("功能列表")]),e._l(e.items,(function(t,n){return a("el-link",{key:n,class:e.num==n?"act":"",attrs:{underline:!1},nativeOn:{click:function(t){return e.skip(n)}}},[e._v(" "+e._s(t.tit)+" "+e._s(t.tips[1].split(":")[1])+" ")])}))],2),a("el-main",{attrs:{id:"test"}},[a("div",{staticClass:"test"},e._l(e.items,(function(t,n){return a("div",{key:n,staticClass:"item",attrs:{id:n}},[a("h2",[e._v(" "+e._s(t.tit))]),a("div",{staticClass:"tip"},e._l(t.tips,(function(t,n){return a("span",{key:n},[e._v(e._s(t))])})),0),a("p",[e._v("请求参数")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"name",label:"参数名",width:"180"}}),a("el-table-column",{attrs:{prop:"type",label:"参数类型",width:"180"}}),a("el-table-column",{attrs:{prop:"state",label:"中文说明"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注"}})],1),a("h3",[e._v("发送请求")]),a("div",[e._l(t.test,(function(t,n){return a("el-input",{key:n,attrs:{placeholder:t.place},model:{value:t.input,callback:function(a){e.$set(t,"input",a)},expression:"items.input"}})})),a("div",{staticClass:"bottom"},[a("el-button",{attrs:{type:"primary"},on:{click:function(a){return e.test(n,t.test)}}},[e._v("确认")]),a("span",{staticClass:"res"},[e._v("打印结果: "),a("span",{staticClass:"show"},[e._v(e._s(t.res))])])],1)],2)],1)})),0)])],1)],1)},s=[],i=a("5530"),o=a("1da1"),r=(a("96cf"),a("159b"),a("ac1f"),a("1276"),a("d3b7"),a("3ca3"),a("ddb0"),{computed:{},mounted:function(){console.log(this.$DApp),this.init()},methods:{skip:function(e){this.num=e,console.log(e);var t=document.getElementById("test"),a=document.getElementById(e);t.scrollTop=a.offsetTop-50},init:function(){var e=this;this.$DApp.CherryStakeERC20.initObj().then((function(t){e.CherryStakeERC20=t,console.log(e.CherryStakeERC20)})).catch((function(e){console.log(e)})),this.$DApp.Package.initObj().then((function(t){e.Package=t,console.log(e.Package)})).catch((function(e){console.log(e)}))},dialog:function(e){0==e?this.$message({message:"请补充内容",type:"warning"}):1==e?this.$notify({title:"设置成功",message:"恭喜您已经设置成功",type:"success"}):2==e&&this.$notify.error({title:"出现错误",message:"请查看控制台报错信息"})},test:function(e,t){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var s,i,o,r,l,c,u,p,d,g,m,k,h,b,f,y,C,R,S,x,E,v,D,$,_,T,w,A,M,P,O,j,N,B,Q,I;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(s=a.$utils.delBlank,t.forEach((function(e,n){e.input=s(e.input),""===t[n].input&&a.dialog(0)})),0!=e){n.next=8;break}i=t[0].input,console.log(i),""===i?a.dialog(0):(o=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.CherryStakeERC20.setManager(i).then((function(t){var n=t.status;n?(a.dialog(1),o.close(),a.items[e].res=n):(o.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),o.close(),a.dialog(2)}))),n.next=128;break;case 8:if(1!=e){n.next=16;break}return n.next=11,a.CherryStakeERC20.manager();case 11:r=n.sent,console.log(r),a.items[e].res=r,n.next=128;break;case 16:if(2!=e){n.next=21;break}l=t[0].input,""===l?a.dialog(0):(c=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.CherryStakeERC20.setQuantityMax(l).then((function(t){var n=t.status;n?(a.dialog(1),c.close(),a.items[e].res=n):(c.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),c.close(),a.dialog(2)}))),n.next=128;break;case 21:if(3!=e){n.next=26;break}u=t[0].input,""===u?a.dialog(0):(p=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.CherryStakeERC20.setShopToken(u).then((function(t){var n=t.status;n?(a.dialog(1),p.close(),a.items[e].res=n):(p.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),p.close(),a.dialog(2)}))),n.next=128;break;case 26:if(4!=e){n.next=32;break}d=t[0].input,console.log(d),""===d?a.dialog(0):(g=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.CherryStakeERC20.setPoolAddr(d).then((function(t){var n=t.status;n?(a.dialog(1),g.close(),a.items[e].res=n):(g.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),g.close(),a.dialog(2)}))),n.next=128;break;case 32:if(5!=e){n.next=37;break}m=t[0].input,""===m?a.dialog(0):(k=[],m=m.split(","),m.forEach((function(e){e=a.$utils.web3Utils.convertUnit(e,a.CherryStakeERC20.contractObj.web3),k.push(e)})),Promise.all(k).then((function(t){m=t,console.log(m);var n=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});a.CherryStakeERC20.setRarityAmounts(m).then((function(t){var s=t.status;s?(a.dialog(1),n.close(),a.items[e].res=s):(n.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),n.close(),a.dialog(2)}))}))),n.next=128;break;case 37:if(6!=e){n.next=43;break}h=t[0].input,console.log(h),""===h?a.dialog(0):a.CherryStakeERC20.rarityAmounts(h).then((function(t){a.items[e].res=t})).catch((function(t){a.items[e].res="false",console.log(t)})),n.next=128;break;case 43:if(7!=e){n.next=52;break}b=t[0].input,f=t[1].input,b=b.split(","),console.log(b),console.log(f),""===b||""===f?a.dialog(0):(y=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.CherryStakeERC20.addCardTypes(b,f).then((function(t){var n=t.status;n?(a.dialog(1),y.close(),a.items[e].res=n):(y.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),y.close(),a.dialog(2)}))),n.next=128;break;case 52:if(8!=e){n.next=61;break}C=t[0].input,R=t[1].input,C=C.split(","),console.log(C),console.log(R),""===C||""===R?a.dialog(0):(S=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.CherryStakeERC20.setCardTypes(C,R).then((function(t){var n=t.status;n?(a.dialog(1),S.close(),a.items[e].res=n):(S.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),S.close(),a.dialog(2)}))),n.next=128;break;case 61:if(9!=e){n.next=67;break}x=t[0].input,E=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.CherryStakeERC20.removeAllCardTypes(x).then((function(t){console.log(t);var n=t.status;a.items[e].res=n,E.close()})).catch((function(t){a.items[e].res="false",console.log(t),E.close()})),n.next=128;break;case 67:if(10!=e){n.next=73;break}v=t[0].input,console.log(v),""===v?a.dialog(0):a.CherryStakeERC20.cardTypes(v).then((function(t){a.items[e].res=t,console.log(t)})).catch((function(t){a.items[e].res="false",console.log(t)})),n.next=128;break;case 73:if(11!=e){n.next=81;break}console.log(e),D=t[0].input,D=D.split(","),console.log(D),""===D?a.dialog(0):($=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.CherryStakeERC20.setRarityRandomNum(D).then((function(t){var n=t.status;n?(a.dialog(1),$.close(),a.items[e].res=n):($.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),$.close(),a.dialog(2)}))),n.next=128;break;case 81:if(12!=e){n.next=91;break}return console.log(a.CherryStakeERC20.methods),_=t[0].input,n.next=86,a.CherryStakeERC20.RarityRandomNums(_);case 86:T=n.sent,console.log(T),a.items[e].res=T,n.next=128;break;case 91:if(13!=e){n.next=97;break}w=t[0].input,console.log(w),""===w?a.dialog(0):a.CherryStakeERC20.cardRTypes(w).then((function(t){a.items[e].res=t,console.log(t)})).catch((function(t){a.items[e].res="false",console.log(t)})),n.next=128;break;case 97:if(14!=e){n.next=103;break}A=t[0].input,console.log(A),""===A?a.dialog(0):a.CherryStakeERC20.cardSRTypes(A).then((function(t){a.items[e].res=t,console.log(t)})).catch((function(t){a.items[e].res="false",console.log(t)})),n.next=128;break;case 103:if(15!=e){n.next=109;break}M=t[0].input,console.log(M),""===M?a.dialog(0):a.CherryStakeERC20.cardSSRTypes(M).then((function(t){a.items[e].res=t,console.log(t)})).catch((function(t){a.items[e].res="false",console.log(t)})),n.next=128;break;case 109:if(16!=e){n.next=114;break}P=t[0].input,""===P?a.dialog(0):(O=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.CherryStakeERC20.setMortgageMax(P).then((function(t){var n=t.status;n?(a.dialog(1),O.close(),a.items[e].res=n):(O.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),O.close(),a.dialog(2)}))),n.next=128;break;case 114:if(17!=e){n.next=119;break}j=t[0].input,""===j?a.dialog(0):(N=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.Package.setQuantityMax(j).then((function(t){var n=t.status;n?(a.dialog(1),N.close(),a.items[e].res=n):(N.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),N.close(),a.dialog(2)}))),n.next=128;break;case 119:if(18!=e){n.next=127;break}return n.next=122,a.CherryStakeERC20.fundAddr();case 122:B=n.sent,console.log(B),a.items[e].res=B,n.next=128;break;case 127:19==e?(console.log(e),Q=t[0].input,""===Q?a.dialog(0):(I=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.CherryStakeERC20.setTeamRatio(Q).then((function(t){var n=t.status;n?(a.dialog(1),I.close(),a.items[e].res=n):(I.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),I.close(),a.dialog(2)})))):20==e&&a.CherryStakeERC20.teamRatio().then((function(t){a.items[e].res=t,console.log(t)})).catch((function(t){a.items[e].res="false",console.log(t)}));case 128:case"end":return n.stop()}}),n)})))()},nav:function(){this.$router.push("")}},data:function(){return{Package:{},num:0,CherryStakeERC20:{},items:[{res:"",tit:"1.设置管理员合约地址",tips:["请求合约名: CherryStakeERC20","请求方法: setManager","请求方式: send"],tableData:[{name:"addr",type:"address",state:"输入manager合约地址",remark:""}],test:[{place:"addr",input:""}]},{res:"",tit:"2.获取合约管理员地址",tips:["请求合约名: CherryStakeERC20","请求方法: manager","请求方式: call"],tableData:[],test:[]},{res:"",tit:"3.设置是否运行",tips:["请求合约名: CherryStakeERC20","请求方法: setRunning","请求方式: send"],tableData:[{name:"running",type:"bool",state:"当前程序是否跑起来",remark:""}],test:[{place:"running",input:""}]},{res:"",tit:"4.设置是否上榜",tips:["请求合约名: CherryStakeERC20","请求方法: setRanking","请求方式: send"],tableData:[{name:"ranking",type:"bool",state:"判断是否上榜",remark:"类似于排名"}],test:[{place:"ranking",input:""}]},{res:"",tit:"5.设置资金地址",tips:["请求合约名: CherryStakeERC20","请求方法: setFundAddr","请求方式: send"],tableData:[{name:"addr",type:"address",state:"收钱地址",remark:""}],test:[{place:"addr",input:""}]},{res:"",tit:"6.设置背包卡片品质等级的价格",tips:["请求合约名: CherryStakeERC20","请求方法: setRarityAmounts","请求方式: send"],tableData:[{name:"amounts",type:"uint256[]",state:"设置背包卡片品质等级的价格",remark:"多个请使用 , 隔开"}],test:[{place:"amounts",input:""}]},{res:"",tit:"7.获取背包卡片品质等级的价格",tips:["请求合约名: CherryStakeERC20","请求方法: rarityAmounts","请求方式: call"],tableData:[{name:"num",type:"uint256",state:"下标 0，1，2",remark:""}],test:[{place:"num",input:""}]},{res:"",tit:"8.添加多个卡片类型",tips:["请求合约名: CherryStakeERC20","请求方法: addCardTypes","请求方式: send"],tableData:[{name:"nums",type:"uint16[]",state:"多个使用 ，隔开",remark:""},{name:"rarity",type:"uint16",state:"",remark:"稀有度：1(R),2(SR),3(SSR)"}],test:[{place:"nums",input:""},{place:"rarity",input:""}]},{res:"",tit:"9.设置多个卡片类型",tips:["请求合约名: CherryStakeERC20","请求方法: setCardTypes","请求方式: send"],tableData:[{name:"nums",type:"uint16[]",state:"多个使用 ，隔开",remark:""},{name:"rarity",type:"uint16",state:"",remark:"稀有度：1(R),2(SR),3(SSR)"}],test:[{place:"nums",input:""},{place:"rarity",input:""}]},{res:"",tit:"10.移除所有卡片类型",tips:["请求合约名: CherryStakeERC20","请求方法: removeAllCardTypes","请求方式: send"],tableData:[{name:"rarity",type:"uint16",state:"",remark:"稀有度：1(R),2(SR),3(SSR)"}],test:[{place:"rarity",input:""}]},{res:"",tit:"11.获取卡片类型(已失效)",tips:["请求合约名: CherryStakeERC20","请求方法: cardTypes","请求方式: call"],tableData:[{name:"num",type:"uint256",state:"",remark:""}],test:[{place:"num",input:""}]},{res:"",tit:"12.设置卡牌稀有度",tips:["请求合约名: CherryStakeERC20","请求方法: setRarityRandomNum","请求方式: send"],tableData:[{name:"RandomNums[]",type:"uint256",state:"幸运卡包稀有度[80,18,2]",remark:"代表80%概率、18%概率、2%概率"}],test:[{place:"RandomNums[]",input:""}]},{res:"",tit:"13.查看卡牌稀有度",tips:["请求合约名: CherryStakeERC20","请求方法: RarityRandomNums","请求方式: call"],tableData:[{name:"num",type:"int",state:"数组下标",remark:"0..."}],test:[{place:"num",input:""}]},{res:"",tit:"14.获取R卡片类型",tips:["请求合约名: CherryStakeERC20","请求方法: cardRTypes","请求方式: call"],tableData:[{name:"num",type:"uint256",state:"",remark:"传入数组当前下标 1,2,3..."}],test:[{place:"num",input:""}]},{res:"",tit:"15.获取SR卡片类型",tips:["请求合约名: CherryStakeERC20","请求方法: cardSRTypes","请求方式: call"],tableData:[{name:"num",type:"uint256",state:"",remark:"传入数组当前下标 1,2,3..."}],test:[{place:"num",input:""}]},{res:"",tit:"16.获取SSR卡片类型",tips:["请求合约名: CherryStakeERC20","请求方法: cardSSRTypes","请求方式: call"],tableData:[{name:"num",type:"uint256",state:"",remark:"传入数组当前下标 1,2,3..."}],test:[{place:"num",input:""}]},{res:"",tit:"17.设置LP最大质押数量",tips:["请求合约名: CherryStakeERC20","请求方法: setMortgageMax","请求方式: send"],tableData:[{name:"num",type:"uint256",state:"",remark:""}],test:[{place:"num",input:""}]},{res:"",tit:"18.设置用户领取最大数量",tips:["请求合约名: Package","请求方法: setQuantityMax","请求方式: send"],tableData:[{name:"num",type:"uint256",state:"",remark:""}],test:[{place:"num",input:""}]},{res:"",tit:"19.获取手续费地址",tips:["请求合约名: CherryStakeERC20","请求方法: fundAddr","请求方式: call"],tableData:[],test:[]},{res:"",tit:"20.配置质押量扣除比例",tips:["请求合约名: CherryStakeERC20","请求方法: setTeamRatio","请求方式: send"],tableData:[{name:"num",type:"uint256",state:"0-100",remark:""}],test:[{place:"num",input:""}]},{res:"",tit:"21.获取质押量扣除比例",tips:["请求合约名: CherryStakeERC20","请求方法: teamRatio","请求方式: call"],tableData:[],test:[]}]}},components:{}}),l=Object(i["a"])({},r),c=l,u=(a("862d"),a("2877")),p=Object(u["a"])(c,n,s,!1,null,"d8a8a904",null);t["default"]=p.exports}}]);