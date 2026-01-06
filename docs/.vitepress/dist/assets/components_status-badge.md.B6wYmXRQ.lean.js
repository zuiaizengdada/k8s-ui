import{d as u,C as l,c as r,o as d,G as a,_ as g,j as s,a_ as c,a as n,w as p,k as h}from"./chunks/framework.mXyjc2tg.js";const f={class:"demo-badge-container"},m=u({__name:"Basic",setup(o){return(i,t)=>{const e=l("K8sStatusBadge");return d(),r("div",f,[a(e,{status:"Running"}),a(e,{status:"Pending"}),a(e,{status:"Error"}),a(e,{status:"CrashLoopBackOff"}),a(e,{status:"Unknown"})])}}}),_=g(m,[["__scopeId","data-v-864a5b53"]]),b=`<script setup lang="ts">
// Note: In real usage, you simply use <K8sStatusBadge />
// This demo shows various statuses.
<\/script>

<template>
  <div class="demo-badge-container">
    <K8sStatusBadge status="Running" />
    <K8sStatusBadge status="Pending" />
    <K8sStatusBadge status="Error" />
    <K8sStatusBadge status="CrashLoopBackOff" />
    <K8sStatusBadge status="Unknown" />
  </div>
</template>

<style scoped>
.demo-badge-container {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
`,B=JSON.parse('{"title":"Status Badge","description":"","frontmatter":{},"headers":[],"relativePath":"components/status-badge.md","filePath":"components/status-badge.md"}'),x={name:"components/status-badge.md"},S=Object.assign(x,{setup(o){return(i,t)=>{const e=l("vp-demo");return d(),r("div",null,[t[0]||(t[0]=s("h1",{id:"status-badge",tabindex:"-1"},[n("Status Badge "),s("a",{class:"header-anchor",href:"#status-badge","aria-label":'Permalink to "Status Badge"'},"​")],-1)),t[1]||(t[1]=s("p",null,"Display the status of Kubernetes resources.",-1)),t[2]||(t[2]=s("h2",{id:"basic-usage",tabindex:"-1"},[n("Basic Usage "),s("a",{class:"header-anchor",href:"#basic-usage","aria-label":'Permalink to "Basic Usage"'},"​")],-1)),a(e,{source:h(b)},{default:p(()=>[a(_)]),_:1},8,["source"]),t[3]||(t[3]=c("",6))])}}});export{B as __pageData,S as default};
