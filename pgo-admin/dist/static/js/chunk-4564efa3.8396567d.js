(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4564efa3"],{"2db1":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"index"},[a("el-container",[a("el-aside",{attrs:{width:"215px"}},[a("div",[e._v("功能列表")]),e._l(e.items,(function(t,s){return a("el-link",{key:s,class:e.num==s?"act":"",attrs:{underline:!1},nativeOn:{click:function(t){return e.skip(s)}}},[e._v(" "+e._s(s+1)+"."+e._s(t.tit)+" "+e._s(t.tips[1].split(":")[1])+" ")])}))],2),a("el-main",{attrs:{id:"test"}},[a("div",{staticClass:"test"},e._l(e.items,(function(t,s){return a("div",{key:s,staticClass:"item",attrs:{id:s}},[a("h2",[e._v(" "+e._s(s+1)+"."+e._s(t.tit))]),a("div",{staticClass:"tip"},e._l(t.tips,(function(t,s){return a("span",{key:s},[e._v(e._s(t))])})),0),a("p",[e._v("请求参数")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"name",label:"参数名",width:"180"}}),a("el-table-column",{attrs:{prop:"type",label:"参数类型",width:"180"}}),a("el-table-column",{attrs:{prop:"state",label:"中文说明"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注"}})],1),a("h3",[e._v("发送请求")]),a("div",[e._l(t.test,(function(t,s){return a("el-input",{key:s,attrs:{placeholder:t.place},model:{value:t.input,callback:function(a){e.$set(t,"input",a)},expression:"items.input"}})})),a("div",{staticClass:"bottom"},[a("el-button",{attrs:{type:"primary"},on:{click:function(a){return e.test(s,t.test)}}},[e._v("确认")]),a("span",{staticClass:"res"},[e._v("打印结果: "),a("span",{staticClass:"show"},[e._v(e._s(t.res))])])],1)],2)],1)})),0)])],1)],1)},n=[],l=a("5530"),i=a("1da1"),o=(a("96cf"),a("d3b7"),a("25f0"),a("ac1f"),a("1276"),a("159b"),a("3ca3"),a("ddb0"),{computed:{},mounted:function(){console.log(this.$DApp),this.init()},methods:{skip:function(e){this.num=e,console.log(e);var t=document.getElementById("test"),a=document.getElementById(e);t.scrollTop=a.offsetTop-50},init:function(){var e=this;this.$DApp.SaleLuckyEvents.init().then((function(t){e.SaleLuckyEvents=t,console.log(e.SaleLuckyEvents)})).catch((function(e){console.log(e)}))},dialog:function(e){0==e?this.$message({message:"请补充内容",type:"warning"}):1==e?this.$notify({title:"设置成功",message:"恭喜您已经设置成功",type:"success"}):2==e&&this.$notify.error({title:"出现错误",message:"请查看控制台报错信息"})},test:function(e,t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var n,l,i,o,c,r,u,p,g,d,k,m,b,y,f,v,S,x,h,E,L,R,D,T,$,_,w,C,A,M,U,W,F,N,O,P,j,B,Q,I,J,q,z,G,H,K,V,X,Y,Z,ee,te,ae,se,ne,le,ie,oe,ce;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(a.$utils.delBlank,0!=e){s.next=7;break}n=t[0].input,console.log(n),""===n?a.dialog(0):(l=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.SaleLuckyEvents.setManager(n).then((function(t){var s=t.status;s?(a.dialog(1),l.close(),a.items[e].res=s):(l.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),l.close(),a.dialog(2)}))),s.next=233;break;case 7:if(1!=e){s.next=15;break}return s.next=10,a.SaleLuckyEvents.manager();case 10:i=s.sent,console.log(i),a.items[e].res=i,s.next=233;break;case 15:if(2!=e){s.next=22;break}o=t[0].input,o=a.SaleLuckyEvents.web3.utils.toWei(o.toString()),console.log(o),""===o?a.dialog(0):(c=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.SaleLuckyEvents.setPrice(o).then((function(t){var s=t.status;s?(a.dialog(1),c.close(),a.items[e].res=s):(c.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),c.close(),a.dialog(2)}))),s.next=233;break;case 22:if(3!=e){s.next=27;break}r=t[0].input,""===r?a.dialog(0):(u=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.SaleLuckyEvents.setTokenAmount(r).then((function(t){var s=t.status;s?(a.dialog(1),u.close(),a.items[e].res=s):(u.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),u.close(),a.dialog(2)}))),s.next=233;break;case 27:if(4!=e){s.next=32;break}p=t[0].input,""===p?a.dialog(0):(g=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.SaleLuckyEvents.setMaxSale(p).then((function(t){var s=t.status;s?(a.dialog(1),g.close(),a.items[e].res=s):(g.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),g.close(),a.dialog(2)}))),s.next=233;break;case 32:if(5!=e){s.next=39;break}d=t[0].input,console.log(d),console.log(d),""===d?a.dialog(0):(k=[],d=d.split(","),d.forEach((function(e){e=a.$utils.web3Utils.convertUnit(e,a.SaleLuckyEvents.web3),k.push(e)})),Promise.all(k).then((function(t){d=t,console.log(d);var s=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});a.SaleLuckyEvents.setRarityWeights(d).then((function(t){var n=t.status;n?(a.dialog(1),s.close(),a.items[e].res=n):(s.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),s.close(),a.dialog(2)}))}))),s.next=233;break;case 39:if(6!=e){s.next=45;break}m=t[0].input,console.log(m),""===m?a.dialog(0):a.SaleLuckyEvents.rarityWeights(m).then((function(t){console.log(t),a.items[e].res=t})).catch((function(t){a.items[e].res="false",console.log(t)})),s.next=233;break;case 45:if(7!=e){s.next=49;break}a.SaleLuckyEvents.rarityWeightTotal().then((function(t){console.log(t),a.items[e].res=t})).catch((function(t){a.items[e].res="false",console.log(t)})),s.next=233;break;case 49:if(8!=e){s.next=54;break}b=t[0].input,""===b?a.dialog(0):(y=[],b=b.split(","),b.forEach((function(e){e=a.$utils.web3Utils.convertUnit(e,a.SaleLuckyEvents.web3),y.push(e)})),Promise.all(y).then((function(t){b=t,console.log(b);var s=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});a.SaleLuckyEvents.setRarityAmounts(b).then((function(t){var n=t.status;n?(a.dialog(1),s.close(),a.items[e].res=n):(s.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),s.close(),a.dialog(2)}))}))),s.next=233;break;case 54:if(9!=e){s.next=60;break}f=t[0].input,console.log(f),""===f?a.dialog(0):a.SaleLuckyEvents.rarityAmounts(f).then((function(t){a.items[e].res=t})).catch((function(t){a.items[e].res="false",console.log(t)})),s.next=233;break;case 60:if(10!=e){s.next=66;break}v=t[0].input,console.log(v),""===v?a.dialog(0):a.SaleLuckyEvents.cardTypes(v).then((function(t){a.items[e].res=t})).catch((function(t){a.items[e].res="false",console.log(t)})),s.next=233;break;case 66:if(11!=e){s.next=73;break}S=t[0].input,x=t[1].input,console.log(S),""===S?a.dialog(0):(h=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.SaleLuckyEvents.addCardType(S,x).then((function(t){var s=t.status;s?(a.dialog(1),h.close(),a.items[e].res=s):(h.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),h.close(),a.dialog(2)}))),s.next=233;break;case 73:if(12!=e){s.next=82;break}E=t[0].input,L=t[1].input,E=E.split(","),console.log(E),console.log(L),""===E||""===L?a.dialog(0):(R=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.SaleLuckyEvents.addCardTypes(E,L).then((function(t){var s=t.status;s?(a.dialog(1),R.close(),a.items[e].res=s):(R.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),R.close(),a.dialog(2)}))),s.next=233;break;case 82:if(13!=e){s.next=90;break}D=t[0].input,T=t[1].input,D=D.split(","),console.log(D),""===D?a.dialog(0):($=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.SaleLuckyEvents.setCardTypes(D,T).then((function(t){var s=t.status;s?(a.dialog(1),$.close(),a.items[e].res=s):($.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),$.close(),a.dialog(2)}))),s.next=233;break;case 90:if(14!=e){s.next=97;break}_=t[0].input,w=t[1].input,console.log(_),""===_?a.dialog(0):(C=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.SaleLuckyEvents.removeCardType(_,w).then((function(t){var s=t.status;s?(a.dialog(1),C.close(),a.items[e].res=s):(C.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),C.close(),a.dialog(2)}))),s.next=233;break;case 97:if(15!=e){s.next=105;break}A=t[0].input,M=t[1].input,A=A.split(","),console.log(A),""===A?a.dialog(0):(U=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.SaleLuckyEvents.removeCardTypes(A,M).then((function(t){var s=t.status;s?(a.dialog(1),U.close(),a.items[e].res=s):(U.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),U.close(),a.dialog(2)}))),s.next=233;break;case 105:if(16!=e){s.next=111;break}W=t[0].input,F=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.SaleLuckyEvents.removeAllCardTypes(W).then((function(t){console.log(t);var s=t.status;a.items[e].res=s,F.close()})).catch((function(t){a.items[e].res="false",console.log(t),F.close()})),s.next=233;break;case 111:if(17!=e){s.next=117;break}N=t[0].input,console.log(N),""===N?a.dialog(0):(O=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.SaleLuckyEvents.setShopToken(N).then((function(t){var s=t.status;s?(a.dialog(1),O.close(),a.items[e].res=s):(O.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),O.close(),a.dialog(2)}))),s.next=233;break;case 117:if(18!=e){s.next=123;break}P=t[0].input,console.log(P),""===P?a.dialog(0):(j=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.SaleLuckyEvents.setQuantityMax(P).then((function(t){var s=t.status;s?(a.dialog(1),j.close(),a.items[e].res=s):(j.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),j.close(),a.dialog(2)}))),s.next=233;break;case 123:if(19!=e){s.next=127;break}a.SaleLuckyEvents.sold().then((function(t){console.log(t),a.items[e].res=t})).catch((function(t){a.items[e].res="false",console.log(t),a.dialog(2)})),s.next=233;break;case 127:if(20!=e){s.next=131;break}a.SaleLuckyEvents.maxForSale().then((function(t){console.log(t),a.items[e].res=t})).catch((function(t){a.items[e].res="false",console.log(t),a.dialog(2)})),s.next=233;break;case 131:if(21!=e){s.next=138;break}B=t[0].input,B=B.split(","),console.log(B),""===B?a.dialog(0):(Q=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.SaleLuckyEvents.setRarityRandomNum(B).then((function(t){var s=t.status;s?(a.dialog(1),Q.close(),a.items[e].res=s):(Q.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),Q.close(),a.dialog(2)}))),s.next=233;break;case 138:if(22!=e){s.next=147;break}return I=t[0].input,s.next=142,a.SaleLuckyEvents.RarityRandomNums(I);case 142:J=s.sent,console.log(J),a.items[e].res=J,s.next=233;break;case 147:if(23!=e){s.next=153;break}q=t[0].input,console.log(q),""===q?a.dialog(0):(z=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.SaleLuckyEvents.setMaxSaleForUser(q).then((function(t){var s=t.status;s?(a.dialog(1),z.close(),a.items[e].res=s):(z.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),z.close(),a.dialog(2)}))),s.next=233;break;case 153:if(24!=e){s.next=161;break}return s.next=156,a.SaleLuckyEvents.maxSaleForUser();case 156:G=s.sent,console.log(G),a.items[e].res=G,s.next=233;break;case 161:if(25!=e){s.next=170;break}return H=t[0].input,s.next=165,a.SaleLuckyEvents.userCount(H);case 165:K=s.sent,console.log(K),a.items[e].res=K,s.next=233;break;case 170:if(26!=e){s.next=176;break}V=t[0].input,console.log(V),""===V?a.dialog(0):a.SaleLuckyEvents.cardRTypes(V).then((function(t){a.items[e].res=t,console.log(t)})).catch((function(t){a.items[e].res="false",console.log(t)})),s.next=233;break;case 176:if(27!=e){s.next=182;break}X=t[0].input,console.log(X),""===X?a.dialog(0):a.SaleLuckyEvents.cardSRTypes(X).then((function(t){a.items[e].res=t,console.log(t)})).catch((function(t){a.items[e].res="false",console.log(t)})),s.next=233;break;case 182:if(28!=e){s.next=188;break}Y=t[0].input,console.log(Y),""===Y?a.dialog(0):a.SaleLuckyEvents.cardSSRTypes(Y).then((function(t){a.items[e].res=t,console.log(t)})).catch((function(t){a.items[e].res="false",console.log(t)})),s.next=233;break;case 188:if(29!=e){s.next=193;break}Z=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.SaleLuckyEvents.stopShop().then((function(t){var s=t.status;s?(a.dialog(1),Z.close(),a.items[e].res=s):(Z.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),Z.close(),a.dialog(2)})),s.next=233;break;case 193:if(30!=e){s.next=200;break}ee=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),te=t[0].input,console.log(te),""===te?a.dialog(0):a.SaleLuckyEvents.setTeamRatio(te).then((function(t){var s=t.status;s?(a.dialog(1),ee.close(),a.items[e].res=s):(ee.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),ee.close(),a.dialog(2)})),s.next=233;break;case 200:if(31!=e){s.next=207;break}ae=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),se=t[0].input,console.log(se),""===se?a.dialog(0):a.SaleLuckyEvents.setMaxSale(se).then((function(t){var s=t.status;s?(a.dialog(1),ae.close(),a.items[e].res=s):(ae.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),ae.close(),a.dialog(2)})),s.next=233;break;case 207:if(32!=e){s.next=214;break}ne=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),le=t[0].input,console.log(le),""===le?a.dialog(0):a.SaleLuckyEvents.setStartTime(le).then((function(t){var s=t.status;s?(a.dialog(1),ne.close(),a.items[e].res=s):(ne.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),ne.close(),a.dialog(2)})),s.next=233;break;case 214:if(33!=e){s.next=221;break}ie=a.$loading({lock:!0,text:"请求中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),oe=t[0].input,console.log(oe),""===oe?a.dialog(0):a.SaleLuckyEvents.setEndTime(oe).then((function(t){var s=t.status;s?(a.dialog(1),ie.close(),a.items[e].res=s):(ie.close(),a.dialog(2))})).catch((function(t){a.items[e].res="false",console.log(t),ie.close(),a.dialog(2)})),s.next=233;break;case 221:if(34!=e){s.next=233;break}return s.prev=222,s.next=225,a.SaleLuckyEvents.tokenAmount();case 225:ce=s.sent,console.log(ce),a.items[e].res=ce,s.next=233;break;case 230:s.prev=230,s.t0=s["catch"](222),console.log(s.t0);case 233:case"end":return s.stop()}}),s,null,[[222,230]])})))()},nav:function(){this.$router.push("")}},data:function(){return{num:0,SaleLuckyEvents:{},items:[{res:"",tit:"设置管理员合约地址",tips:["请求合约名: SaleLuckyEvents","请求方法: setManager","请求方式: send"],tableData:[{name:"addr",type:"address",state:"输入manager合约地址",remark:""}],test:[{place:"addr",input:""}]},{res:"",tit:"获取合约管理员地址",tips:["请求合约名: SaleLuckyEvents","请求方法: manager","请求方式: call"],tableData:[],test:[]},{res:"",tit:"设置背包卡片售价",tips:["请求合约名: SaleLuckyEvents","请求方法: setPrice","请求方式: send"],tableData:[{name:"_price",type:"uint256",state:"设置售价",remark:""}],test:[{place:"_price",input:""}]},{res:"",tit:"设置背包卡牌的价值",tips:["请求合约名: SaleLuckyEvents","请求方法: setTokenAmount","请求方式: send"],tableData:[{name:"amount",type:"uint256",state:"设置该卡包的价值",remark:""}],test:[{place:"amount",input:""}]},{res:"",tit:"设置最大卡包销售数量",tips:["请求合约名: SaleLuckyEvents","请求方法: setMaxSale","请求方式: send"],tableData:[{name:"number",type:"uint256",state:"传入的卡包数量",remark:""}],test:[{place:"number",input:""}]},{res:"",tit:"设置多个背包卡片品质等级的概率",tips:["请求合约名: SaleLuckyEvents","请求方法: setRarityWeights","请求方式: send"],tableData:[{name:"weights",type:"uint256[]",state:"多个使用 ， 隔开",remark:""}],test:[{place:"weights",input:""}]},{res:"",tit:"获取单个背包卡片品质等级的概率",tips:["请求合约名: SaleLuckyEvents","请求方法: rarityWeights","请求方式: call"],tableData:[{name:"weights",type:"uint256",state:"",remark:"传入下标 0,1,2..."}],test:[{place:"weights",input:""}]},{res:"",tit:"rarityWeightTotal",tips:["请求合约名: SaleLuckyEvents","请求方法: rarityWeightTotal","请求方式: call"],tableData:[],test:[]},{res:"",tit:" 设置背包卡片品质等级的价格",tips:["请求合约名: SaleLuckyEvents","请求方法: setRarityAmounts","请求方式: send"],tableData:[{name:"amounts",type:"uint256[]",state:"设置背包卡片品质等级的价格",remark:"多个请使用 , 隔开"}],test:[{place:"amounts",input:""}]},{res:"",tit:"获取背包卡片品质等级的价格",tips:["请求合约名: SaleLuckyEvents","请求方法: rarityAmounts","请求方式: call"],tableData:[{name:"num",type:"uint256",state:"下标 0，1，2",remark:""}],test:[{place:"num",input:""}]},{res:"",tit:"获取卡片类型(已作废)",tips:["请求合约名: SaleLuckyEvents","请求方法: cardTypes","请求方式: call"],tableData:[{name:"num",type:"uint256",state:"",remark:"传入数组当前下标 1,2,3..."}],test:[{place:"num",input:""}]},{res:"",tit:"添加单个卡片类型",tips:["请求合约名: SaleLuckyEvents","请求方法: addCardType","请求方式: send"],tableData:[{name:"num",type:"uint16",state:"",remark:""},{name:"rarity",type:"uint16",state:"",remark:"稀有度：1(R),2(SR),3(SSR)"}],test:[{place:"num",input:""},{place:"rarity",input:""}]},{res:"",tit:"添加多个卡片类型",tips:["请求合约名: SaleLuckyEvents","请求方法: addCardTypes","请求方式: send"],tableData:[{name:"nums",type:"uint16[]",state:"多个使用 ，隔开",remark:""},{name:"rarity",type:"uint16",state:"",remark:"稀有度：1(R),2(SR),3(SSR)"}],test:[{place:"nums",input:""},{place:"rarity",input:""}]},{res:"",tit:"设置多个卡片类型",tips:["请求合约名: SaleLuckyEvents","请求方法: setCardTypes","请求方式: send"],tableData:[{name:"nums",type:"uint16[]",state:"多个使用 ，隔开",remark:"参数不确定"},{name:"rarity",type:"uint16",state:"",remark:"稀有度：1(R),2(SR),3(SSR)"}],test:[{place:"nums",input:""},{place:"rarity",input:""}]},{res:"",tit:"移除单个卡片类型",tips:["请求合约名: SaleLuckyEvents","请求方法: removeCardType","请求方式: send"],tableData:[{name:"num",type:"uint256",state:"",remark:"传入数组下标（0,1,2...）"},{name:"rarity",type:"uint16",state:"",remark:"稀有度：1(R),2(SR),3(SSR)"}],test:[{place:"num",input:""},{place:"rarity",input:""}]},{res:"",tit:"移除多个卡片类型",tips:["请求合约名: SaleLuckyEvents","请求方法: removeCardTypes","请求方式: send"],tableData:[{name:"nums",type:"uint256[]",state:"多个使用 ，隔开",remark:"传入下标 0,1...使用英文,"},{name:"rarity",type:"uint16",state:"",remark:"稀有度：1(R),2(SR),3(SSR)"}],test:[{place:"nums",input:""},{place:"rarity",input:""}]},{res:"",tit:"移除所有卡片类型",tips:["请求合约名: SaleLuckyEvents","请求方法: removeAllCardTypes","请求方式: send"],tableData:[{name:"rarity",type:"uint16",state:"",remark:"稀有度：1(R),2(SR),3(SSR)"}],test:[{place:"rarity",input:""}]},{res:"",tit:"setShopToken",tips:["请求合约名: SaleLuckyEvents","请求方法: setShopToken","请求方式: send"],tableData:[{name:"str",type:"string",state:"合约的代币地址",remark:"未测试，参数不确定"}],test:[{place:"str",input:""}]},{res:"",tit:"setQuantityMax",tips:["请求合约名: SaleLuckyEvents","请求方法: setQuantityMax","请求方式: send"],tableData:[{name:"num",type:"uint256",state:"",remark:""}],test:[{place:"num",input:""}]},{res:"",tit:"sold",tips:["请求合约名: SaleLuckyEvents","请求方法: sold","请求方式: call"],tableData:[],test:[]},{res:"",tit:"maxForSale",tips:["请求合约名: SaleLuckyEvents","请求方法: maxForSale","请求方式: call"],tableData:[],test:[]},{res:"",tit:"设置卡牌稀有度",tips:["请求合约名: SaleLuckyEvents","请求方法: setRarityRandomNum","请求方式: send"],tableData:[{name:"RandomNums[]",type:"uint256",state:"幸运卡包稀有度[80,18,2]",remark:"代表80%概率、18%概率、2%概率"}],test:[{place:"RandomNums[]",input:""}]},{res:"",tit:"查看卡牌稀有度",tips:["请求合约名: SaleLuckyEvents","请求方法: RarityRandomNums","请求方式: call"],tableData:[{name:"num",type:"int",state:"数组下标",remark:"0..."}],test:[{place:"num",input:""}]},{res:"",tit:"设置用户最大购买数量",tips:["请求合约名: SaleLuckyEvents","请求方法: setMaxSaleForUser","请求方式: send"],tableData:[{name:"number",type:"uint256",state:"用户最大购买数量",remark:"当前默认10"}],test:[{place:"number",input:""}]},{res:"",tit:"获取用户最大购买数量",tips:["请求合约名: SaleLuckyEvents","请求方法: maxSaleForUser","请求方式: call"],tableData:[],test:[]},{res:"",tit:"查看用户当前已经购买数量",tips:["请求合约名: SaleLuckyEvents","请求方法: userCount","请求方式: call"],tableData:[{name:"_address",type:"address",state:"用户钱包地址",remark:""}],test:[{place:"_address",input:""}]},{res:"",tit:"获取R卡片类型",tips:["请求合约名: SaleLuckyEvents","请求方法: cardRTypes","请求方式: call"],tableData:[{name:"num",type:"uint256",state:"",remark:"传入数组当前下标 1,2,3..."}],test:[{place:"num",input:""}]},{res:"",tit:"获取SR卡片类型",tips:["请求合约名: SaleLuckyEvents","请求方法: cardSRTypes","请求方式: call"],tableData:[{name:"num",type:"uint256",state:"",remark:"传入数组当前下标 1,2,3..."}],test:[{place:"num",input:""}]},{res:"",tit:"获取SSR卡片类型",tips:["请求合约名: SaleLuckyEvents","请求方法: cardSSRTypes","请求方式: call"],tableData:[{name:"num",type:"uint256",state:"",remark:"传入数组当前下标 1,2,3..."}],test:[{place:"num",input:""}]},{res:"",tit:"stopShop",tips:["请求合约名: SaleLuckyEvents","请求方法: stopShop","请求方式: send"],tableData:[],test:[]},{res:"",tit:"配置质押量扣除比例",tips:["请求合约名: SaleLuckyEvents","请求方法: setTeamRatio","请求方式: send"],tableData:[{name:"ratio",type:"uint256",state:"比例值",remark:"(0-100)"}],test:[{place:"ratio",input:""}]},{res:"",tit:"设置卡包总量",tips:["请求合约名: SaleLuckyEvents","请求方法: setMaxSale","请求方式: send"],tableData:[{name:"num",type:"uint256",state:"数量",remark:""}],test:[{place:"num",input:""}]},{res:"",tit:"设置开始时间",tips:["请求合约名: SaleLuckyEvents","请求方法: setStartTime","请求方式: send"],tableData:[{name:"time",type:"uint256",state:"时间",remark:""}],test:[{place:"time",input:""}]},{res:"",tit:"设置结束时间",tips:["请求合约名: SaleLuckyEvents","请求方法: setEndTime","请求方式: send"],tableData:[{name:"time",type:"uint256",state:"时间",remark:""}],test:[{place:"time",input:""}]},{res:"",tit:"获取背包卡牌的价值",tips:["请求合约名: SaleLuckyEvents","请求方法: tokenAmount","请求方式: call"],tableData:[],test:[]}]}},components:{}}),c=Object(l["a"])({},o),r=c,u=(a("e9f8"),a("2877")),p=Object(u["a"])(r,s,n,!1,null,"7541d80a",null);t["default"]=p.exports},c75b:function(e,t,a){},e9f8:function(e,t,a){"use strict";a("c75b")}}]);