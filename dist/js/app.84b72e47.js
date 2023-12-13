(function(){"use strict";var t={1226:function(t,n,e){var s=e(9242),o=e(3396);const i={id:"app"};function r(t,n,e,s,r,u){const a=(0,o.up)("MyChat");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(a)])}var u=e(7139),a=e.p+"img/programmer.4472f294.svg";const c={class:"chat"},l={class:"title"},d=(0,o._)("figure",{class:"title-img"},[(0,o._)("img",{src:a,alt:"programmer"})],-1);function f(t,n,e,s,i,r){const a=(0,o.up)("QuestionList"),f=(0,o.up)("QuestionsInput");return(0,o.wg)(),(0,o.iD)("section",c,[(0,o._)("div",l,[(0,o._)("h1",null,(0,u.zw)(t.isActive?"Чат с компанией":"Закажите пиццу!"),1)]),d,(0,o.Wm)(a),(0,o.Wm)(f)])}var p=e(65);const h={class:"questions"},v={class:"questions-content",ref:"scrollbar"},m={key:0};function g(t,n,e,s,i,r){const u=(0,o.up)("BtnItem"),a=(0,o.up)("UserQuestions"),c=(0,o.up)("ChatbotAnswer");return(0,o.wg)(),(0,o.iD)("div",h,[(0,o._)("div",v,[i.isHide?((0,o.wg)(),(0,o.iD)("div",m,[(0,o.Wm)(u,{onClick:n[0]||(n[0]=t=>i.isHide=!i.isHide)},{default:(0,o.w5)((()=>[(0,o.Uk)("Да. С удовольствием!")])),_:1})])):(0,o.kq)("",!0),i.isHide?(0,o.kq)("",!0):((0,o.wg)(!0),(0,o.iD)(o.HY,{key:1},(0,o.Ko)(t.questions,(t=>((0,o.wg)(),(0,o.iD)(o.HY,null,[t.chatbot?((0,o.wg)(),(0,o.j4)(a,{key:t.id,question:t},null,8,["question"])):((0,o.wg)(),(0,o.j4)(c,{key:1,question:t},null,8,["question"]))],64)))),256))],512)])}function b(t,n,e,s,i,r){return(0,o.wg)(),(0,o.iD)("div",{class:(0,u.C_)(["question question-personal",{loading:i.loading}])},[(0,o._)("span",null,(0,u.zw)(e.question.text),1)],2)}var q={name:"UserQuestions",props:{question:Object},data(){return{loading:!0}},created(){setTimeout((()=>{this.loading=!1}),1e3+20*Math.random()*100)}},w=e(89);const _=(0,w.Z)(q,[["render",b]]);var T=_;const O={class:"answer"};function Q(t,n,e,s,i,r){return(0,o.wg)(),(0,o.iD)("div",O,[(0,o._)("span",null,(0,u.zw)(e.question.text),1)])}var y={name:"ChatbotAnswer",props:{question:Object}};const C=(0,w.Z)(y,[["render",Q]]);var D=C;const k={class:"btn"};function A(t,n,e,s,i,r){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("button",k,[(0,o.WI)(t.$slots,"default")])])}var M={name:"BtnItem"};const I=(0,w.Z)(M,[["render",A]]);var U=I,S={name:"QuestionList",components:{UserQuestions:T,ChatbotAnswer:D,BtnItem:U},data(){return{isHide:!0}},watch:{questions:{handler(){this.$nextTick(this.scrollToBottom)},deep:!0}},computed:{...(0,p.rn)(["questions"])},methods:{scrollToBottom(){this.$refs.scrollbar.scrollTop=this.$refs.scrollbar.scrollHeight}}};const x=(0,w.Z)(S,[["render",g]]);var H=x;const N={class:"question-container"};function j(t,n,e,i,r,u){return(0,o.wg)(),(0,o.iD)("div",N,[(0,o.wy)((0,o._)("textarea",{class:"question-input",placeholder:"Введите сообщение...","onUpdate:modelValue":n[0]||(n[0]=t=>r.questionValue=t)},"\r\n        ",512),[[s.nr,r.questionValue]]),(0,o._)("button",{type:"submit",class:"question-submit",onClick:n[1]||(n[1]=(...t)=>u.sendQuestion&&u.sendQuestion(...t))}," Отправить ")])}var B={name:"QuestionsInput",data(){return{questionValue:""}},mounted(){this.sendBotMsg()},computed:{...(0,p.Se)(["NEXT_CHAT_QUESTION"])},methods:{...(0,p.nv)({saveQuestions:"sendQuestion"}),sendQuestion(){if(!this.questionValue)return;const t={id:Date.now(),text:this.questionValue};this.saveQuestions(t),this.questionValue="",setTimeout(this.sendBotMsg,1e3+20*Math.random()*100)},sendBotMsg(){if(this.questionValue)return;const t={id:Date.now(),text:this.NEXT_CHAT_QUESTION,chatbot:!0};this.saveQuestions(t)}}};const E=(0,w.Z)(B,[["render",j]]);var V=E,W={name:"MyChat",components:{QuestionList:H,QuestionsInput:V},computed:{...(0,p.rn)(["isActive"])}};const Z=(0,w.Z)(W,[["render",f]]);var $=Z,z={name:"App",components:{MyChat:$}};const L=(0,w.Z)(z,[["render",r]]);var P=L,X=e(2483);const G=[],Y=(0,X.p7)({history:(0,X.PO)("/test/"),routes:G});var F=Y,K=(e(560),(0,p.MT)({state:{questions:[],isActive:null,botMsgs:["Хорошо, укажите адрес для доставки!","Отлично! В течение 2 часов мы доставим Вам пиццу. Спасибо!","Вы хотели что-то ещё?","Хотите узнать, где мы находимся, чтобы посетить нас?","К Вашему сведению, мы находимся по адресу WWW-Ленинград.","Будем рады, есди вы оставите отзыв о нас."]},getters:{QUESTIONS(t){return t.questions},BOT_MSG_COUNT(t){return t.questions.filter((t=>t.chatbot)).length},NEXT_CHAT_QUESTION({botMsgs:t},n){const e=n.BOT_MSG_COUNT,s=e<t.length?e:e-1;return t[s]}},mutations:{ADD_QUESTIONS(t,n){t.questions.push(n),t.questions.length>1&&(t.isActive=!0,console.log(t.isActive))}},actions:{sendQuestion(t,n){setTimeout((()=>{t.commit("ADD_QUESTIONS",n)}),500)}}}));(0,s.ri)(P).use(K).use(F).mount("#app")}},n={};function e(s){var o=n[s];if(void 0!==o)return o.exports;var i=n[s]={exports:{}};return t[s].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,s,o,i){if(!s){var r=1/0;for(l=0;l<t.length;l++){s=t[l][0],o=t[l][1],i=t[l][2];for(var u=!0,a=0;a<s.length;a++)(!1&i||r>=i)&&Object.keys(e.O).every((function(t){return e.O[t](s[a])}))?s.splice(a--,1):(u=!1,i<r&&(r=i));if(u){t.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[s,o,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.p="/test/"}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,s){var o,i,r=s[0],u=s[1],a=s[2],c=0;if(r.some((function(n){return 0!==t[n]}))){for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(a)var l=a(e)}for(n&&n(s);c<r.length;c++)i=r[c],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(l)},s=self["webpackChunkchat_bot_vue"]=self["webpackChunkchat_bot_vue"]||[];s.forEach(n.bind(null,0)),s.push=n.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(1226)}));s=e.O(s)})();
//# sourceMappingURL=app.84b72e47.js.map