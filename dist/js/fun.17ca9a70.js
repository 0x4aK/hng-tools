"use strict";(self["webpackChunkhngui"]=self["webpackChunkhngui"]||[]).push([[960],{5722:function(t,e,l){l.r(e),l.d(e,{default:function(){return ut}});var s=l(3058),r=l(1050);const i=(0,r.Ji)("v-card__actions"),a=(0,r.Ji)("v-card__subtitle"),o=(0,r.Ji)("v-card__text"),n=(0,r.Ji)("v-card__title");s.Z;var c=l(4437),h=l(6035),u=l(5294),d=function(){var t=this,e=t._self._c;return e(h.Z,{staticClass:"fun",attrs:{fluid:""}},[e(h.Z,[e(u.Z,{staticClass:"mx-4 mt-16",attrs:{justify:"center"}},[e(c.Z,{attrs:{cols:"6",sm:"4",md:"3"}},[e(s.Z,{attrs:{color:t.isEnoughTotal?"success":"error"}},[e(n,[t._v(" Tickets: "),e("span",{staticClass:"ml-2"},[t._v(t._s(t.totalTickets)+" / "+t._s(t.ticketsNeeded))])])],1)],1),e(c.Z,{attrs:{cols:"6",sm:"4",md:"3"}},[e(s.Z,{attrs:{color:t.isEnoughInfPara?"success":"error"}},[e(n,[t._v("Inf/Para Tickets")])],1)],1),e(c.Z,{attrs:{cols:"12",sm:"4",md:"3"}},[e(s.Z,{attrs:{color:t.isFun?"success":"error"}},[e(n,[t._v("Battle is "+t._s(t.isFun?"fun":"not fun"))])],1)],1)],1)],1),e("progress-bar",{staticClass:"mx-n4 my-6",attrs:{max:t.ticketsNeeded,bars:t.resources,halfColor:t.isEnoughInfPara?"#0f0":"red"}}),e(h.Z,{staticClass:"px-lg-16"},[e(u.Z,{attrs:{justify:"center"}},[e(c.Z,{staticClass:"mx-md-14 mx-lg-0",attrs:{cols:"12",md:"8",lg:"6"}},[e("mode-selector",{staticClass:"fill-height",model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}})],1),e(c.Z,{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[e("category-card",{attrs:{title:"Infantry",category:t.ground}})],1),e(c.Z,{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[e("category-card",{attrs:{title:"Paras",category:t.paras,disabled:1==t.mode}})],1)],1),e(u.Z,{attrs:{justify:"center"}},[e(c.Z,{attrs:{cols:"12",md:"8",lg:"6"}},[e("category-card",{attrs:{title:"Tankers",category:t.tanks,maxFields:3,disabled:1==t.mode}})],1),e(c.Z,{attrs:{cols:"12",md:"8",lg:"6"}},[e("category-card",{attrs:{title:"Pilots",category:t.planes,maxFields:2,disabled:1==t.mode}})],1)],1)],1)],1)},p=[],m=(l(7658),l(5838)),v=l(8998),f=l(3651),g=l(6596),S=l(144),b=S.ZP.extend({name:"scrollable",directives:{Scroll:v.X},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||(0,g.Kd)(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()})))},thresholdMet(){}}}),k=l(8574),y=l(6470),T=l(4987);const Z=(0,T.Z)(m.Z,b,k.Z,y.Z,(0,f.Z)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var x=Z.extend({name:"v-app-bar",directives:{Scroll:v.Z},provide(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return b.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...m.Z.options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},scrollRatio(){const t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight(){if(!this.shrinkOnScroll)return m.Z.options.computed.computedContentHeight.call(this);const t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize(){if(!this.isProminent)return;const t=1.25,e=1.5;return t+(e-t)*this.scrollRatio},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight(){let t=m.Z.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:m.Z.options.computed.isCollapsed.call(this)},isProminent(){return m.Z.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...m.Z.options.computed.styles.call(this),fontSize:(0,r.kb)(this.computedFontSize,"rem"),marginTop:(0,r.kb)(this.computedMarginTop),transform:`translateY(${(0,r.kb)(this.computedTransform)})`,left:(0,r.kb)(this.computedLeft),right:(0,r.kb)(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=m.Z.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(t){const e=m.Z.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),_=l(8819),C=l(2469);const O=(0,r.Ji)("v-toolbar__title"),M=(0,r.Ji)("v-toolbar__items");m.Z;var A=function(){var t=this,e=t._self._c;return e(s.Z,{attrs:{color:t.color,disabled:t.disabled}},[e(x,{attrs:{dense:""}},[e(O,[t._v(t._s(t.title))])],1),e("div",{staticClass:"d-flex"},t._l(t.divideToColumns,(function(l,s){return e("div",{key:s,staticClass:"px-2 flex-grow-1"},t._l(l,(function(l){return e("div",{key:l.label,staticClass:"d-flex ma-1 align-center"},[e(_.Z,{staticClass:"mr-2",attrs:{size:"36"}},[e(C.Z,{attrs:{src:`/img/units/unit/${l.icon}.png`}})],1),e("number-field",{attrs:{label:l.label},model:{value:l.value,callback:function(e){t.$set(l,"value",t._n(e))},expression:"field.value"}})],1)})),0)})),0)],1)},P=[],w=l(7179),B=l(5057),$=l(1800),H=function(){var t=this,e=t._self._c;return e($.Z,{staticClass:"number-field",attrs:{value:t.value,label:t.label,type:"number",min:"0"},on:{input:t.handleInput,"!mouseover":function(e){return t.handleMouseOver.apply(null,arguments)},"!mouseleave":function(e){return t.handleMouseLeave.apply(null,arguments)}}},[e("div",{staticClass:"d-flex",attrs:{slot:"append-outer"},slot:"append-outer"},[e(w.Z,{attrs:{icon:"",small:""},on:{click:function(e){return t.handleButtons(-1)}}},[e(B.Z,[t._v("mdi-minus")])],1),e(w.Z,{attrs:{icon:"",small:""},on:{click:function(e){return t.handleButtons(1)}}},[e(B.Z,[t._v("mdi-plus")])],1)],1)])},I=[],R={props:["value","label"],methods:{handleInput(t){this.$emit("input",t)},handleButtons(t){this.$emit("input",Math.max(0,this.value+t))},handleMouseOver(t){t.target.focus()},handleMouseLeave(t){t.target.blur()}}},E=R,F=l(1001),N=(0,F.Z)(E,H,I,!1,null,null,null),L=N.exports,j={components:{NumberField:L},props:{title:String,category:Object,maxFields:Number,color:String,disabled:Boolean},computed:{divideToColumns(){const t={};for(const[e,[l,s]]of Object.entries(this.category).entries()){const r=Math.floor(e/this.maxFields)||0;t[r]||(t[r]={}),t[r][l]=s}return t}}},J=j,U=(0,F.Z)(J,A,P,!1,null,null,null),z=U.exports,K=l(3422),q=l(4791);const D=S.ZP.extend({props:{activeClass:String,value:{required:!1}},data:()=>({isActive:!1}),methods:{toggle(){this.isActive=!this.isActive}},render(){if(!this.$scopedSlots.default)return(0,g.Kd)("v-item is missing a default scopedSlot",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:{[this.activeClass]:this.isActive}}),t):((0,g.Kd)("v-item should only contain a single element",this),t)}});var Y=(0,T.Z)(D,(0,q.d)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),G=l(2021),V=function(){var t=this,e=t._self._c;return e(s.Z,{staticClass:"mode-selector",attrs:{"min-height":"138"}},[e(G.Z,{attrs:{mandatory:"",value:t.input},on:{change:t.handleChange}},[e(h.Z,{staticClass:"fill-height",attrs:{fluid:""}},[e(u.Z,t._l(t.modes,(function(l,r){return e(c.Z,{key:r,attrs:{cols:"4"}},[e(Y,{scopedSlots:t._u([{key:"default",fn:function({active:r,toggle:i}){return[e(s.Z,{staticClass:"fill-height rounded-lg",attrs:{dark:"",img:`/img/modes/${l.img}.png`},on:{click:i}},[e(K.Z5,[r?e("div",{staticClass:"mode-active d-flex justify-center align-center fill-height text-h5"}):t._e()]),e("div",{staticClass:"mode-title ma-1 text-h6 text-truncate"},[t._v(" "+t._s(l.label)+" ")])],1)]}}],null,!0)})],1)})),1)],1)],1)],1)},W=[],X={props:["input"],data:()=>({modes:{0:{img:"assault",label:"Assault/Skirm"},1:{img:"encounter",label:"Encounter"},2:{img:"3way",label:"3-Way Assault"}}}),methods:{handleChange(t){this.$emit("input",t)}}},Q=X,tt=(0,F.Z)(Q,V,W,!1,null,null,null),et=tt.exports,lt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"progress-bar"},[t._l(t.bars,(function(l,s){return e("div",{key:s,style:{width:l.width?`${l.width}px`:l.value/t.max*100+"%",backgroundColor:l.color,boxShadow:l.value?`0 0 5px 2px ${l.color}70`:""}})})),e("div",{staticClass:"half",style:{backgroundColor:t.halfColor}})],2)},st=[],rt={props:{max:Number,bars:Array[Object],halfColor:String}},it=rt,at=(0,F.Z)(it,lt,st,!1,null,null,null),ot=at.exports,nt={name:"FunCalc",components:{CategoryCard:z,ModeSelector:et,ProgressBar:ot},data:()=>({mode:0,ground:{infantry:{label:"Infantry",icon:"infantry",value:0},recons:{label:"Recons",icon:"recon",value:0}},paras:{para:{label:"Paras",icon:"para",value:0},planes:{label:"Para Planes",icon:"paraplane",value:0}},tanks:{tankers:{label:"Tankers",icon:"tanker",value:0},light:{label:"Light Tanks",icon:"lighttank",value:0},medium:{label:"Medium Tanks",icon:"mediumtank",value:0},heavy:{label:"Heavy Tanks",icon:"heavytank",value:0},td:{label:"Tank Destroyers",icon:"td",value:0},htd:{label:"Heavy Tank Destroyer",icon:"heavytd",value:0}},planes:{pilots:{label:"Pilots",icon:"pilot",value:0},recon:{label:"Recon Planes",icon:"reconplane",value:0},fighter:{label:"Fighters",icon:"fighter",value:0},heavy:{label:"Heavy Planes",icon:"heavyplane",value:0}}}),computed:{ticketsNeeded(){return this.mode?12:18},infantryTickets(){return Math.floor(this.ground.infantry.value/12)},reconTickets(){return Math.floor(this.ground.recons.value/10)},paraTickets(){return Math.min(Math.floor(this.paras.para.value/12),Math.floor(this.paras.planes.value/4))},tankerTickets(){const t=Math.floor(this.tanks.light.value/10)+Math.floor(this.tanks.medium.value/10)+Math.floor(this.tanks.heavy.value/10)+Math.floor(this.tanks.td.value/10)+Math.floor(this.tanks.htd.value/10);return Math.min(t,Math.floor(this.tanks.tankers.value/10))},pilotTickets(){const t=Math.floor(this.planes.recon.value/10)+Math.floor(this.planes.fighter.value/10)+Math.floor(this.planes.heavy.value/10);return Math.min(t,Math.floor(this.planes.pilots.value/10))},totalTickets(){return 1==this.mode?this.infantryTickets:this.infantryTickets+this.reconTickets+this.paraTickets+this.tankerTickets+this.pilotTickets},isEnoughInfPara(){return 1==this.mode?this.infantryTickets>=this.ticketsNeeded/2:this.infantryTickets+this.paraTickets>=this.ticketsNeeded/2},isEnoughTotal(){return this.totalTickets>=this.ticketsNeeded},isFun(){return this.isEnoughInfPara&&this.isEnoughTotal},resources(){return 1==this.mode?[{color:"#2ab32a",value:this.infantryTickets},{color:"#2294ff",value:0},{color:"#f00",width:5},{color:"#b7d62f",value:0},{color:"#9e0000",value:0},{color:"#00aaa2",value:0}]:[{color:"#2ab32a",value:this.infantryTickets},{color:"#2294ff",value:this.paraTickets},{color:"#f00",width:5},{color:"#b7d62f",value:this.reconTickets},{color:"#9e0000",value:this.tankerTickets},{color:"#00aaa2",value:this.pilotTickets}]}}},ct=nt,ht=(0,F.Z)(ct,d,p,!1,null,null,null),ut=ht.exports}}]);