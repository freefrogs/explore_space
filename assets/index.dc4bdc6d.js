import{s as A}from"./spacex.eeae468c.js";import{d as y,j as _,_ as g,o as n,e as t,g as r,a as s,R as b,r as c,t as i,F as L,m as N,c as m,w as $,b as v,k as S,i as d}from"./index.e05dc400.js";import{S as C}from"./Slider.36311c85.js";import{L as I}from"./Loader.5664d0e4.js";const q=y({props:{links:{required:!0,type:Object}},setup(e){return{isLinks:_(()=>e.links&&(e.links.article||e.links.presskit||e.links.webcast||e.links.wikipedia))}}}),B={key:0,class:"launch__box launch__box--gap"},P=s("span",{class:"launch__box--title"},"Links: ",-1),V=["href"],F=["href"],R=["href"],j=["href"];function T(e,a,f,h,p,k){return e.isLinks?(n(),t("p",B,[P,e.links&&e.links.article?(n(),t("a",{key:0,href:e.links.article,target:"_blank",rel:"noopener noreferrer",class:"info__btn"},"Article",8,V)):r("",!0),e.links&&e.links.presskit?(n(),t("a",{key:1,href:e.links.presskit,target:"_blank",rel:"noopener noreferrer",class:"info__btn"},"Presskit",8,F)):r("",!0),e.links&&e.links.webcast?(n(),t("a",{key:2,href:e.links.webcast,target:"_blank",rel:"noopener noreferrer",class:"info__btn"},"YouTube",8,R)):r("",!0),e.links&&e.links.wikipedia?(n(),t("a",{key:3,href:e.links.wikipedia,target:"_blank",rel:"noopener noreferrer",class:"info__btn"},"Wikipedia",8,j)):r("",!0)])):r("",!0)}const E=g(q,[["render",T]]),O=y({components:{RouterLink:b},props:{partialArray:{required:!0,type:Array},title:{required:!0,type:String},pathName:{required:!0,type:String}}}),W={key:0,class:"launch__box"},Y={class:"launch__box--title"};function z(e,a,f,h,p,k){const u=c("router-link");return e.partialArray.length?(n(),t("p",W,[s("span",Y,i(e.title)+":",1),(n(!0),t(L,null,N(e.partialArray,(l,o)=>(n(),m(u,{to:{name:e.pathName,params:{id:l}},class:"info__circle",key:`${e.title}${o}`},{default:$(()=>[v(i(o+1),1)]),_:2},1032,["to"]))),128))])):r("",!0)}const G=g(O,[["render",z]]),H=y({components:{LaunchLinks:E,LaunchPartial:G,Slider:C,RouterLink:b,Loader:I},props:["id"],setup(e){let a=S();(async()=>{try{const l=await A.get(`v4/launches/${e.id}`);a.value=l.data}catch(l){console.error(l)}})();const h=_(()=>a.value&&(a.value.rocket||a.value.crew.length||a.value.ships.length||a.value.capsules.length)),p=_(()=>a.value?new Date(a.value.date_utc):""),k=_(()=>a.value?a.value.success?"\u2714":"\u2716":""),u=_(()=>!a.value||!a.value.links||!a.value.links.flickr||!a.value.links.flickr.original||!a.value.links.flickr.original.length?[]:a.value.links.flickr.original);return{launchData:a,isPartials:h,launchDate:p,icon:k,sliderImages:u}}});const J={class:"launch"},K={key:1,class:"launch__main"},M={class:"info__header"},Q=["src","alt"],U={key:0,class:"launch__box launch__box--gap"},X={key:1,class:"info__subheader"},Z={class:"launch__box"},x=s("span",{class:"launch__box--title"},"Flight number: ",-1),ee={class:"info__circle"},ae=s("span",{class:"launch__box--title"},"Success: ",-1),ne={class:"info__circle"},se={class:"info__paragraph"};function te(e,a,f,h,p,k){const u=c("loader"),l=c("router-link"),o=c("launch-partial"),D=c("launch-links"),w=c("slider");return n(),t("div",J,[e.launchData?(n(),t("div",K,[s("h3",M,"Launch "+i(e.launchData.name),1),s("img",{src:e.launchData.links.patch.small,alt:`${e.launchData.name} patch`,class:"launch__patch"},null,8,Q),e.isPartials?(n(),t("div",U,[e.launchData.rocket?(n(),m(l,{key:0,class:"launch__box--title",to:{name:"rocket",params:{id:e.launchData.rocket}}},{default:$(()=>[v("Rocket")]),_:1},8,["to"])):r("",!0),d(o,{title:"Crew members",partialArray:e.launchData.crew,pathName:"crew_member"},null,8,["partialArray"]),d(o,{title:"Ships",partialArray:e.launchData.ships,pathName:"ship"},null,8,["partialArray"]),d(o,{title:"Capsules",partialArray:e.launchData.capsules,pathName:"capsule"},null,8,["partialArray"])])):r("",!0),e.launchData.date_utc?(n(),t("h5",X,"Launch date: "+i(e.launchDate),1)):r("",!0),s("div",Z,[s("p",null,[x,s("span",ee,i(e.launchData.flight_number),1)]),s("p",null,[ae,s("span",ne,i(e.icon),1)])]),s("p",se,i(e.launchData.details),1),d(D,{links:e.launchData.links},null,8,["links"]),e.sliderImages.length?(n(),m(w,{key:2,imagesArray:e.sliderImages},null,8,["imagesArray"])):r("",!0)])):(n(),m(u,{key:0}))])}const ce=g(H,[["render",te]]);export{ce as default};
