(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59726ebe"],{7893:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"index"},[o("el-container",[o("el-main",{attrs:{id:"test"}},[o("div",{staticClass:"test"},[o("div",{staticClass:"table"},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[o("el-table-column",{attrs:{label:"抽球商店"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("type")(e.row.source))+" ")]}}])}),o("el-table-column",{attrs:{label:"实际购买数量","show-overflow-tooltip":!0,prop:"origin_sold"}}),o("el-table-column",{attrs:{label:"手动设置数量","show-overflow-tooltip":!0,prop:"sold"}}),o("el-table-column",{attrs:{label:"操作","show-overflow-tooltip":!0,align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(o){return t.handleEdit(e.$index,e.row)}}},[t._v("修改")])]}}])})],1)],1),o("el-dialog",{attrs:{title:(t.type,"设置数量"),visible:t.dialogFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[o("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[o("el-form-item",{attrs:{label:"抽球商店"}},[o("span",[t._v(t._s(t._f("type")(t.form.source)))])]),o("el-form-item",{attrs:{label:"数量设置"}},[o("el-input",{attrs:{placeholder:"输入数字"},model:{value:t.form.sold,callback:function(e){t.$set(t.form,"sold",e)},expression:"form.sold"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:t.change}},[t._v("提交")]),o("el-button",{on:{click:t.onCancel}},[t._v("取消")])],1)],1)],1)],1)])],1)],1)},a=[],i=o("5530"),s=o("3835"),l=o("1da1"),c=(o("96cf"),o("a9e3"),o("159b"),o("498a"),{components:{},computed:{},data:function(){return{page:1,type:"",form:{source:1,sold:0},formLabelWidth:"120px",dialogFormVisible:!1,tableData:[],search:""}},filters:{type:function(t){t=Number(t)-1;var e=["精灵球","大师球","超级球"];return e[t]}},mounted:function(){this.getBalls()},methods:{notify:function(t,e){switch(t){case 0:this.$notify.success({title:"已售球数量管理",message:"".concat(e,"成功"),showClose:!1});break;case 1:this.$notify.error({title:"已售球数量管理",message:"".concat(e,"失败"),showClose:!1});break;default:break}},getBalls:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return 1,t.prev=1,t.next=4,e.$axiosBsc.get("/Ball/fetchBall");case 4:o=t.sent,n=o.data.msg,console.log(n),n=n.reverse(),e.tableData=n.length>0?n:[],t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()},getData:function(t,e){var o=this,n=this.$loading({lock:!0,text:"请求中"});this.$axiosBsc.post("/notice/getNFTData",{num:t,page:e}).then((function(t){n.close(),console.log(t);var e=t.data.data,a=Object(s["a"])(e,1),i=a[0];console.log(i),void 0==i?o.tableData=[]:(o.tableData=e[0],o.filtrationData())})).catch((function(t){console.log(t)}))},formInit:function(){this.form={user_address:"",title:"",type:"1",is_top:!1,status:!1,comment:"",language:"zh"}},filtrationData:function(){this.tableData.forEach((function(t){1==t.status?t.status=!0:t.status=!1,1==t.is_top?t.is_top=!0:t.is_top=!1}))},creat:function(){this.formInit(),this.dialogFormVisible=!0,this.type="add"},formHandel:function(){var t=this.form,e=this.$utils.delBlank,o=Object(i["a"])({},t);console.log(o),o.user_address=e(o.user_address),o.title=this.$.trim(o.title),o.comment=this.$.trim(o.comment);var n=o.user_address,a=o.title,s=o.comment,l=o.is_top,c=o.status,r=o.language;console.log(s),""===n||""===a||""===s||""===r?this.$message({message:"你有必选项未填",type:"warning"}):(o.is_top=l?1:0,o.status=c?1:0),console.log(o);var u=this.type;"add"===u?(console.log("添加"),this.addNotice(o)):(console.log("修改"),this.editNotice(o))},isTop:function(t,e){var o=Object(i["a"])({},e);o.is_top?o.is_top=1:o.is_top=0,console.log(o),this.upNotice(o)},isOpen:function(t,e){var o=Object(i["a"])({},e);o.status?o.status=1:o.status=0,console.log(o),this.openNotice(o)},delNotice:function(t){var e=this,o=this.page;this.$axiosBsc.post("/notice/delNFTData",t).then((function(t){e.notify(0,"删除公告"),e.handleCurrentChange(o)})).catch((function(t){console.log(t),e.notify(1,"删除公告")}))},openNotice:function(t){var e=this,o=this.$loading({lock:!0,text:"请求中"}),n=t.status;this.$axiosBsc.post("/notice/stsNFTData",t).then((function(t){console.log(t);var a="";a=1==n?"开启公告":"关闭",e.notify(0,a),o.close()})).catch((function(t){console.log(t);var a="";a=n?"开启公告":"关闭",e.notify(0,a),o.close()}))},upNotice:function(t){var e=this,o=this.$loading({lock:!0,text:"请求中"}),n=t.is_top;this.$axiosBsc.post("/notice/topNFTData",t).then((function(t){var a="";a=1==n?"置顶公告":"取消置顶",e.notify(0,a),o.close()})).catch((function(t){console.log(t);var a="";a=n?"置顶公告":"取消置顶公告",e.notify(0,a),o.close()}))},addNotice:function(t){var e=this,o=this.page;this.$axiosBsc.post("/notice/insNFTData",t).then((function(t){e.notify(0,"添加公告"),e.dialogFormVisible=!1,e.handleCurrentChange(o)})).catch((function(t){console.log(t),e.notify(1,"添加公告"),e.dialogFormVisible=!1}))},editNotice:function(t){var e=this;this.$axiosBsc.post("/notice/upNFTData",t).then((function(t){e.notify(0,"修改公告"),e.dialogFormVisible=!1;var o=e.page;e.handleCurrentChange(o)})).catch((function(t){console.log(t),e.notify(1,"修改公告"),e.dialogFormVisible=!1}))},change:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var o,n,a,s,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t.$loading({lock:!0,text:"请求中"}),e.prev=1,n=t.form,a=Object(i["a"])({},n),e.next=6,t.$axiosBsc.post("/Ball/updateBall",a);case 6:s=e.sent,console.log(s),l=s.data.code,1==l?(t.notify(0,"修改"),t.dialogFormVisible=!1,o.close(),t.getBalls()):(t.notify(1,"修改"),o.close(),t.getBalls()),e.next=18;break;case 12:e.prev=12,e.t0=e["catch"](1),console.log(e.t0),t.notify(1,"修改"),o.close(),t.getBalls();case 18:case"end":return e.stop()}}),e,null,[[1,12]])})))()},onSubmit:function(){this.formHandel()},onCancel:function(){this.dialogFormVisible=!1},prev:function(t){},next:function(t){},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.getData(10,t),sessionStorage.setItem("page",t),this.page=t},handleEdit:function(t,e){console.log(e),this.form=e,this.dialogFormVisible=!0},handleDelete:function(t,e){var o=this;this.$confirm("此操作将删除该公告, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){o.delNotice(e)})).catch((function(){o.$message({type:"info",message:"已取消删除"})}))}}}),r=Object(i["a"])({},c),u=r,f=(o("b7da"),o("2877")),h=Object(f["a"])(u,n,a,!1,null,"97f5154c",null);e["default"]=h.exports},b7da:function(t,e,o){"use strict";o("d9f3")},d9f3:function(t,e,o){}}]);