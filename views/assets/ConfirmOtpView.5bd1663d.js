import{d as w,l as g,n as k,q as _,o as m,c as f,j as B,s as K,e as i,x as V,y as T,r as I,F as j,z as E,A as M,B as z,a as N,S as q,I as H,m as U,b as W,u as D,_ as G,f as b,t as J,w as Q,g as X,v as $,p as Y,k as Z}from"./index.62d30389.js";var A=w({name:"SingleOtpInput",props:{inputType:{type:String,validator:e=>["number","tel","letter-numeric","password"].includes(e),default:"tel"},inputmode:{type:String,default:"numeric"},value:{type:[String,Number]},separator:{type:String},focus:{type:Boolean},inputClasses:{type:[String,Array]},conditionalClass:{type:String},shouldAutoFocus:{type:Boolean},isLastChild:{type:Boolean},placeholder:{type:String},isDisabled:{type:Boolean}},emits:["on-change","on-keydown","on-paste","on-focus","on-blur"],setup(e,a){let{emit:u}=a;const o=g(e.value||""),n=g(null),c=()=>(o.value=o.value.toString(),o.value.length>1&&(o.value=o.value.slice(0,1)),u("on-change",o.value)),r=t=>t>=65&&t<=90,h=t=>t>=48&&t<=57||t>=96&&t<=105,l=t=>{e.isDisabled&&t.preventDefault();const p=t||window.event,O=p.which?p.which:p.keyCode;h(O)||e.inputType==="letter-numeric"&&r(O)||[8,9,13,37,39,46,86].includes(O)?u("on-keydown",t):p.preventDefault()},d=t=>u("on-paste",t),v=()=>(n.value.select(),u("on-focus")),y=()=>u("on-blur");return k(()=>e.value,(t,p)=>{t!==p&&(o.value=t)}),k(()=>e.focus,(t,p)=>{p!==t&&n.value&&e.focus&&(n.value.focus(),n.value.select())}),_(()=>{n.value&&e.focus&&e.shouldAutoFocus&&(n.value.focus(),n.value.select())}),{handleOnChange:c,handleOnKeyDown:l,handleOnPaste:d,handleOnFocus:v,handleOnBlur:y,input:n,model:o,inputTypeValue:e.inputType==="letter-numeric"?"text":e.inputType}}});const x={style:{display:"flex","align-items":"center"}},ee=["type","inputmode","placeholder","disabled"],ne={key:0},te=["innerHTML"];function ae(e,a,u,o,n,c){return m(),f("div",x,[B(i("input",{type:e.inputTypeValue,inputmode:e.inputmode,placeholder:e.placeholder,disabled:e.isDisabled,ref:"input",min:"0",max:"9",maxlength:"1",pattern:"[0-9]","onUpdate:modelValue":a[0]||(a[0]=r=>e.model=r),class:V([e.inputClasses,e.conditionalClass,{"is-complete":e.model}]),onInput:a[1]||(a[1]=function(){return e.handleOnChange&&e.handleOnChange(...arguments)}),onKeydown:a[2]||(a[2]=function(){return e.handleOnKeyDown&&e.handleOnKeyDown(...arguments)}),onPaste:a[3]||(a[3]=function(){return e.handleOnPaste&&e.handleOnPaste(...arguments)}),onFocus:a[4]||(a[4]=function(){return e.handleOnFocus&&e.handleOnFocus(...arguments)}),onBlur:a[5]||(a[5]=function(){return e.handleOnBlur&&e.handleOnBlur(...arguments)})},null,42,ee),[[K,e.model]]),!e.isLastChild&&e.separator?(m(),f("span",ne,[i("span",{innerHTML:e.separator},null,8,te)])):T("",!0)])}A.render=ae;const oe=8,se=37,le=39,ue=46;var F=w({name:"Vue3OtpInput",components:{SingleOtpInput:A},props:{numInputs:{default:4},separator:{type:String,default:"**"},inputClasses:{type:[String,Array]},conditionalClass:{type:Array,default:[]},inputType:{type:String,validator:e=>["number","tel","letter-numeric","password"].includes(e)},inputmode:{type:String,validator:e=>["numeric","text","tel","none"].includes(e),default:"numeric"},shouldAutoFocus:{type:Boolean,default:!1},placeholder:{type:Array,default:[]},isDisabled:{type:Boolean,default:!1}},setup(e,a){let{emit:u}=a;const o=g(0),n=g([]),c=g([]),r=s=>{o.value=s},h=()=>{o.value=-1},l=()=>n.value.join("").length===e.numInputs?u("on-complete",n.value.join("")):"Wait until the user enters the required number of characters",d=s=>{o.value=Math.max(Math.min(e.numInputs-1,s),0)},v=()=>{d(o.value+1)},y=()=>{d(o.value-1)},t=s=>{c.value=Object.assign([],n.value),n.value[o.value]=s,c.value.join("")!==n.value.join("")&&(u("on-change",n.value.join("")),l())};return{activeInput:o,otp:n,oldOtp:c,clearInput:()=>{n.value.length>0&&u("on-change",""),n.value=[],o.value=0},handleOnPaste:s=>{s.preventDefault();const C=s.clipboardData.getData("text/plain").slice(0,e.numInputs-o.value).split("");if(e.inputType==="number"&&!C.join("").match(/^\d+$/)||e.inputType==="letter-numeric"&&!C.join("").match(/^\w+$/))return"Invalid pasted data";const S=n.value.slice(0,o.value).concat(C);return S.slice(0,e.numInputs).forEach(function(P,R){n.value[R]=P}),d(S.slice(0,e.numInputs).length),l()},handleOnKeyDown:s=>{switch(s.keyCode){case oe:s.preventDefault(),t(""),y();break;case ue:s.preventDefault(),t("");break;case se:s.preventDefault(),y();break;case le:s.preventDefault(),v();break}},handleOnBlur:h,changeCodeAtFocus:t,focusInput:d,focusNextInput:v,focusPrevInput:y,handleOnFocus:r,checkFilledAllInputs:l,handleOnChange:s=>{t(s),v()}}}});const ie={style:{display:"flex"}},re={key:0,autocomplete:"off",name:"hidden",type:"text",style:{display:"none"}};function de(e,a,u,o,n,c){const r=I("SingleOtpInput");return m(),f("div",ie,[e.inputType==="password"?(m(),f("input",re)):T("",!0),(m(!0),f(j,null,E(e.numInputs,(h,l)=>(m(),M(r,{key:l,focus:e.activeInput===l,value:e.otp[l],separator:e.separator,"input-type":e.inputType,inputmode:e.inputmode,"input-classes":e.inputClasses,conditionalClass:e.conditionalClass[l],"is-last-child":l===e.numInputs-1,"should-auto-focus":e.shouldAutoFocus,placeholder:e.placeholder[l],"is-disabled":e.isDisabled,onOnChange:e.handleOnChange,onOnKeydown:e.handleOnKeyDown,onOnPaste:e.handleOnPaste,onOnFocus:d=>e.handleOnFocus(l),onOnBlur:e.handleOnBlur},null,8,["focus","value","separator","input-type","inputmode","input-classes","conditionalClass","is-last-child","should-auto-focus","placeholder","is-disabled","onOnChange","onOnKeydown","onOnPaste","onOnFocus","onOnBlur"]))),128))])}F.render=de;var pe=(()=>{const e=F;return e.install=a=>{a.component("Vue3OtpInput",e)},e})();const ce=w({name:"AuthView",components:{BaseTextInput:z,BaseButton:N,Spinner:q,Icon:H,OtpInput:pe},data:()=>({form:{email:"",password:""},apiResponse:{message:"",token:""}}),mounted(){this.authorizationToken&&this.getUserInformation(this.authorizationToken)},computed:{...U(D,["isLoading","apiError","apiResponseMsg","authorizationToken"]),disabledState(){return this.isLoading===!0}},methods:{...W(D,{makeLoginRequest:"loginRequest",getUserInformation:"getUserInformation"}),login(){this.makeLoginRequest(this.form)},goToHome(){this.$router.push({name:"home"})},goBack(){this.$router.go(-1)}}});const L=e=>(Y("data-v-fbe58306"),e=e(),Z(),e),me={id:"confirm__otp__page"},he={class:"container"},fe=L(()=>i("div",null,null,-1)),ve={class:"go__back"},ye=L(()=>i("div",{class:"title"},[i("h1",null,"Confirm OTP"),i("p",{class:"sub__her__text"}," Please provide token sent to your email. you. ")],-1)),ge={class:"error"};function Oe(e,a,u,o,n,c){const r=I("Icon"),h=I("Spinner"),l=I("BaseButton");return m(),f("div",me,[i("div",he,[fe,i("div",null,[i("div",ve,[b(r,{icon:"mdi:arrow-left",size:"20",onClick:e.goBack},null,8,["onClick"])]),ye,i("small",ge,J(e.apiResponseMsg),1),i("form",{action:"",method:"post",onSubmit:a[0]||(a[0]=Q((...d)=>e.login&&e.login(...d),["prevent"]))},[b(l,{text:"",disabled:e.disabledState},{default:X(()=>[B(i("span",null,"Continue",512),[[$,!e.isLoading]]),B(b(h,{"animation-duration":1e3,size:30,color:"#ffffff"},null,512),[[$,e.isLoading]])]),_:1},8,["disabled"])],32)])])])}const we=G(ce,[["render",Oe],["__scopeId","data-v-fbe58306"]]);export{we as default};
