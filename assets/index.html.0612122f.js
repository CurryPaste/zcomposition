import{r,y as d,_ as k,d as h,o as b,a as g,b as c,t as m,u as e,F as f,l as i}from"./app.35792cb8.js";import"./mitt.61a19a52.js";import{d as F,i as v}from"./debounce.673b8ee7.js";import"./index.93223014.js";import"./lodash.b58bec76.js";var E=F,C=v,B="Expected a function";function D(t,n,s){var a=!0,u=!0;if(typeof t!="function")throw new TypeError(B);return C(s)&&(a="leading"in s?!!s.leading:a,u="trailing"in s?!!s.trailing:u),E(t,n,{leading:a,maxWait:n,trailing:u})}var y=D;function A(t,n){if(!t&&typeof t!="function")return{run:()=>{},cancel:()=>{},flush:()=>{}};const s=r(null);s.value=t;const a=y(s.value,n!=null&&n.wait?n==null?void 0:n.wait:1e3,n);return d(()=>{a.cancel()}),{run:a,cancel:a.cancel,flush:a.flush}}const x=i('<h1 id="usethrottlefn" tabindex="-1"><a class="header-anchor" href="#usethrottlefn" aria-hidden="true">#</a> useThrottleFn</h1><p>\u8282\u6D41</p><h3 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a> \u4EE3\u7801\u6F14\u793A</h3><h2 id="\u57FA\u7840\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u7840\u4F7F\u7528</h2>',4),_=i(`<h2 id="\u793A\u4F8B\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u4EE3\u7801" aria-hidden="true">#</a> \u793A\u4F8B\u4EE3\u7801</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useThrottleFn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;zcomposition&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    count<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>run<span class="token punctuation">,</span> cancel<span class="token punctuation">,</span> flush<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useThrottleFn</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">wait</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span><span class="token literal-property property">leading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token literal-property property">trailing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        count:{{count}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>run<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\u70B9\u51FB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>flush<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\u7ACB\u5373\u6267\u884C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>cancel<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\u53D6\u6D88<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>fn</td><td>\u76EE\u6807\u51FD\u6570</td><td><code>() =&gt; viod</code></td><td>-</td></tr><tr><td>options</td><td>\u9009\u9879</td><td><code>Function</code></td><td>-</td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>wait</td><td>\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2</td><td><code>number</code></td><td>1000</td></tr><tr><td>leading</td><td>\u662F\u5426\u5728\u4E0A\u5347\u6CBF\u89E6\u53D1\u526F\u4F5C\u7528\u51FD\u6570</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>trailing</td><td>\u662F\u5426\u5728\u4E0B\u964D\u6CBF\u89E6\u53D1\u526F\u4F5C\u7528\u51FD\u6570</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h2 id="result" tabindex="-1"><a class="header-anchor" href="#result" aria-hidden="true">#</a> Result</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>run</td><td>\u89E6\u53D1\u6267\u884C fn\uFF0C\u51FD\u6570\u53C2\u6570\u5C06\u4F1A\u4F20\u9012\u7ED9 fn</td><td><code>()=&gt; viod)</code></td><td>-</td></tr><tr><td>cancel</td><td>\u53D6\u6D88\u5F53\u524D\u9632\u6296</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>flush</td><td>\u5F53\u524D\u9632\u6296\u7ACB\u5373\u8C03\u7528</td><td><code>() =&gt; void</code></td><td>-</td></tr></tbody></table>`,8),w=h({setup(t){const n=r(0),s=()=>{n.value++},{run:a,cancel:u,flush:l}=A(s,{wait:1e3,leading:!1,trailing:!0});return(q,p)=>(b(),g(f,null,[x,c("div",null,[c("div",null," count:"+m(n.value),1),c("button",{onClick:p[0]||(p[0]=(...o)=>e(a)&&e(a)(...o))},"\u70B9\u51FB"),c("button",{onClick:p[1]||(p[1]=(...o)=>e(l)&&e(l)(...o))},"\u7ACB\u5373\u6267\u884C"),c("button",{onClick:p[2]||(p[2]=(...o)=>e(u)&&e(u)(...o))},"\u53D6\u6D88")]),_],64))}});var S=k(w,[["__file","index.html.vue"]]);export{S as default};
