import{r as l,B as k,H as d,x as b,_ as m,d as g,o as h,a as f,b as n,t as v,u as F,F as y,i,l as _}from"./app.35792cb8.js";import"./mitt.61a19a52.js";import{g as w}from"./dom.bc97892b.js";import"./index.93223014.js";import"./lodash.b58bec76.js";function B(e){if(!e)return!1;const p=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,s=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,a=e.getBoundingClientRect();if(a){const{top:t,bottom:o,left:u,right:c}=a;return o>0&&t<=s&&u<=p&&c>0}return!1}function D(e,p=null){const s=l(!1);let a;return k(()=>{const t=w(e);if(!t)return;const o=B(t);s.value=o,a=new IntersectionObserver(u=>{const c=u.every(r=>r.isIntersecting);s.value=c}),a.observe(t),d(()=>{a.disconnect()})}),b(()=>s.value,()=>{p&&p(s.value)}),s}const E=n("h1",{id:"useinviewport",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#useinviewport","aria-hidden":"true"},"#"),i(" useInViewport")],-1),x=n("p",null,"\u76D1\u542C DOM \u5143\u7D20\u662F\u5426\u51FA\u73B0\u5728\u89C6\u56FE\u4E2D",-1),C=n("h2",{id:"\u4EE3\u7801\u6F14\u793A",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true"},"#"),i(" \u4EE3\u7801\u6F14\u793A")],-1),q={class:"targetWrapper"},R={class:"finalResultW"},A=n("span",null,"finalResult:",-1),I={class:"testBlock"},W=_(`<h3 id="\u57FA\u7840\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u7840\u4F7F\u7528</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>targetWrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>targetDom<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>targetDomS<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>finalResultW<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>finalResult:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>testBlock<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>{{finalResult}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span>watch<span class="token punctuation">,</span>onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useInViewport <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;zcomposition&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> targetDom <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">changeFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FDB\u5165&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u79BB\u5F00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> finalResult <span class="token operator">=</span> <span class="token function">useInViewport</span><span class="token punctuation">(</span>targetDom<span class="token punctuation">,</span> changeFunc<span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.targetWrapper</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token selector">.targetDomS</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span> 
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span> 
        <span class="token property">background</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.finalResultW</span><span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>    
<span class="token punctuation">}</span>
<span class="token selector">.finalResultW span</span><span class="token punctuation">{</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span>60px<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span>30px<span class="token punctuation">;</span>    
<span class="token punctuation">}</span>
<span class="token selector">.testBlock</span><span class="token punctuation">{</span>      
        <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h2 id="useinviewport-option" tabindex="-1"><a class="header-anchor" href="#useinviewport-option" aria-hidden="true">#</a> useInViewport OPTION</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>target</td><td>\u76EE\u6807\u5BF9\u8C61</td><td><code>Ref&lt;HTMLElement | null&gt;</code></td><td>-</td></tr><tr><td>callback</td><td>\u76EE\u6807\u51FD\u6570\u8FDB\u5165\u6216\u79BB\u5F00\u89C6\u56FE\u7684\u56DE\u8C03\u51FD\u6570</td><td><code>function(value)</code></td><td>\u2014\u2014</td></tr></tbody></table><h2 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>finalResult</td><td>\u8FD4\u56DE\u503C\uFF0C\u662F\u5426\u51FA\u73B0\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u89C6\u7A97</td><td>boolean</td><td>false</td></tr></tbody></table>`,6),V=g({setup(e){const p=l(null),a=D(p,t=>{console.log(t?"\u8FDB\u5165":"\u79BB\u5F00")});return(t,o)=>(h(),f(y,null,[E,x,C,n("div",q,[n("div",{ref_key:"targetDom",ref:p,class:"targetDomS"},null,512),n("div",R,[A,n("span",I,v(F(a)),1)])]),W],64))}});var P=m(V,[["__file","index.html.vue"]]);export{P as default};
