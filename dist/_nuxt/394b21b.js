(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{290:function(e,t,n){var content=n(300);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(77).default)("ee575bea",content,!0,{sourceMap:!1})},291:function(e,t,n){var content=n(302);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(77).default)("5ba4f451",content,!0,{sourceMap:!1})},292:function(e,t,n){var content=n(304);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(77).default)("78c8bdac",content,!0,{sourceMap:!1})},293:function(e,t,n){var content=n(306);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(77).default)("cd7533b6",content,!0,{sourceMap:!1})},294:function(e,t,n){var content=n(308);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(77).default)("f7df1cfe",content,!0,{sourceMap:!1})},295:function(e,t,n){"use strict";n.r(t);n(12),n(19),n(21),n(13),n(65);var r={props:["obj","keys"],computed:{csvText:function(){var e="";return this.keys.forEach((function(element){e+='"'+element+'",'})),e=e.slice(0,-1),e+="\n",this.obj.forEach((function(t){t.forEach((function(col){e+='"'+col+'",'})),e=e.slice(0,-1),e+="\n"})),e=e.slice(0,-1)}},methods:{selectAll:function(){document.getElementById("csvArea").select()}}},o=(n(299),n(66)),component=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("b-textarea",{staticClass:"vh40",attrs:{id:"csvArea",value:this.csvText},on:{click:this.selectAll}})}),[],!1,null,"68c65c32",null);t.default=component.exports},296:function(e,t,n){"use strict";n.r(t);n(21),n(6),n(17),n(65);var r={props:["obj","keys","types","ableTypes"],data:function(){return{currentCol:0,currentSelected:"Text",currentHeader:"",currentHeaderIndex:0,currentNumber:1}},methods:{addColumn:function(){this.$emit("addColumn")},addRow:function(){this.currentNumber=this.currentNumber>999?999:this.currentNumber,this.currentNumber=this.currentNumber<1?1:this.currentNumber,this.$emit("addRow",this.currentNumber)},setType:function(){this.$emit("setType",{col:this.currentCol,selected:this.currentSelected})},setHeader:function(){this.currentHeader=this.currentHeader.replace(/"/gim,"'"),this.$emit("setHeader",{col:this.currentHeaderIndex,header:this.currentHeader})},typeModalShow:function(e){this.currentCol=e,this.$bvModal.show("modal-t")},headerModalShow:function(e){this.currentHeader=this.keys[e],this.currentHeaderIndex=e,this.$bvModal.show("modal-h")},rowNumberModalShow:function(){this.currentNumber=5,this.$bvModal.show("modal-n")}}},o=(n(301),n(66)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{staticClass:"my-table",attrs:{fluid:""}},[n("b-row",{staticClass:"head"},[e._l(e.keys,(function(head,t){return n("b-col",{key:t},[n("b-button",{on:{click:function(n){return e.headerModalShow(t)}}},[e._v("\n        "+e._s(head)+"\n      ")])],1)})),e._v(" "),n("b-col",[n("b-button",{on:{click:e.addColumn}},[e._v("Add Column")])],1)],2),e._v(" "),n("b-row",{staticClass:"type"},[e._l(e.types,(function(t,r){return n("b-col",{key:r},[n("b-button",{on:{click:function(t){return e.typeModalShow(r)}}},[e._v("\n        "+e._s(t)+"\n      ")])],1)})),e._v(" "),n("b-col",[e._v(" ")])],2),e._v(" "),e._l(e.obj,(function(t,r){return n("b-row",{key:r},[e._l(t,(function(col,t){return n("b-col",{key:t},[e._v("\n      "+e._s(col)+"\n    ")])})),e._v(" "),n("b-col",[e._v(" ")])],2)})),e._v(" "),n("b-row",[n("b-col",[n("b-button",{on:{click:e.rowNumberModalShow}},[e._v("Change Row Count")])],1)],1),e._v(" "),n("b-modal",{attrs:{id:"modal-t",title:"SetType"},on:{ok:e.setType}},[n("b-select",{model:{value:e.currentSelected,callback:function(t){e.currentSelected=t},expression:"currentSelected"}},e._l(e.ableTypes,(function(t,r){return n("b-select-option",{key:r,attrs:{value:t}},[e._v("\n        "+e._s(t)+"\n      ")])})),1)],1),e._v(" "),n("b-modal",{attrs:{id:"modal-h",title:"SetHeader"},on:{ok:e.setHeader}},[n("b-input",{model:{value:e.currentHeader,callback:function(t){e.currentHeader=t},expression:"currentHeader"}})],1),e._v(" "),n("b-modal",{attrs:{id:"modal-n",title:"SetRowCount"},on:{ok:e.addRow}},[n("b-input",{attrs:{max:"999",min:"1",type:"number"},model:{value:e.currentNumber,callback:function(t){e.currentNumber=t},expression:"currentNumber"}})],1)],2)}),[],!1,null,"1d903b50",null);t.default=component.exports},297:function(e,t,n){"use strict";n.r(t);n(12),n(19),n(21),n(13),n(65);var r={props:["obj","keys"],computed:{jsonText:function(){var e=this,t="[\n";return this.obj.forEach((function(n){t+="  {\n",n.forEach((function(col,n){t+="    "+e.keys[n]+':"'+col+'",\n'})),t=t.slice(0,-2),t+="\n  },\n"})),t=t.slice(0,-2),t+="\n]"}},methods:{selectAll:function(){document.getElementById("jsonArea").select()}}},o=(n(303),n(66)),component=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("b-textarea",{staticClass:"vh40",attrs:{id:"jsonArea",value:this.jsonText},on:{click:this.selectAll}})}),[],!1,null,"66e4bbd0",null);t.default=component.exports},298:function(e,t,n){"use strict";n.r(t);n(12),n(19),n(21),n(13),n(65);var r={props:["obj","keys"],computed:{sqlText:function(){var e="";return e+="INSERT INTO `tablename`\n",e+="  (",this.keys.forEach((function(element){e+='"'+element+'",'})),e=e.slice(0,-1),e+=")\n",e+="VALUES\n",this.obj.forEach((function(t){e+="  (",t.forEach((function(col){e+='"'+col+'",'})),e=e.slice(0,-1),e+="),\n"})),e=e.slice(0,-2),e+=";"}},methods:{selectAll:function(){document.getElementById("sqlArea").select()}}},o=(n(305),n(66)),component=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("b-textarea",{staticClass:"vh40",attrs:{id:"sqlArea",value:this.sqlText},on:{click:this.selectAll}})}),[],!1,null,"070be96a",null);t.default=component.exports},299:function(e,t,n){"use strict";n(290)},300:function(e,t,n){(t=n(76)(!1)).push([e.i,".vh40[data-v-68c65c32]{height:40vh}",""]),e.exports=t},301:function(e,t,n){"use strict";n(291)},302:function(e,t,n){(t=n(76)(!1)).push([e.i,".my-table[data-v-1d903b50]{text-align:center}.my-table .col[data-v-1d903b50]{border:1px solid #ccc;border-radius:5px;margin:5px;padding:5px}.head .col[data-v-1d903b50],.type .col[data-v-1d903b50]{font-weight:700}",""]),e.exports=t},303:function(e,t,n){"use strict";n(292)},304:function(e,t,n){(t=n(76)(!1)).push([e.i,".vh40[data-v-66e4bbd0]{height:40vh}",""]),e.exports=t},305:function(e,t,n){"use strict";n(293)},306:function(e,t,n){(t=n(76)(!1)).push([e.i,".vh40[data-v-070be96a]{height:40vh}",""]),e.exports=t},307:function(e,t,n){"use strict";n(294)},308:function(e,t,n){(t=n(76)(!1)).push([e.i,".container[data-v-c7053154]{height:100vh;overflow-y:scroll}.head[data-v-c7053154]{height:10vh}.vh45[data-v-c7053154]{height:45vh;overflow:scroll}.vh50[data-v-c7053154]:last-of-type{border-top:1px dashed #333;padding-top:10px}",""]),e.exports=t},309:function(e,t,n){"use strict";n.r(t);n(12),n(205),n(21),n(34),n(13),n(59);var r=n(16),o=n(295),c=n(296),l=n(297),d=n(298),h={components:{MyTable:c.default,Csv:o.default,Json:l.default,Sql:d.default},data:function(){return{inputObj:[["1","2","3"]],keysArr:["id","name","email","word"],typesArr:["Increment","Name","Email","Text"],lengthNum:5,ableTypes:["Text","Number","Address","Company","Email","Name","Phone","Increment"],currentMode:"CSV"}},methods:{calculateCols:function(){var e=this;this.inputObj.splice(0,this.inputObj.length);for(var i=0;i<this.lengthNum;i++){var t=[];this.typesArr.forEach((function(n){if("Increment"==n)t.push(i.toString());else{var r=e.fakes[n][Math.floor(Math.random()*e.fakes[n].length)];"Name"==n||"Company"==n?t.push(JSON.parse('"'+r+'"')):t.push(r)}})),this.inputObj.push(t)}},addRow:function(e){this.lengthNum=e,this.calculateCols()},addColumn:function(){this.keysArr.push("test"),this.typesArr.push("Text"),this.calculateCols()},setType:function(e){console.log("arg",e),this.typesArr[e.col]=e.selected,this.calculateCols()},setHeader:function(e){this.keysArr[e.col]=e.header,this.calculateCols()}},mounted:function(){this.calculateCols()},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.params,n=e.$http,t.next=3,n.$get("https://mi-ki-ri.github.io/dummy-table-generator/dummy.json");case 3:return r=t.sent,console.log("json",r),o=r,t.abrupt("return",{fakes:o});case 7:case"end":return t.stop()}}),t)})))()}},f=(n(307),n(66)),component=Object(f.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{fluid:""}},[n("b-row",{staticClass:"head"},[n("b-col",[n("h1",[e._v("Dummy-Table-Generator")])])],1),e._v(" "),n("b-row",{staticClass:"vh45"},[n("b-col",[n("my-table",{attrs:{obj:e.inputObj,keys:e.keysArr,types:e.typesArr,ableTypes:e.ableTypes},on:{addRow:e.addRow,addColumn:e.addColumn,setType:e.setType,setHeader:e.setHeader}})],1)],1),e._v(" "),n("b-row",{staticClass:"vh45"},[n("b-col",[n("b-select",{model:{value:e.currentMode,callback:function(t){e.currentMode=t},expression:"currentMode"}},[n("b-select-option",{attrs:{value:"CSV"}},[e._v("CSV")]),e._v(" "),n("b-select-option",{attrs:{value:"JSON"}},[e._v("JSON")]),e._v(" "),n("b-select-option",{attrs:{value:"SQL"}},[e._v("SQL")])],1),e._v(" "),"CSV"==e.currentMode?n("csv",{attrs:{obj:e.inputObj,keys:e.keysArr}}):e._e(),e._v(" "),"JSON"==e.currentMode?n("json",{attrs:{obj:e.inputObj,keys:e.keysArr}}):e._e(),e._v(" "),"SQL"==e.currentMode?n("sql",{attrs:{obj:e.inputObj,keys:e.keysArr}}):e._e()],1)],1)],1)}),[],!1,null,"c7053154",null);t.default=component.exports;installComponents(component,{MyTable:n(296).default,Csv:n(295).default,Json:n(297).default,Sql:n(298).default})}}]);