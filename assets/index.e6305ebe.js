import{s as k}from"./spacex.eeae468c.js";import{_ as m,o as r,e as a,a as n,d as $,R as x,r as p,i as v,t as l,w as C,b as h,k as d,j as w,l as g,v as L,x as V,F as f,m as y,c as b,T as N,g as B}from"./index.e05dc400.js";const S={},T={class:"icon__helmet"},z=n("svg",{fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 507.154 507.155","xml:space":"preserve"},[n("g",null,[n("path",{d:`M331.306,507.054h4.801h160.1c1.4,0,2.8-0.699,3.7-1.8c0.899-1.1,1.3-2.6,0.899-4l-29.6-132.5\r
          c-8-42.399-45.7-55.6-59.4-59c3.4-18.6,2-32-4.199-39.7c-3-3.8-6.601-5.5-9.4-6.199v-25.4l18.2-25c0.6-0.8,0.899-1.8,0.899-2.8\r
          v-83.7c0-1.4-0.6-2.8-1.8-3.7l-20.1-16.4c-30.5-99.1-106.3-106.8-128.9-106.8c-3.7,0-6,0.2-6.1,0.2h-12.7\r
          c0,0-98.4-10.7-134.5,106.6l-19.3,16.4c-1.1,0.9-1.7,2.2-1.7,3.6v83.7c0,1,0.3,2,0.9,2.8l18.2,25v25.3c-3,0.8-7,2.5-10.3,6.6\r
          c-6.3,7.8-7.8,21.101-4.5,39.3c-13.6,3.4-51.1,16.5-59,58.801l-31.2,132.899c-0.3,1.4,0,2.9,0.9,4.101c0.9,1.1,2.3,1.8,3.7,1.8\r
          h157.8h4.8c2.6,0,4.8-2.101,4.8-4.8v-100.5h66.7h18.4h67.899v100.399V507.054L331.306,507.054z M149.606,220.254v-100.5\r
          c0-1.2,0.5-2.4,1.3-3.3c35.8-37,94.3-38.8,105.7-38.8h1.899h9.2c10.5,0,64.6,1.9,100.5,38.8c0.9,0.9,1.3,2.1,1.3,3.3v46.4\r
          c-2.899,3.5-6.1,6.8-9.6,9.9c-3.2,2.9-6.601,5.6-10.3,8.2c-16.9,11.4-37.301,17.7-58.601,18.5c-3-13-14.6-22.8-28.5-22.8\r
          c-16.1,0-29.3,13.1-29.3,29.3c0,16.2,13.1,29.3,29.3,29.3c11.601,0,21.5-6.8,26.3-16.6c25.801-0.4,50.601-7.8,71.101-21.6\r
          c0.1-0.1,0.3-0.2,0.399-0.3c3.2-2.2,6.2-4.5,9.101-6.9v27c0,0.3,0,0.7-0.101,1c-0.6,2.8-8.6,27.7-95.199,27.7h-11.101\r
          c-86.3,0-111.2-24.3-112.2-25.3C150.106,222.655,149.606,221.455,149.606,220.254z`}),n("path",{d:`M215.406,92.455c-1.5-0.3-3.2-0.4-4.8,0.1c-36,11.6-47.8,24.3-49.1,25.7c-0.8,0.9-1.4,1.9-1.8,2.9\r
          c-0.4,1.1-0.6,2.2-0.6,3.4v38.2c0,5.3,4.3,9.6,9.6,9.6s9.6-4.3,9.6-9.6v-33.9c4.6-3.5,15.9-10.9,38.2-18.1c5-1.6,7.8-7,6.2-12\r
          C221.506,95.354,218.606,93.055,215.406,92.455z`})])],-1),A=[z];function D(e,s){return r(),a("div",T,A)}const I=m(S,[["render",D]]),O=$({components:{HelmetIcon:I,RouterLink:x},props:{crewMember:{required:!0,type:Object}}});const j={class:"crew-card crew__grid info-card"};function E(e,s,i,o,_,u){const c=p("helmet-icon"),t=p("router-link");return r(),a("div",j,[v(c),n("span",null,l(e.crewMember.name),1),n("span",null,l(e.crewMember.agency),1),n("span",null,l(e.crewMember.status),1),n("span",null,[v(t,{to:{name:"crew_member",params:{id:e.crewMember.id}},class:"info__btn"},{default:C(()=>[h("Details")]),_:1},8,["to"])])])}const F=m(O,[["render",E]]),R=$({components:{CrewCard:F},setup(){let e=d([]);(async()=>{try{const c=await k.get("v4/crew");e.value=c.data}catch(c){console.error(c)}})();const i=d(""),o=d("all"),_=w(()=>{if(!e.value.length)return[];const c=e.value.map(t=>t.agency);return c.push("all"),[...new Set(c)]}),u=w(()=>e.value.length?e.value.filter(c=>{const t=c.name.toLowerCase().includes(i.value.toLowerCase()),M=o.value==="all"?!0:c.agency===o.value;return t&&M}):[]);return{crewList:e,search:i,agency:o,agencyOptions:_,searchedCrewMembers:u}}});const U={class:"crew"},q=n("h3",{class:"info__header"},"Check details about crew members",-1),G={class:"crew__filters text__center"},H=["value"],J={class:"info__paragraph text__center"},K=n("div",{class:"crew__grid"},[n("span"),n("strong",null,"Name"),n("strong",null,"Agency"),n("strong",null,"Status")],-1);function P(e,s,i,o,_,u){const c=p("crew-card");return r(),a("div",U,[q,n("div",G,[n("label",null,[h(" Enter phrase: "),g(n("input",{class:"info__input",type:"text","onUpdate:modelValue":s[0]||(s[0]=t=>e.search=t),placeholder:"search for..."},null,512),[[L,e.search]])]),n("label",null,[h(" Agency: "),g(n("select",{class:"info__input","onUpdate:modelValue":s[1]||(s[1]=t=>e.agency=t)},[(r(!0),a(f,null,y(e.agencyOptions,t=>(r(),a("option",{value:t,key:`agency_${t}`},l(t),9,H))),128))],512),[[V,e.agency]])])]),n("p",J,l(e.searchedCrewMembers.length)+" results:",1),e.crewList.length?(r(),b(N,{name:"list",key:"crewList",appear:"",mode:"out-in",tag:"div",class:"info__box"},{default:C(()=>[K,(r(!0),a(f,null,y(e.searchedCrewMembers,t=>(r(),b(c,{crewMember:t,key:t.id},null,8,["crewMember"]))),128))]),_:1})):B("",!0)])}const X=m(R,[["render",P]]);export{X as default};