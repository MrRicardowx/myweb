webpackJsonp([2],{"/NA/":function(t,a){},"5uXz":function(t,a){},"6HvK":function(t,a){},"I/7M":function(t,a){},OBHz:function(t,a){},"QEp/":function(t,a){},pGKz:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("wliw"),s=e("QN9x"),n=e("JrC8"),r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.PC_OR_NOT?"pc-tabs-bar":"mobile-table-bar"},[e("div",{staticClass:"tabs-area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"tabs"},t._l(t.tabs,function(a){return e("div",{staticClass:"tab",class:a.active,on:{click:function(e){t.active(a,t.tabs)}}},[t._v(t._s(a.text))])}))])])])},staticRenderFns:[]};var c=e("VU/8")({name:"Tabs",data:function(){var t=this;return{tabs:[{text:"全部",active:"active",onclick:function(){t.oneClick()}},{text:"进行中",active:"",onclick:function(){t.twoClick()}},{text:"已结束",active:"",onclick:function(){t.threeClick()}}]}},methods:{active:function(t,a){for(var e in a)a[e].active="";t.active="active",t.onclick()}},props:["oneClick","twoClick","threeClick"]},r,!1,function(t){e("/NA/")},"data-v-6584211a",null).exports,l={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{class:t.PC_OR_NOT?"pc-active-card":"web-active-card"},[i("div",{staticClass:"activity-card-area"},[i("a",{attrs:{href:"/#/activity_info/?id="+t.cardObject.id}},[i("div",{staticClass:"activity-card-wrap"},[i("div",{staticClass:"card-pics",style:{backgroundImage:"url("+t.resizeImage(t.cardObject.backUrl,800)+")"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:2==t.cardObject.status,expression:"cardObject.status==2"}],staticClass:"status ing"},[t._v("进行中")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:3==t.cardObject.status,expression:"cardObject.status==3"}],staticClass:"status end"},[t._v("已结束")])]),t._v(" "),i("div",{staticClass:"activity-card"},[i("div",{staticClass:"card-text"},[t._v(t._s(t.cardObject.name))]),t._v(" "),i("div",{staticClass:"card-time"},[i("img",{attrs:{src:e("qKtB")}}),t._v(" "),i("span",[t._v(t._s(t._f("date")(t.cardObject.startTime)))]),t._v(" "),i("span",[t._v(" ~ ")]),t._v(" "),i("span",[t._v(t._s(t._f("date")(t.cardObject.endTime)))])])])])])])])},staticRenderFns:[]};var o=e("VU/8")({name:"Card",data:function(){return{}},methods:{resizeImage:function(t,a){var e=t.split("?");return e[0]+"@w_"+a||"300?"+e[1]}},props:["cardObject"]},l,!1,function(t){e("5uXz")},"data-v-61a5f04f",null).exports,d=e("i5Za"),v={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.PC_OR_NOT?"pc-more-btn":"web-more-btn"},[this._v("more ...")])},staticRenderFns:[]};var u=e("VU/8")({name:"MoreButtton",data:function(){return{}}},v,!1,function(t){e("6HvK")},"data-v-12d335cc",null).exports,q={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.PC_OR_NOT?"pc-live-card":"web-live-card"},[e("div",{staticClass:"live-card-wrap"},[e("div",{staticClass:"live-card",style:{backgroundImage:"url("+t.resizeImage(t.liveImage,300)+")"}},[e("a",{attrs:{target:"_blank",href:"http://zjs.baidu.com/live?id="+t.liveId}},[e("img",{attrs:{src:"/assets/player.png"}})])]),t._v(" "),e("div",{staticClass:"live-text"},[e("a",{attrs:{target:"_blank",href:"http://zjs.baidu.com/live?id="+t.liveId}},[t._v("\n        "+t._s(t.liveText)+"\n        ")])])])])},staticRenderFns:[]};var f=e("VU/8")({name:"LiveCard",data:function(){return{}},methods:{resizeImage:function(t,a){var e=t.split("?");return e[0]+"@w_"+a||"300?"+e[1]}},props:["liveImage","liveId","liveText"]},q,!1,function(t){e("OBHz")},"data-v-12b3e15e",null).exports,m=e("Pk7M"),h=e("vK5R"),_=e("mtWM"),g=e.n(_),p=(e("NYxO"),{name:"Activity",components:{Nav:i.a,Banner:n.a,Tabs:c,Card:o,OptionTitle:d.a,LiveCard:f,MoreButton:u,LoadingButton:m.a,Null:h.a,Footer:s.a},beforeCreate:function(){var t=this;t.status="",t.start=0,t.limit=6,t.cards=[],g.a.get("/web/queryCompetitionActivities.do?status="+(t.status?t.status+"&":"&")+"start="+t.start+"&limit="+t.limit,{}).then(function(a){if(200==a.status&&"0"==a.data.error_no){for(var e in t.start=t.start+t.limit+1,t.limit=8,a.data.data.datas)t.refresh=!0,t.cards.push(a.data.data.datas[e]);t.moreFlag=!1}else 200==a.status&&"-1"==a.data.error_no&&(t.moreFlag=!1,t.finalFlag=!0)}),g.a.get("/web/queryActivityList.do?start=0&limit=3",{}).then(function(a){200==a.status&&"0"==a.data.error_no&&(t.lives=a.data.data)})},mounted:function(){this.$store.dispatch("get_menu",3),window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY+window.innerHeight>=document.body.scrollHeight&&this.loadMore()},all:function(){this.status="",this.start=0,this.cards=[],this.finalFlag=!1,this.loadMore()},ing:function(){this.status="2",this.start=0,this.cards=[],this.finalFlag=!1,this.loadMore()},end:function(){this.status="3",this.start=0,this.cards=[],this.finalFlag=!1,this.loadMore()},loadMore:function(){var t=this;t.moreFlag=!0,t.finalFlag||g.a.get("/web/queryCompetitionActivities.do?status="+(t.status?t.status+"&":"&")+"start="+t.start+"&limit="+t.limit,{}).then(function(a){if(200==a.status&&"0"==a.data.error_no){for(var e in t.start=t.start+t.limit+1,t.limit=8,t.livesEnd+=10,a.data.data.datas)t.refresh=!0,t.cards.push(a.data.data.datas[e]);t.moreFlag=!1}else 200==a.status&&"-1"==a.data.error_no&&(t.moreFlag=!1,t.finalFlag=!0)})}},data:function(){return{moreFlag:!1,finalFlag:!1,cards:[],lives:[],livesEnd:4}}}),C={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.PC_OR_NOT?"pc-activity-bar":"mobile-activity-bar"},[e("Nav"),t._v(" "),e("Banner",{attrs:{"banner-image":"/assets/activity.png","text-info":"校园活动","text-desc":"联合各高校社团举办面向全国高校师生的有关技术品牌、创新、创意等各种类型的线上线下活动。大学校园就像一个万花筒，多种多样的活动让学生们在学习和享受他们的大学生活过程中得到锻炼和成长。"}}),t._v(" "),e("Tabs",{attrs:{"one-click":t.all,"two-click":t.ing,"three-click":t.end}}),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"left-container"},[t._l(t.cards,function(t,a){return e("Card",{key:a,attrs:{"card-object":t}})}),t._v(" "),t.cards.length?t._e():e("div",{staticClass:"null-item"},[e("Null")],1),t._v(" "),e("LoadingButton",{directives:[{name:"show",rawName:"v-show",value:t.moreFlag&&!t.finalFlag,expression:"moreFlag&&!finalFlag"}]})],2),t._v(" "),e("div",{staticClass:"right-container"},[t._m(0),t._v(" "),t._l(t.lives.slice(0,t.livesEnd),function(t,a){return e("LiveCard",{key:a,attrs:{"live-text":t.name,"live-image":t.frontImgUrl,"live-id":t.encryptId}})}),t._v(" "),e("LoadingButton",{directives:[{name:"show",rawName:"v-show",value:t.moreFlag&&!t.finalFlag,expression:"moreFlag&&!finalFlag"}]})],2)]),t._v(" "),e("Footer",{directives:[{name:"show",rawName:"v-show",value:t.finalFlag,expression:"finalFlag"}]})],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("h4",[a("img",{staticClass:"live-logo",attrs:{src:"/assets/live.png"}}),this._v("活动现场\n            ")])}]};var b=e("VU/8")(p,C,!1,function(t){e("QEp/")},"data-v-12619f28",null);a.default=b.exports},qKtB:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAS1BMVEUAAACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqgzhvWAAAAGHRSTlMA+tvx7KdzbiwUzAnRYvZLMwvUYSW+VyQMl+CdAAABNUlEQVQ4y6WU247DIAxEDQUSAqS5tvP/X7quslnTCJDanRcUdGLLxh76Un1no1HKRNv1dWp2EZmim8tcZ3CR6QrYNoB1s2nyRH5K9gbWsF25++tepyA3IenXn/d37qGA0dFFbgTU4y0ec7pQZq+ZzGI+Oe/gqSA/cPYnneIvLdyu9ozUHOOvL8CY5QWQZx+B7rfPBnBUA8kBZj4D6lAHgz7jLECiOkgrsBCr57pCCwzck/7IbKkFkuVyjiO1wXSEisDUBicg8mEA3wY9YPhQci/g9UaVwUN7DhZTn8pTl4rRElGKkfYUJe2RhjfEoZw8YVnyhMdQrHVMhoKcjJnoOmYyuDXJ4MoqiIqrIMslqiwXbe113T4wgA8tRUxqzU1qFZNq2N4qtveFkYo1Lzm2uPmfZt/WD1ZTIFqZ6QQJAAAAAElFTkSuQmCC"},vK5R:function(t,a,e){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"null"})},staticRenderFns:[]};var s=e("VU/8")({name:"Null",data:function(){return{}}},i,!1,function(t){e("I/7M")},"data-v-7141f203",null);a.a=s.exports}});