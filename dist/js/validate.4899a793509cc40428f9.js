webpackJsonp([25],{qblh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("//Fk"),r=n.n(a),i=n("7+uW"),u=n("T1ft"),s=n.n(u),d=n("sUu7");i.a.component("v-select",s.a);i.a.use(d.b,{locale:"zh_CN",events:"input",inject:!0});d.a.localize({zh_CN:{messages:{email:function(){return"请输入正确的邮箱格式"},required:function(e){return e+"不能为空"},max:function(e,t){return"不能大于"+t+"个字符"},min:function(e,t){return"不能小于"+t+"个字符"},in:function(){return"请选择正确值"},numeric:function(){return"该选项必须为数字"}},attributes:{name:"姓名",sex:"性别",unit:"学校",position:"职位",phone:"联系方式",email:"邮箱",id_card:"身份证",people_number:"参观人数",visit_item:"参观项目",visit_place:"参观地点",visit_name:"参观名称",visit_reason:"参观原因",visit_date_string:"参观时间"}}}),d.a.extend("fbphone",{getMessage:function(e){return"请输入正确的电话号码"},validate:function(e){return/^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/.test(e)||/^0\d{2,3}-?\d{7,8}$/.test(e)}}),d.a.extend("liuliangka",{getMessage:function(){return"请输入30位以内的字母数字或组合"},validate:function(e){return/^[a-zA-Z0-9]{1,30}$/.test(e)}}),d.a.extend("maxnumber",{getMessage:function(e,t,n){return n},validate:function(e,t){return new r.a(function(n){var a=!0,r="";isNaN(Number(e))?(a=!1,r="请输入数字"):(a=Number(e)<=Number(t[0]),r="限制取值范围为:"+t[0]+"~"+t[1]),n({valid:a,data:r})})}}),d.a.extend("minnumber",{getMessage:function(e,t,n){return n},validate:function(e,t){return new r.a(function(n){var a=!0,r="";isNaN(Number(e))?(a=!1,r="请输入数字"):(a=Number(e)>=Number(t[0]),r="限制最小数值为:"+t[0]),n({valid:a,data:r})})}}),d.a.extend("minmaxnumber",{getMessage:function(e,t,n){return n},validate:function(e,t){return new r.a(function(n){var a=!0,r="";isNaN(Number(e))?(a=!1,r="请输入数字"):(a=Number(e)>=Number(t[0])&&Number(e)<=Number(t[1]),r="限制取值范围为:"+t[0]+"~"+t[1]),n({valid:a,data:r})})}}),d.a.extend("number",{getMessage:function(e,t,n){return n},validate:function(e){return new r.a(function(t){var n=!0,a="";isNaN(Number(e))&&(n=!1,a="请输入数字"),t({valid:n,data:a})})}}),d.a.extend("fixedphone",{getMessage:function(e){return"请输入正确的固定号码"},validate:function(e){new RegExp("^(0[0-9]{2,3}/-)?([2-9][0-9]{6,7})+(/-[0-9]{1,4})?$");return/^0\d{2,3}-?\d{7,8}$/.test(e)}}),d.a.extend("fixed_mobile_phone",{getMessage:function(e){return"请输入正确的固定号码或电话号码"},validate:function(e){return 11==e.length&&/^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/.test(e)||/^0\d{2,3}-?\d{7,8}$/.test(e)}}),d.a.extend("mobilephone",{getMessage:function(e){return"请输入正确的手机号码"},validate:function(e){return 11==e.length&&/^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/.test(e)}}),d.a.extend("required_username",{getMessage:function(){return"账号不能为空"},validate:function(e){}}),d.a.extend("password",{getMessage:function(){return"密码为6-20位，字母、数字或符号的组合"},validate:function(e){return/^[0-9a-zA-Z.!@#$^]{6,20}$/.test(e)||"********"==e}}),d.a.extend("jingdu",{getMessage:function(){return"经度范围为0-180"},validate:function(e){var t=parseFloat(e);return t<=180&&t>=0}}),d.a.extend("weidu",{getMessage:function(){return"纬度范围为0-90"},validate:function(e){var t=parseFloat(e);return t<=90&&t>=0}}),d.a.extend("postcode",{getMessage:function(){return"请输入正确的邮政编码"},validate:function(e){parseFloat(e);return/^[0-9]{6}$/.test(e)}}),d.a.extend("idcard",{getMessage:function(){return"请输入合法的身份证号码"},validate:function(e){return function(e){var t=!0;if(e&&/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(e))if({11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "}[e.substr(0,2)]){if(18==e.length){e=e.split("");for(var n=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],a=[1,0,"X",9,8,7,6,5,4,3,2],r=0,i=0;i<17;i++)r+=e[i]*n[i];a[r%11]!=e[17]&&(t=!1)}}else t=!1;else t=!1;return t}(e)}}),d.a.extend("companycode",{getMessage:function(){return"请输入合法的组织机构代码"},validate:function(e){return/^[a-zA-Z0-9\-]{1,18}$/.test(e)}}),d.a.extend("float",{getMessage:function(e,t,n){return n},validate:function(e){return new r.a(function(t){var n=!0,a="";if(isNaN(Number(e)))n=!1,a="请输入数字";else{var r=e.toString().split(".");void 0!==r[1]&&(""==r[1]&&(n=!1,a="请输入正确的小数"),r[1].length>2&&(n=!1,a="小数位数不能超过2位"))}t({valid:n,data:a})})}}),d.a.extend("float1",{getMessage:function(e,t,n){return n},validate:function(e){return new r.a(function(t){var n=!0,a="";if(isNaN(Number(e)))n=!1,a="请输入数字";else{var r=e.toString().split(".");void 0!==r[1]&&(""==r[1]&&(n=!1,a="请输入正确的小数"),r[1].length>1&&(n=!1,a="小数位数不能超过1位"))}t({valid:n,data:a})})}}),d.a.extend("floatthree",{getMessage:function(){return"请输入3位及以下数字"},validate:function(e){return e.length<=3&&/^[0-9]*$/.test(e)}}),d.a.extend("devicecode",{getMessage:function(){return"请输入30位以内的字母数字或组合"},validate:function(e){return/^[a-zA-Z0-9]{1,30}$/.test(e)}}),d.a.extend("macaddress",{getMessage:function(){return"请输入正确的主机地址(例:0A-0B-0C-0D-0E-0F)"},validate:function(e){return/^[A-F\d]{2}-[A-F\d]{2}-[A-F\d]{2}-[A-F\d]{2}-[A-F\d]{2}-[A-F\d]{2}$/.test(e)}}),d.a.extend("loginusername",{getMessage:function(){return"请输入正确的账号"},validate:function(e){return/^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/.test(e)||/^([a-zA-Z]{1}[a-zA-Z0-9]|[._])/.test(e)}}),d.a.extend("loginpassword",{getMessage:function(){return"登录密码不能为空"},validate:function(e){return e.length>0}})}},["qblh"]);
//# sourceMappingURL=validate.4899a793509cc40428f9.js.map