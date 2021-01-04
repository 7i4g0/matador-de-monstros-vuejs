(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"1c25":function(t,e,a){"use strict";a("1ce0")},"1ce0":function(t,e,a){},4974:function(t,e,a){"use strict";a("f109")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Main")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[t._m(0),t.running?a("div",{staticClass:"game"},[a("div",{staticClass:"panel arena__castle"},[a("div",{staticClass:"container arena"},[a("the-hero",{attrs:{status:t.player.status,life:t.player.life,name:t.player.name,damage:t.player.damage}}),a("the-monster",{attrs:{status:t.monster.status,life:t.monster.life,damage:t.monster.damage}}),a("monster-attack",{class:{play:t.fired}})],1)]),t.hasResult?a("div",{staticClass:"panel result"},[0==t.monster.life?a("div",{staticClass:"win"},[t._v("Você ganhou!!! :)")]):a("div",{staticClass:"lose"},[t._v("Você perdeu! :(")])]):t._e(),a("div",{staticClass:"panel buttons"},[[a("button",{staticClass:"btn btn__attack",attrs:{disabled:t.actions},on:{click:function(e){return t.doAttack(!1)}}},[a("span",[t._v("Ataque")])]),a("button",{staticClass:"btn btn__special-attack",attrs:{disabled:t.actions},on:{click:function(e){return t.doAttack(!0)}}},[a("span",[t._v("Ataque Especial")])]),a("button",{staticClass:"btn btn__heal",attrs:{disabled:t.actions},on:{click:t.doHealAndHurt}},[a("span",[t._v("Curar")])]),a("button",{staticClass:"btn btn__give-up",on:{click:function(e){t.running=!1}}},[a("span",[t._v("Desistir")])])]],2),t.logs.length?a("div",{staticClass:"panel logs"},[a("ul",t._l(t.logs,(function(e){return a("li",{key:e.id,staticClass:"log",class:e.cls},[t._v(" "+t._s(e.text)+" ")])})),0)]):t._e()]):a("div",{staticClass:"menu"},[a("div",{staticClass:"panel buttons"},[a("div",{staticClass:"grid-container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.player.name,expression:"player.name"}],attrs:{type:"text"},domProps:{value:t.player.name},on:{input:function(e){e.target.composing||t.$set(t.player,"name",e.target.value)}}}),a("button",{staticClass:"btn btn__new-game",on:{click:t.startGame}},[a("span",[t._v("Start")])])])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"screen-block"},[a("h1",[t._v("Vire o celular")])])}],l=(a("99af"),a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"character"},[a("div",{ref:"hero",class:["knight",t.takeStatus],on:{click:t.doAttack}}),a("p",{staticClass:"damage",class:{heal:t.damage.startsWith("+")}},[t._v(t._s(t.damage))]),a("h1",[t._v(t._s(t.name))]),a("div",{staticClass:"life-bar"},[a("div",{staticClass:"life",class:{"life--warning":t.life<40,"life--danger":t.life<20},style:{width:t.life+"%"}})]),a("div",[t._v(t._s(t.life)+"%")])])}),c=[],u=(a("caad"),a("a9e3"),a("ac1f"),a("5319"),a("2ca0"),{name:"TheHero",data:function(){return{monsterName:"Player"}},props:{name:{type:String},status:{type:String,default:"",validator:function(t){return["","iddle","run","attack","special-attack","healer","hurt","death"].includes(t)}},life:{type:Number},damage:{type:String}},mounted:function(){this.$refs.hero.addEventListener("animationstart",this.listener,!1)},computed:{takeStatus:function(){return"knight--".concat(this.status)}},methods:{doAttack:function(){var t=this;this.$refs.hero.classList.replace("iddle","attack"),this.$emit("fired",!0),setTimeout((function(){t.$refs.hero.classList.replace("attack","iddle")}),720)},listener:function(t){t.animationName.startsWith("death")&&setTimeout((function(){t.target.classList.replace("knight--death","knight--staydeath")}),1200)}}}),d=u,f=(a("1c25"),a("2877")),h=Object(f["a"])(d,l,c,!1,null,"547546a6",null),m=h.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"character"},[a("div",{ref:"monster",class:["dragon",t.takeStatus],on:{click:t.doAttack}}),a("p",{staticClass:"damage"},[t._v(t._s(t.damage))]),a("h1",[t._v(t._s(t.monsterName))]),a("div",{staticClass:"life-bar",class:{"d-none":t.life<1}},[a("div",{staticClass:"life",class:{"life--warning":t.life<40,"life--danger":t.life<20},style:{width:t.life+"%"}})]),a("div",[t._v(t._s(t.life)+"%")])])},v=[],g={name:"TheMonster",data:function(){return{monsterName:"Dragon"}},props:{status:{type:String,default:"",validator:function(t){return["","iddle","attack","hurt","death"].includes(t)}},life:{type:Number},damage:{type:String}},mounted:function(){this.$refs.monster.addEventListener("animationstart",this.listener,!1)},computed:{takeStatus:function(){return"dragon--".concat(this.status)}},methods:{doAttack:function(){var t=this;this.$refs.monster.classList.replace("iddle","attack"),this.$emit("fired",!0),setTimeout((function(){t.$refs.monster.classList.replace("attack","iddle")}),720)},listener:function(t){t.animationName.startsWith("death")&&setTimeout((function(){t.target.classList.replace("dragon--death","dragon--staydeath")}),600)}}},y=g,_=(a("4974"),Object(f["a"])(y,p,v,!1,null,"b45dc55e",null)),b=_.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"monster_attack",staticClass:"fire"})},C=[],w={name:"MonsterAttack"},A=w,S=(a("a7a9"),Object(f["a"])(A,k,C,!1,null,null,null)),M=S.exports,P={components:{TheHero:m,TheMonster:b,MonsterAttack:M},data:function(){return{running:!1,actions:!1,fired:!1,logs:[],player:{name:"Knight",life:100,status:"",damage:""},monster:{name:"Dragon",life:100,status:"",damage:""}}},mounted:function(){this.doPlaySound("menu")},computed:{hasResult:function(){return 0==this.player.life||0==this.monster.life}},methods:{startGame:function(){this.running=!0,this.monster.life=100,this.monster.status="iddle",this.player.life=100,this.player.status="iddle",this.logs=[],this.doPlaySound("battle")},doAttack:function(t){var e=this;this.doAtcion(),this.doHurt("monster",5,10,t,this.player.name,this.monster.name,"player"),this.doPlayerAttack(t),setTimeout((function(){e.monster.life>0&&(e.doMonsterAttack(),e.doHurt("player",7,12,!1,e.monster.name,e.player.name,"monster"))}),2e3)},doHurt:function(t,e,a,n,s,i,r){var o=this,l=n?5:0,c=this.getRandom(e+l,a+l);setTimeout((function(){o[t].life=Math.max(o[t].life-c,0),o.doShowHurt(t,c),o.doRegisterLog("".concat(s," atingiu ").concat(i," com ").concat(c,"."),r)}),1200)},doHealAndHurt:function(){var t=this;this.doAtcion(),this.doHeal(10,15),setTimeout((function(){t.doMonsterAttack(),t.doHurt("player",7,12,!1,t.monster.name,t.player.name,"monster")}),2e3)},doHeal:function(t,e){this.player.status="healer",this.doPlayerIddle(1200);var a=this.getRandom(t,e);this.player.life=Math.min(this.player.life+a,100),this.doShowHurt("heal",a),this.doRegisterLog("".concat(this.player.name," ganhou ").concat(a," de vida."),"player")},getRandom:function(t,e){var a=Math.random()*(e-t)+t;return Math.round(a)},doRegisterLog:function(t,e){this.logs.unshift({text:t,cls:e})},doMonsterAttack:function(){var t=this;this.fired=!1,this.fired=!0,this.monster.status="attack",this.player.status="hurt",this.doMonsterIddle(720),setTimeout((function(){t.fired=!1}),1300)},doPlayerAttack:function(t){this.player.status=t?"special-attack":"attack",this.monster.status="hurt",this.doPlayerIddle(1200)},doMonsterIddle:function(t){var e=this;setTimeout((function(){"death"!==e.monster.status&&(e.monster.status="iddle"),e.doPlayerIddle(1e3)}),t)},doPlayerIddle:function(t){var e=this;setTimeout((function(){"death"!==e.player.status&&(e.player.status="iddle")}),t)},doAtcion:function(){var t=this;this.actions=!0,setTimeout((function(){t.actions=!1}),3800)},doShowHurt:function(t,e){var a=this;"heal"===t?(t="player",this[t].damage="+ ".concat(e)):this[t].damage="- ".concat(e),setTimeout((function(){a[t].damage=""}),1e3)},doPlaySound:function(t){var e=new Audio("/audio/"+t+".mp3");e.play()}},watch:{hasResult:function(t){0===this.monster.life&&(this.monster.status="death",this.doPlaySound("winner")),0===this.player.life&&(this.player.status="death"),t&&(this.running=!1)}}},T=P,x=(a("fa01"),Object(f["a"])(T,r,o,!1,null,null,null)),O=x.exports,$={name:"App",components:{Main:O}},H=$,j=(a("034f"),Object(f["a"])(H,s,i,!1,null,null,null)),L=j.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(L)}}).$mount("#app")},"85ec":function(t,e,a){},"8dca":function(t,e,a){},a7a9:function(t,e,a){"use strict";a("df65")},df65:function(t,e,a){},f109:function(t,e,a){},fa01:function(t,e,a){"use strict";a("8dca")}});
//# sourceMappingURL=app.4b75250f.js.map