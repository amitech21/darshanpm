!function(){function l(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function n(n,u,e){return u&&l(n.prototype,u),e&&l(n,e),n}function u(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"6ZY7":function(l,e,t){"use strict";t.r(e),t.d(e,"CustomersModuleNgFactory",function(){return gl});var o=t("8Y7J"),i=function l(){u(this,l)},r=t("pMnS"),s=t("4BU0"),c=t("VYMa"),a=t("Z+H9"),d=t("zy28"),m=t("SVse"),p=t("iInd"),g=function(){function l(){u(this,l)}return n(l,[{key:"ngOnInit",value:function(){}}]),l}(),v=o["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function f(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,11,"a",[["class","list-group-item clearfix"],["routerlinkActive","active"],["style","cursor: pointer;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==o["\u0275nov"](l,1).onClick(u.button,u.ctrlKey,u.shiftKey,u.altKey,u.metaKey)&&e),e},null,null)),o["\u0275did"](1,671744,null,0,p.r,[p.o,p.a,m.j],{routerLink:[0,"routerLink"]},null),o["\u0275pad"](2,1),(l()(),o["\u0275eld"](3,0,null,null,8,"div",[["class","pull-left"]],null,null,null,null,null)),(l()(),o["\u0275eld"](4,0,null,null,1,"h4",[["class","list-group-item-heading"]],null,null,null,null,null)),(l()(),o["\u0275ted"](5,null,["CUSTOMER ID : ",""])),(l()(),o["\u0275eld"](6,0,null,null,1,"p",[["class","list-group-item-text"]],null,null,null,null,null)),(l()(),o["\u0275ted"](7,null,["Name : ",""])),(l()(),o["\u0275eld"](8,0,null,null,1,"p",[["class","list-group-item-text"]],null,null,null,null,null)),(l()(),o["\u0275ted"](9,null,["Mobile no : ",""])),(l()(),o["\u0275eld"](10,0,null,null,1,"p",[["class","list-group-item-text"]],null,null,null,null,null)),(l()(),o["\u0275ted"](11,null,["GST No : ",""]))],function(l,n){var u=l(n,2,0,n.component.customer.id);l(n,1,0,u)},function(l,n){var u=n.component;l(n,0,0,o["\u0275nov"](n,1).target,o["\u0275nov"](n,1).href),l(n,5,0,u.customer.id),l(n,7,0,u.customer.name),l(n,9,0,u.customer.mobile_no),l(n,11,0,u.customer.gst_no)})}var h=t("abRS"),b=t("xkgV"),C=t("/tw2"),y=function(){function l(n,e,t){u(this,l),this.router=n,this.route=e,this.store=t,this.isLoading=!1,this.error=null,this.customersVisibility=!0,this.page=1,this.count=0,this.tableSize=4}return n(l,[{key:"ngOnInit",value:function(){var l=this;this.store.dispatch(new C.n),this.customers||this.store.dispatch(new C.m({pgNo:0,item_count:4})),this.sub_fetchCount=this.store.select("customers").subscribe(function(n){l.count=n.cust_total_count,l.customers=n.customers,l.customersVisibility=n.visibility,l.table_config={id:"basicPaginate",itemsPerPage:l.tableSize,currentPage:l.page,totalItems:l.count}})}},{key:"onShow",value:function(){var l=this;this.customersVisibility=!0,this.store.dispatch(new C.n),this.store.dispatch(new C.m({pgNo:0,item_count:this.tableSize})),this.sub_fetchCount=this.store.select("customers").subscribe(function(n){l.count=n.cust_total_count,l.customers=n.customers,l.customersVisibility=n.visibility,l.error=n.custError,l.isLoading=n.custLoading}),this.reloadCurrentRoute()}},{key:"reloadCurrentRoute",value:function(){var l=this,n=this.router.url;this.router.navigateByUrl("/",{skipLocationChange:!0}).then(function(){l.router.navigate([n])})}},{key:"onHide",value:function(){this.customersVisibility=!1,this.store.dispatch(new C.v(!1))}},{key:"onNew",value:function(){this.customersVisibility=!1,this.store.dispatch(new C.v(!1)),this.router.navigate(["new"],{relativeTo:this.route})}},{key:"ngOnDestroy",value:function(){this.subscription&&this.subscription.unsubscribe(),this.pre_subscription&&this.pre_subscription.unsubscribe(),this.sub_fetchCount&&this.sub_fetchCount.unsubscribe()}},{key:"onTableDataChange",value:function(l){var n=this;this.store.dispatch(new C.m({pgNo:l-1,item_count:this.tableSize})),this.store.select("customers").subscribe(function(u){n.customers=u.customers,n.table_config={id:"basicPaginate",itemsPerPage:n.tableSize,currentPage:l,totalItems:n.count}})}},{key:"onHandleError",value:function(){this.store.dispatch(new C.d)}}]),l}(),_=t("tqRt"),w=o["\u0275crt"]({encapsulation:0,styles:[[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-gap:10px}.btn_c[_ngcontent-%COMP%]{display:flex;justify-content:center}"]],data:{}});function k(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-alert",[],null,[[null,"close"]],function(l,n,u){var e=!0;return"close"===n&&(e=!1!==l.component.onHandleError()&&e),e},s.c,s.b)),o["\u0275did"](1,49152,null,0,c.a,[],{message:[0,"message"]},{close:"close"})],function(l,n){l(n,1,0,n.component.error)},null)}function R(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,2,"div",[["style","text-align: center;"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,1,"app-loading-spinner",[],null,null,null,a.b,a.a)),o["\u0275did"](2,49152,null,0,d.a,[],null,null)],null,null)}function I(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,1,"app-customer-item",[],null,null,null,f,v)),o["\u0275did"](2,114688,null,0,g,[],{customer:[0,"customer"]},null)],function(l,n){l(n,2,0,n.context.$implicit)},null)}function F(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,2,"div",[["class","d-flex justify-content-center"]],null,null,null,null,null)),(l()(),o["\u0275eld"](2,0,null,null,1,"pagination-controls",[["autoHide","true"],["directionLinks","true"],["id","basicPaginate"],["nextLabel","Next"],["previousLabel","Prev"],["responsive","true"],["screenReaderPaginationLabel","Pagination"]],null,[[null,"pageChange"]],function(l,n,u){var e=!0;return"pageChange"===n&&(e=!1!==l.component.onTableDataChange(u)&&e),e},h.b,h.a)),o["\u0275did"](3,49152,null,0,b.c,[],{id:[0,"id"],directionLinks:[1,"directionLinks"],autoHide:[2,"autoHide"],responsive:[3,"responsive"],previousLabel:[4,"previousLabel"],nextLabel:[5,"nextLabel"],screenReaderPaginationLabel:[6,"screenReaderPaginationLabel"]},{pageChange:"pageChange"}),(l()(),o["\u0275eld"](4,0,null,null,3,"div",[["class","grid"]],null,null,null,null,null)),(l()(),o["\u0275and"](16777216,null,null,2,null,I)),o["\u0275did"](6,278528,null,0,m.l,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),o["\u0275pid"](0,b.b,[b.e])],function(l,n){var u=n.component;l(n,3,0,"basicPaginate","true","true","true","Prev","Next","Pagination"),l(n,6,0,o["\u0275unv"](n,6,0,o["\u0275nov"](n,7).transform(u.customers,u.table_config)))},null)}function T(l){return o["\u0275vid"](0,[(l()(),o["\u0275and"](16777216,null,null,1,null,k)),o["\u0275did"](1,16384,null,0,m.m,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275and"](16777216,null,null,1,null,R)),o["\u0275did"](3,16384,null,0,m.m,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275eld"](4,0,null,null,9,"div",[["class","row-xs-12"]],null,null,null,null,null)),(l()(),o["\u0275eld"](5,0,null,null,2,"div",[["class","col-xs-4 btn_c"]],null,null,null,null,null)),(l()(),o["\u0275eld"](6,0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onShow()&&e),e},null,null)),(l()(),o["\u0275ted"](-1,null,["Show Customers"])),(l()(),o["\u0275eld"](8,0,null,null,2,"div",[["class","col-xs-4 btn_c"]],null,null,null,null,null)),(l()(),o["\u0275eld"](9,0,null,null,1,"button",[["class","btn btn-danger"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onHide()&&e),e},null,null)),(l()(),o["\u0275ted"](-1,null,["Hide Customers"])),(l()(),o["\u0275eld"](11,0,null,null,2,"div",[["class","col-xs-4 btn_c"]],null,null,null,null,null)),(l()(),o["\u0275eld"](12,0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onNew()&&e),e},null,null)),(l()(),o["\u0275ted"](-1,null,["New Customer"])),(l()(),o["\u0275eld"](14,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275eld"](15,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275eld"](16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275and"](16777216,null,null,1,null,F)),o["\u0275did"](18,16384,null,0,m.m,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,1,0,u.error),l(n,3,0,u.isLoading),l(n,18,0,u.customersVisibility&&!!u.customers)},null)}var x=function(){function l(n){u(this,l),this.store=n,this.isLoading=!1,this.error=null}return n(l,[{key:"ngOnInit",value:function(){var l=this;this.store.select("customers").subscribe(function(n){l.flag=!!n.customers,l.error=n.custError}),this.store.dispatch(new C.v(this.flag))}},{key:"onHandleError",value:function(){this.store.dispatch(new C.d)}}]),l}(),P=o["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function S(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-alert",[],null,[[null,"close"]],function(l,n,u){var e=!0;return"close"===n&&(e=!1!==l.component.onHandleError()&&e),e},s.c,s.b)),o["\u0275did"](1,49152,null,0,c.a,[],{message:[0,"message"]},{close:"close"})],function(l,n){l(n,1,0,n.component.error)},null)}function E(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,2,"div",[["style","text-align: center;"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,1,"app-loading-spinner",[],null,null,null,a.b,a.a)),o["\u0275did"](2,49152,null,0,d.a,[],null,null)],null,null)}function V(l){return o["\u0275vid"](0,[(l()(),o["\u0275and"](16777216,null,null,1,null,S)),o["\u0275did"](1,16384,null,0,m.m,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275and"](16777216,null,null,1,null,E)),o["\u0275did"](3,16384,null,0,m.m,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275eld"](4,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),o["\u0275did"](5,212992,null,0,p.t,[p.b,o.ViewContainerRef,o.ComponentFactoryResolver,[8,null],o.ChangeDetectorRef],null,null),(l()(),o["\u0275eld"](6,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275eld"](7,0,null,null,1,"app-customer-list",[],null,null,null,T,w)),o["\u0275did"](8,245760,null,0,y,[p.o,p.a,_.l],null,null)],function(l,n){var u=n.component;l(n,1,0,u.error),l(n,3,0,u.isLoading),l(n,5,0),l(n,8,0)},null)}var O=o["\u0275ccf"]("app-customers",x,function(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-customers",[],null,null,null,V,P)),o["\u0275did"](1,114688,null,0,x,[_.l],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),N=function(){function l(){u(this,l)}return n(l,[{key:"ngOnInit",value:function(){}}]),l}(),L=o["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function M(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"h3",[["style","color: snow; text-align: center;"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Manage Your Customers"]))],null,null)}var q=o["\u0275ccf"]("app-customer-start",N,function(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-customer-start",[],null,null,null,M,L)),o["\u0275did"](1,114688,null,0,N,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),D=t("s7LF"),z=t("lJxs"),j=function(){function l(n,e,t){u(this,l),this.route=n,this.router=e,this.store=t,this.editMode=!1,this.error_mob_no="",this.error_gst_no=""}return n(l,[{key:"ngOnDestroy",value:function(){this.storeSub&&this.storeSub.unsubscribe()}},{key:"ngOnInit",value:function(){var l=this;this.route.params.subscribe(function(n){l.id=+n.id,l.editMode=null!=n.id,l.initForm()})}},{key:"onSubmit",value:function(){this.store.dispatch(this.editMode?new C.x({index:this.id,newCustomer:this.customerForm.value}):new C.b(this.customerForm.value)),this.router.navigate(["../"],{relativeTo:this.route})}},{key:"onCancel",value:function(){this.router.navigate(["../"],{relativeTo:this.route})}},{key:"initForm",value:function(){var l=this,n=0,u="",e="",t="",o="";this.editMode&&(this.storeSub=this.store.select("customers").pipe(Object(z.a)(function(n){return localStorage.setItem("customersState",JSON.stringify(n)),n.customers.find(function(n,u){return n.id===l.id})})).subscribe(function(l){n=l.id,u=l.name,e=l.mobile_no,t=l.address,o=l.gst_no})),this.customerForm=new D.j({id:new D.g(n),name:new D.g(u,D.z.required),mobile_no:new D.g(e,D.z.compose([D.z.required,D.z.pattern("^[6-9][0-9]{9}$")])),address:new D.g(t,D.z.required),gst_no:new D.g(o,D.z.compose([D.z.required]))})}}]),l}(),H=o["\u0275crt"]({encapsulation:0,styles:[["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:3px solid red}label[_ngcontent-%COMP%]{color:snow}.alert[_ngcontent-%COMP%]   alert-danger[_ngcontent-%COMP%]{font-size:small}"]],data:{}});function A(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,9,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),o["\u0275eld"](2,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o["\u0275eld"](3,0,null,null,1,"label",[["for","id"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["ID : "])),(l()(),o["\u0275eld"](5,0,null,null,5,"input",[["class","form-control"],["formControlName","id"],["id","id"],["type","text"]],[[8,"readOnly",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==o["\u0275nov"](l,6)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o["\u0275nov"](l,6).onTouched()&&e),"compositionstart"===n&&(e=!1!==o["\u0275nov"](l,6)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o["\u0275nov"](l,6)._compositionEnd(u.target.value)&&e),e},null,null)),o["\u0275did"](6,16384,null,0,D.d,[o.Renderer2,o.ElementRef,[2,D.a]],null,null),o["\u0275prd"](1024,null,D.o,function(l){return[l]},[D.d]),o["\u0275did"](8,671744,null,0,D.i,[[3,D.c],[8,null],[8,null],[6,D.o],[2,D.C]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,D.p,null,[D.i]),o["\u0275did"](10,16384,null,0,D.q,[[4,D.p]],null,null)],function(l,n){l(n,8,0,"id")},function(l,n){l(n,5,0,!0,o["\u0275nov"](n,10).ngClassUntouched,o["\u0275nov"](n,10).ngClassTouched,o["\u0275nov"](n,10).ngClassPristine,o["\u0275nov"](n,10).ngClassDirty,o["\u0275nov"](n,10).ngClassValid,o["\u0275nov"](n,10).ngClassInvalid,o["\u0275nov"](n,10).ngClassPending)})}function U(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" Name is required. "]))],null,null)}function J(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,2,"div",[["class","alert alert-danger"]],null,null,null,null,null)),(l()(),o["\u0275and"](16777216,null,null,1,null,U)),o["\u0275did"](2,16384,null,0,m.m,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,null==u.customerForm.controls.name?null:u.customerForm.controls.name.errors.required)},null)}function G(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" Mobile no is required. "]))],null,null)}function B(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" Mobile must be 10 digit long & start with 6 to 9. "]))],null,null)}function K(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,4,"div",[["class","alert alert-danger"]],null,null,null,null,null)),(l()(),o["\u0275and"](16777216,null,null,1,null,G)),o["\u0275did"](2,16384,null,0,m.m,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275and"](16777216,null,null,1,null,B)),o["\u0275did"](4,16384,null,0,m.m,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,null==u.customerForm.controls.mobile_no?null:u.customerForm.controls.mobile_no.errors.required),l(n,4,0,!(null!=u.customerForm.controls.mobile_no&&u.customerForm.controls.mobile_no.errors.required))},null)}function Y(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" Address is required. "]))],null,null)}function $(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,2,"div",[["class","alert alert-danger"]],null,null,null,null,null)),(l()(),o["\u0275and"](16777216,null,null,1,null,Y)),o["\u0275did"](2,16384,null,0,m.m,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,null==u.customerForm.controls.address?null:u.customerForm.controls.address.errors.required)},null)}function Z(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" Gst_no is required. "]))],null,null)}function X(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,2,"div",[["class","alert alert-danger"]],null,null,null,null,null)),(l()(),o["\u0275and"](16777216,null,null,1,null,Z)),o["\u0275did"](2,16384,null,0,m.m,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,null==u.customerForm.controls.gst_no?null:u.customerForm.controls.gst_no.errors.required)},null)}function Q(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,66,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,65,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),o["\u0275eld"](2,0,null,null,64,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0,t=l.component;return"submit"===n&&(e=!1!==o["\u0275nov"](l,4).onSubmit(u)&&e),"reset"===n&&(e=!1!==o["\u0275nov"](l,4).onReset()&&e),"ngSubmit"===n&&(e=!1!==t.onSubmit()&&e),e},null,null)),o["\u0275did"](3,16384,null,0,D.E,[],null,null),o["\u0275did"](4,540672,null,0,D.k,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o["\u0275prd"](2048,null,D.c,null,[D.k]),o["\u0275did"](6,16384,null,0,D.r,[[4,D.c]],null,null),(l()(),o["\u0275and"](16777216,null,null,1,null,A)),o["\u0275did"](8,16384,null,0,m.m,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275eld"](9,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](10,0,null,null,9,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),o["\u0275eld"](11,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o["\u0275eld"](12,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Name"])),(l()(),o["\u0275eld"](14,0,null,null,5,"input",[["class","form-control"],["formControlName","name"],["id","name"],["placeholder","Enter Customer's Name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==o["\u0275nov"](l,15)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o["\u0275nov"](l,15).onTouched()&&e),"compositionstart"===n&&(e=!1!==o["\u0275nov"](l,15)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o["\u0275nov"](l,15)._compositionEnd(u.target.value)&&e),e},null,null)),o["\u0275did"](15,16384,null,0,D.d,[o.Renderer2,o.ElementRef,[2,D.a]],null,null),o["\u0275prd"](1024,null,D.o,function(l){return[l]},[D.d]),o["\u0275did"](17,671744,null,0,D.i,[[3,D.c],[8,null],[8,null],[6,D.o],[2,D.C]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,D.p,null,[D.i]),o["\u0275did"](19,16384,null,0,D.q,[[4,D.p]],null,null),(l()(),o["\u0275and"](16777216,null,null,1,null,J)),o["\u0275did"](21,16384,null,0,m.m,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275eld"](22,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](23,0,null,null,9,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),o["\u0275eld"](24,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o["\u0275eld"](25,0,null,null,1,"label",[["for","mobile_no"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Mobile No"])),(l()(),o["\u0275eld"](27,0,null,null,5,"input",[["class","form-control"],["formControlName","mobile_no"],["id","mobile_no"],["placeholder","Enter Mobile No"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==o["\u0275nov"](l,28)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o["\u0275nov"](l,28).onTouched()&&e),"compositionstart"===n&&(e=!1!==o["\u0275nov"](l,28)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o["\u0275nov"](l,28)._compositionEnd(u.target.value)&&e),e},null,null)),o["\u0275did"](28,16384,null,0,D.d,[o.Renderer2,o.ElementRef,[2,D.a]],null,null),o["\u0275prd"](1024,null,D.o,function(l){return[l]},[D.d]),o["\u0275did"](30,671744,null,0,D.i,[[3,D.c],[8,null],[8,null],[6,D.o],[2,D.C]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,D.p,null,[D.i]),o["\u0275did"](32,16384,null,0,D.q,[[4,D.p]],null,null),(l()(),o["\u0275and"](16777216,null,null,1,null,K)),o["\u0275did"](34,16384,null,0,m.m,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275eld"](35,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](36,0,null,null,9,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),o["\u0275eld"](37,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o["\u0275eld"](38,0,null,null,1,"label",[["for","address"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Address"])),(l()(),o["\u0275eld"](40,0,null,null,5,"textarea",[["class","form-control"],["formControlName","address"],["id","address"],["placeholder","Enter Customer's Address"],["rows","6"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==o["\u0275nov"](l,41)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o["\u0275nov"](l,41).onTouched()&&e),"compositionstart"===n&&(e=!1!==o["\u0275nov"](l,41)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o["\u0275nov"](l,41)._compositionEnd(u.target.value)&&e),e},null,null)),o["\u0275did"](41,16384,null,0,D.d,[o.Renderer2,o.ElementRef,[2,D.a]],null,null),o["\u0275prd"](1024,null,D.o,function(l){return[l]},[D.d]),o["\u0275did"](43,671744,null,0,D.i,[[3,D.c],[8,null],[8,null],[6,D.o],[2,D.C]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,D.p,null,[D.i]),o["\u0275did"](45,16384,null,0,D.q,[[4,D.p]],null,null),(l()(),o["\u0275and"](16777216,null,null,1,null,$)),o["\u0275did"](47,16384,null,0,m.m,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275eld"](48,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](49,0,null,null,9,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),o["\u0275eld"](50,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o["\u0275eld"](51,0,null,null,1,"label",[["for","gst_no"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["GST No"])),(l()(),o["\u0275eld"](53,0,null,null,5,"input",[["class","form-control"],["formControlName","gst_no"],["id","gst_no"],["placeholder","Enter GST No"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==o["\u0275nov"](l,54)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o["\u0275nov"](l,54).onTouched()&&e),"compositionstart"===n&&(e=!1!==o["\u0275nov"](l,54)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o["\u0275nov"](l,54)._compositionEnd(u.target.value)&&e),e},null,null)),o["\u0275did"](54,16384,null,0,D.d,[o.Renderer2,o.ElementRef,[2,D.a]],null,null),o["\u0275prd"](1024,null,D.o,function(l){return[l]},[D.d]),o["\u0275did"](56,671744,null,0,D.i,[[3,D.c],[8,null],[8,null],[6,D.o],[2,D.C]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,D.p,null,[D.i]),o["\u0275did"](58,16384,null,0,D.q,[[4,D.p]],null,null),(l()(),o["\u0275and"](16777216,null,null,1,null,X)),o["\u0275did"](60,16384,null,0,m.m,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275eld"](61,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](62,0,null,null,4,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),o["\u0275eld"](63,0,null,null,1,"button",[["class","btn btn-success"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Save"])),(l()(),o["\u0275eld"](65,0,null,null,1,"button",[["class","btn btn-danger"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onCancel()&&e),e},null,null)),(l()(),o["\u0275ted"](-1,null,["Cancel"]))],function(l,n){var u=n.component;l(n,4,0,u.customerForm),l(n,8,0,u.editMode),l(n,17,0,"name"),l(n,21,0,(null==u.customerForm.controls.name?null:u.customerForm.controls.name.invalid)&&((null==u.customerForm.controls.name?null:u.customerForm.controls.name.dirty)||(null==u.customerForm.controls.name?null:u.customerForm.controls.name.touched))),l(n,30,0,"mobile_no"),l(n,34,0,(null==u.customerForm.controls.mobile_no?null:u.customerForm.controls.mobile_no.invalid)&&((null==u.customerForm.controls.mobile_no?null:u.customerForm.controls.mobile_no.dirty)||(null==u.customerForm.controls.mobile_no?null:u.customerForm.controls.mobile_no.touched))),l(n,43,0,"address"),l(n,47,0,(null==u.customerForm.controls.address?null:u.customerForm.controls.address.invalid)&&((null==u.customerForm.controls.address?null:u.customerForm.controls.address.dirty)||(null==u.customerForm.controls.address?null:u.customerForm.controls.address.touched))),l(n,56,0,"gst_no"),l(n,60,0,(null==u.customerForm.controls.gst_no?null:u.customerForm.controls.gst_no.invalid)&&((null==u.customerForm.controls.gst_no?null:u.customerForm.controls.gst_no.dirty)||(null==u.customerForm.controls.gst_no?null:u.customerForm.controls.gst_no.touched)))},function(l,n){var u=n.component;l(n,2,0,o["\u0275nov"](n,6).ngClassUntouched,o["\u0275nov"](n,6).ngClassTouched,o["\u0275nov"](n,6).ngClassPristine,o["\u0275nov"](n,6).ngClassDirty,o["\u0275nov"](n,6).ngClassValid,o["\u0275nov"](n,6).ngClassInvalid,o["\u0275nov"](n,6).ngClassPending),l(n,14,0,o["\u0275nov"](n,19).ngClassUntouched,o["\u0275nov"](n,19).ngClassTouched,o["\u0275nov"](n,19).ngClassPristine,o["\u0275nov"](n,19).ngClassDirty,o["\u0275nov"](n,19).ngClassValid,o["\u0275nov"](n,19).ngClassInvalid,o["\u0275nov"](n,19).ngClassPending),l(n,27,0,o["\u0275nov"](n,32).ngClassUntouched,o["\u0275nov"](n,32).ngClassTouched,o["\u0275nov"](n,32).ngClassPristine,o["\u0275nov"](n,32).ngClassDirty,o["\u0275nov"](n,32).ngClassValid,o["\u0275nov"](n,32).ngClassInvalid,o["\u0275nov"](n,32).ngClassPending),l(n,40,0,o["\u0275nov"](n,45).ngClassUntouched,o["\u0275nov"](n,45).ngClassTouched,o["\u0275nov"](n,45).ngClassPristine,o["\u0275nov"](n,45).ngClassDirty,o["\u0275nov"](n,45).ngClassValid,o["\u0275nov"](n,45).ngClassInvalid,o["\u0275nov"](n,45).ngClassPending),l(n,53,0,o["\u0275nov"](n,58).ngClassUntouched,o["\u0275nov"](n,58).ngClassTouched,o["\u0275nov"](n,58).ngClassPristine,o["\u0275nov"](n,58).ngClassDirty,o["\u0275nov"](n,58).ngClassValid,o["\u0275nov"](n,58).ngClassInvalid,o["\u0275nov"](n,58).ngClassPending),l(n,63,0,!u.customerForm.valid)})}var W=o["\u0275ccf"]("app-customer-edit",j,function(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-customer-edit",[],null,null,null,Q,H)),o["\u0275did"](1,245760,null,0,j,[p.a,p.o,_.l],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),ll=t("3V6w"),nl=t("eIep"),ul=function(){function l(n,e,t,o){u(this,l),this.router=n,this.route=e,this.store=t,this.eRef=o,this.error=null,this.click_flag=!1}return n(l,[{key:"clickout",value:function(l){this.eRef.nativeElement.contains(l.target)||l.target.classList.contains("list-group-item")||l.target.classList.contains("list-group-item-heading")||l.target.classList.contains("list-group-item-text")||(this.click_flag&&this.onCancelEditing(),this.click_flag=!0)}},{key:"ngOnInit",value:function(){var l=this;this.click_flag=!1,this.route.params.pipe(Object(z.a)(function(l){return+l.id}),Object(nl.a)(function(n){return l.id=n,l.store.select("customers")}),Object(z.a)(function(n){return n.customers.filter(function(n,u){if(l.id===n.id)return n})})).subscribe(function(n){l.customer=n[0],window.scroll(0,0)}),this.store.dispatch(new C.s(this.customer)),this.store.select("customers").subscribe(function(n){l.error=n.custError,localStorage.setItem("customersState",JSON.stringify(n))})}},{key:"onAddToShoppingList",value:function(){}},{key:"onEditCustomer",value:function(){this.router.navigate(["edit"],{relativeTo:this.route})}},{key:"onDeleteCustomer",value:function(){var l=this;this.store.dispatch(new C.g(this.customer.id)),this.store.select("customers").subscribe(function(n){l.error=n.custError}),this.router.navigate(["../"],{relativeTo:this.route})}},{key:"onCancelEditing",value:function(){this.router.navigate(["../"],{relativeTo:this.route})}},{key:"onHandleError",value:function(){this.store.dispatch(new C.d)}}]),l}(),el=o["\u0275crt"]({encapsulation:0,styles:[["h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:snow}"]],data:{}});function tl(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-alert",[],null,[[null,"close"]],function(l,n,u){var e=!0;return"close"===n&&(e=!1!==l.component.onHandleError()&&e),e},s.c,s.b)),o["\u0275did"](1,49152,null,0,c.a,[],{message:[0,"message"]},{close:"close"})],function(l,n){l(n,1,0,n.component.error)},null)}function ol(l){return o["\u0275vid"](0,[(l()(),o["\u0275and"](16777216,null,null,1,null,tl)),o["\u0275did"](1,16384,null,0,m.m,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275eld"](2,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](3,0,null,null,8,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),o["\u0275eld"](4,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),o["\u0275ted"](5,null,["Customer Name : ",""])),(l()(),o["\u0275eld"](6,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o["\u0275ted"](7,null,["Mobile No : ",""])),(l()(),o["\u0275eld"](8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o["\u0275ted"](9,null,["Address : ",""])),(l()(),o["\u0275eld"](10,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o["\u0275ted"](11,null,["GST No : ",""])),(l()(),o["\u0275eld"](12,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](13,0,null,null,2,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),o["\u0275eld"](14,0,null,null,1,"button",[["class","btn btn-danger"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onCancelEditing()&&e),e},null,null)),(l()(),o["\u0275ted"](-1,null,["Close Editing"])),(l()(),o["\u0275eld"](16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275eld"](17,0,null,null,16,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](18,0,null,null,15,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),o["\u0275eld"](19,0,null,null,14,"div",[["appDropdown",""],["class","btn-group"]],[[2,"open",null]],[["document","click"]],function(l,n,u){var e=!0;return"document:click"===n&&(e=!1!==o["\u0275nov"](l,20).toggleOpen(u)&&e),e},null,null)),o["\u0275did"](20,16384,null,0,ll.a,[o.ElementRef],null,null),(l()(),o["\u0275eld"](21,0,null,null,2,"button",[["class","btn btn-primary dropdown-toggle"],["type","button"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" Manage Customer "])),(l()(),o["\u0275eld"](23,0,null,null,0,"span",[["class","caret"]],null,null,null,null,null)),(l()(),o["\u0275eld"](24,0,null,null,9,"ul",[["class","dropdown-menu"]],null,null,null,null,null)),(l()(),o["\u0275eld"](25,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),o["\u0275eld"](26,0,null,null,1,"a",[["style","cursor: pointer;"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onAddToShoppingList()&&e),e},null,null)),(l()(),o["\u0275ted"](-1,null,["To shopping list"])),(l()(),o["\u0275eld"](28,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),o["\u0275eld"](29,0,null,null,1,"a",[["style","cursor: pointer;"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onEditCustomer()&&e),e},null,null)),(l()(),o["\u0275ted"](-1,null,["Edit Customer"])),(l()(),o["\u0275eld"](31,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),o["\u0275eld"](32,0,null,null,1,"a",[["style","cursor: pointer;"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onDeleteCustomer()&&e),e},null,null)),(l()(),o["\u0275ted"](-1,null,["Delete Customer"]))],function(l,n){l(n,1,0,n.component.error)},function(l,n){var u=n.component;l(n,5,0,u.customer.name),l(n,7,0,u.customer.mobile_no),l(n,9,0,u.customer.address),l(n,11,0,u.customer.gst_no),l(n,19,0,o["\u0275nov"](n,20).isOpen)})}var il,rl=o["\u0275ccf"]("app-customer-detail",ul,function(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-customer-detail",[],null,[["document","click"]],function(l,n,u){var e=!0;return"document:click"===n&&(e=!1!==o["\u0275nov"](l,1).clickout(u)&&e),e},ol,el)),o["\u0275did"](1,114688,null,0,ul,[p.o,p.a,_.l,o.ElementRef],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),sl=t("PCNd"),cl=t("P+IX"),al=t("IzEk"),dl=t("7bNT"),ml=((il=function(){function l(n,e){u(this,l),this.store=n,this.actions$=e}return n(l,[{key:"resolve",value:function(l,n){return this.store.select("customers").pipe(Object(al.a)(1),Object(z.a)(function(l){return l.customers}))}}]),l}()).\u0275prov=o["\u0275\u0275defineInjectable"]({factory:function(){return new il(o["\u0275\u0275inject"](_.l),o["\u0275\u0275inject"](dl.a))},token:il,providedIn:"root"}),il),pl=function l(){u(this,l)},gl=o["\u0275cmf"](i,[],function(l){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,s.a,O,q,W,rl]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,m.o,m.n,[o.LOCALE_ID]),o["\u0275mpd"](4608,D.f,D.f,[]),o["\u0275mpd"](4608,D.B,D.B,[]),o["\u0275mpd"](4608,b.e,b.e,[]),o["\u0275mpd"](1073742336,p.s,p.s,[[2,p.y],[2,p.o]]),o["\u0275mpd"](1073742336,m.b,m.b,[]),o["\u0275mpd"](1073742336,sl.a,sl.a,[]),o["\u0275mpd"](1073742336,D.A,D.A,[]),o["\u0275mpd"](1073742336,D.w,D.w,[]),o["\u0275mpd"](1073742336,pl,pl,[]),o["\u0275mpd"](1073742336,b.a,b.a,[]),o["\u0275mpd"](1073742336,i,i,[]),o["\u0275mpd"](1024,p.m,function(){return[[{path:"",component:x,canActivate:[cl.a],children:[{path:"",component:N},{path:"new",component:j},{path:":id",component:ul,resolve:[ml]},{path:":id/edit",component:j,resolve:[ml]}]}]]},[])])})}}])}();