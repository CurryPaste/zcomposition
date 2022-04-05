import{x as m,z as E,y as b,_ as h,d as f,k as r,r as D,m as C,o as v,a as _,b as n,e as g,t as d,u as o,F as y,i as u,l as k}from"./app.35792cb8.js";import"./mitt.61a19a52.js";import{i as B}from"./is.61f893d9.js";import"./index.0dcdc637.js";import"./lodash.b58bec76.js";const A=t=>t!==void 0,l=(t,s)=>{const a=t();s&&s.length>0&&m([...E(s)],()=>{t()},{deep:!0}),A(a)&&b(a)},x=n("h1",{id:"useeffect-\u65E0\u526F\u4F5C\u7528\u7684\u6267\u884C\u67D0\u4E2A\u51FD\u6570",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#useeffect-\u65E0\u526F\u4F5C\u7528\u7684\u6267\u884C\u67D0\u4E2A\u51FD\u6570","aria-hidden":"true"},"#"),u(" useEffect \u65E0\u526F\u4F5C\u7528\u7684\u6267\u884C\u67D0\u4E2A\u51FD\u6570")],-1),w=u("\u53C2\u8003\u4E86React\u7684"),I={href:"https://zh-hans.reactjs.org/docs/hooks-effect.html",target:"_blank",rel:"noopener noreferrer"},V=u("useEffect"),U=u("\u65B9\u6CD5"),N=k('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u539F\u7248React\u7684useEffect\u6709\u4E24\u4E2A\u5173\u952E\u70B9</p><ul><li>\u53EF\u4EE5\u9009\u62E9\u6027\u7684\u6267\u884C\u4E00\u4E2A\u65E0\u526F\u4F5C\u7528\u7684\u51FD\u6570 <ul><li>\u5982\u679C\u4E0D <code>return</code> \u5219\u8868\u793A\u4E0D\u9700\u8981\u6E05\u9664\u526F\u4F5C\u7528</li></ul></li><li>\u8C03\u7528\u51FD\u6570\u7684\u673A\u5236 <ul><li>\u521D\u59CB\u8C03\u7528</li><li>\u5F53\u4F9D\u8D56\u9879\u7684\u503C\u53D1\u751F\u4E86\u53D8\u5316\u65F6\uFF0C\u4E5F\u53BB\u89E6\u53D1\u5BF9\u5E94\u7684\u51FD\u6570</li></ul></li></ul></div><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a> \u4EE3\u7801\u6F14\u793A</h2>',2),R=n("div",null,"\u666E\u901A\u8C03\u7528\u2B07\uFE0F",-1),z=n("p",null,null,-1),L=n("div",null,"\u9700\u8981\u76D1\u542C\u53D8\u91CF\u2B07\uFE0F\uFF08\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u51FD\u6570\u6267\u884C\uFF09",-1),S=u("ref:"),T=["value"],j=n("p",null,null,-1),O=u("reactive:"),P=["value"],q=k(`<h3 id="\u793A\u4F8B\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u4EE3\u7801" aria-hidden="true">#</a> \u793A\u4F8B\u4EE3\u7801</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u9700\u8981\u5904\u7406\u526F\u6548\u5E94</span>
<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> i <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token comment">// console.log(&#39;this is interval, when Unmounted I\`m destroy&#39;);</span>
        data<span class="token punctuation">.</span>need <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">clearInterval</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u4E0D\u9700\u8981\u5904\u7406\u526F\u6548\u5E94</span>
<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> ii <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;I\`m interavl, but always&#39;</span><span class="token punctuation">)</span>
        data<span class="token punctuation">.</span>dont <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u9700\u8981\u76D1\u542C\u53D8\u91CF\u5E76\u91CD\u65B0\u6267\u884C\u51FD\u6570</span>
<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u9700\u8981\u76D1\u542C\u53D8\u91CF\u5E76\u91CD\u65B0\u6267\u884C\u51FD\u6570&#39;</span><span class="token punctuation">,</span> refData<span class="token punctuation">.</span>value<span class="token punctuation">,</span> reactiveData<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>refData<span class="token punctuation">,</span> reactiveData<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="interface" tabindex="-1"><a class="header-anchor" href="#interface" aria-hidden="true">#</a> Interface</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">UseEffectVoid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// \u4E0D\u9700\u8981\u5904\u7406\u526F\u6548\u5E94</span>
<span class="token keyword">type</span> <span class="token class-name">UseEffectFunVoid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// \u9700\u8981\u5904\u7406\u526F\u6548\u5E94</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="option" tabindex="-1"><a class="header-anchor" href="#option" aria-hidden="true">#</a> Option</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>method</td><td>\u9700\u8981\u6267\u884C\u7684\u51FD\u6570(\u5982\u679C\u9700\u8981\u6E05\u9664\u526F\u6548\u5E94\uFF0C\u5219\u5728\u8981\u6267\u884C\u7684\u51FD\u6570\u4E2Dreturn\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u5728\u51FD\u6570\u4E2D\u6E05\u9664\u526F\u6548\u5E94)</td><td>UseEffectVoid / UseEffectFunVoid</td><td>-</td></tr><tr><td>needWatch</td><td>\u9700\u8981\u76D1\u542C\u53D8\u5316\u7684\u53D8\u91CF\u6570\u7EC4\uFF0C\u53D1\u751F\u53D8\u5316\u65F6\u51FA\u53D1method\u51FD\u6570</td><td>ref\u6216reactive\u5305\u88F9\u53D8\u91CF\u7684Array</td><td>-</td></tr></tbody></table>`,6),G=f({setup(t){const s=r({need:1,dont:1}),a=D(1),e=r({a:1});return B&&(l(()=>{const i=setInterval(()=>{console.log("this is interval, when Unmounted I`m destroy"),s.need+=1},2e3);return()=>{clearInterval(i)}}),l(()=>{setInterval(()=>{console.log("I`m interavl, but always"),s.dont+=1},2e3)}),l(()=>{console.log("\u9700\u8981\u76D1\u542C\u53D8\u91CF\u5E76\u91CD\u65B0\u6267\u884C\u51FD\u6570",a.value,e.a)},[a,e])),(i,p)=>{const F=C("ExternalLinkIcon");return v(),_(y,null,[x,n("p",null,[w,n("a",I,[V,g(F)]),U]),N,n("div",null,[n("div",null,[R,n("div",null,"show: "+d(o(s).need),1),n("div",null,"show: "+d(o(s).dont),1),z,L,n("div",null,[n("span",null,[S,n("input",{type:"number",value:a.value,onChange:p[0]||(p[0]=c=>{a.value=c.target.value})},null,40,T)]),j,n("span",null,[O,n("input",{type:"number",value:o(e).a,onChange:p[1]||(p[1]=c=>{o(e).a=c.target.value})},null,40,P)])])])]),q],64)}}});var X=h(G,[["__file","index.html.vue"]]);export{X as default};
