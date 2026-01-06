import{_ as b,C as n,c as s,o,G as a,j as t,a_ as c,a as l,w as p,k as u}from"./chunks/framework.mXyjc2tg.js";const _={},f={class:"demo-label-container"};function h(r,i){const e=n("K8sLabel");return o(),s("div",f,[a(e,{labelKey:"app",labelValue:"nginx"}),a(e,{labelKey:"env",labelValue:"production"}),a(e,{labelKey:"tier",labelValue:"frontend"})])}const m=b(_,[["render",h],["__scopeId","data-v-7b7c37a2"]]),x=`<template>
  <div class="demo-label-container">
    <K8sLabel labelKey="app" labelValue="nginx" />
    <K8sLabel labelKey="env" labelValue="production" />
    <K8sLabel labelKey="tier" labelValue="frontend" />
  </div>
</template>

<style scoped>
.demo-label-container {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
`,v=JSON.parse('{"title":"Label","description":"","frontmatter":{},"headers":[],"relativePath":"components/label.md","filePath":"components/label.md"}'),y={name:"components/label.md"},V=Object.assign(y,{setup(r){return(i,e)=>{const d=n("vp-demo");return o(),s("div",null,[e[0]||(e[0]=t("h1",{id:"label",tabindex:"-1"},[l("Label "),t("a",{class:"header-anchor",href:"#label","aria-label":'Permalink to "Label"'},"​")],-1)),e[1]||(e[1]=t("p",null,"key-value pair label component.",-1)),e[2]||(e[2]=t("h2",{id:"basic-usage",tabindex:"-1"},[l("Basic Usage "),t("a",{class:"header-anchor",href:"#basic-usage","aria-label":'Permalink to "Basic Usage"'},"​")],-1)),a(d,{source:u(x)},{default:p(()=>[a(m)]),_:1},8,["source"]),e[3]||(e[3]=c('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">labelKey</td><td style="text-align:left;">The key part of the label</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">labelValue</td><td style="text-align:left;">The value part of the label</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td></tr></tbody></table>',3))])}}});export{v as __pageData,V as default};
