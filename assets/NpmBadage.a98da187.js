import{_ as o,d as p,c as t,o as d,a as g,b as l,u as n}from"./app.35792cb8.js";const _=["href","title"],i=["src","alt"],u=p({props:{package:{type:String,required:!0},distTag:{type:String,required:!1,default:"next"}},setup(a){const e=a,r=t(()=>`https://www.npmjs.com/package/${e.package}`),s=t(()=>e.distTag?`${e.package}@${e.distTag}`:e.package),c=t(()=>`https://badgen.net/npm/v/${e.package}/${e.distTag}?label=${encodeURIComponent(s.value)}`);return(m,f)=>(d(),g("a",{class:"npm-badge",href:n(r),title:a.package,target:"_blank",rel:"noopener noreferrer"},[l("img",{src:n(c),alt:a.package},null,8,i)],8,_))}});var b=o(u,[["__scopeId","data-v-b693550e"],["__file","NpmBadage.vue"]]);export{b as default};
