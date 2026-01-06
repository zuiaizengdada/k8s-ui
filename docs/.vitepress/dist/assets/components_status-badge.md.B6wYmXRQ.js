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
`,B=JSON.parse('{"title":"Status Badge","description":"","frontmatter":{},"headers":[],"relativePath":"components/status-badge.md","filePath":"components/status-badge.md"}'),x={name:"components/status-badge.md"},S=Object.assign(x,{setup(o){return(i,t)=>{const e=l("vp-demo");return d(),r("div",null,[t[0]||(t[0]=s("h1",{id:"status-badge",tabindex:"-1"},[n("Status Badge "),s("a",{class:"header-anchor",href:"#status-badge","aria-label":'Permalink to "Status Badge"'},"​")],-1)),t[1]||(t[1]=s("p",null,"Display the status of Kubernetes resources.",-1)),t[2]||(t[2]=s("h2",{id:"basic-usage",tabindex:"-1"},[n("Basic Usage "),s("a",{class:"header-anchor",href:"#basic-usage","aria-label":'Permalink to "Basic Usage"'},"​")],-1)),a(e,{source:h(b)},{default:p(()=>[a(_)]),_:1},8,["source"]),t[3]||(t[3]=c('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">status</td><td style="text-align:left;">The status string (e.g. Running, Pending)</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td></tr></tbody></table><h3 id="status-mapping" tabindex="-1">Status Mapping <a class="header-anchor" href="#status-mapping" aria-label="Permalink to &quot;Status Mapping&quot;">​</a></h3><p>The component automatically maps standard K8s statuses to colors:</p><table tabindex="0"><thead><tr><th style="text-align:left;">Status</th><th style="text-align:left;">Color</th></tr></thead><tbody><tr><td style="text-align:left;">Running, Completed, Ready</td><td style="text-align:left;">Green (Success)</td></tr><tr><td style="text-align:left;">Error, Failed, CrashLoopBackOff</td><td style="text-align:left;">Red (Danger)</td></tr><tr><td style="text-align:left;">Pending, Terminating, ContainerCreating</td><td style="text-align:left;">Orange (Warning)</td></tr><tr><td style="text-align:left;">Others</td><td style="text-align:left;">Gray (Info)</td></tr></tbody></table>',6))])}}});export{B as __pageData,S as default};
