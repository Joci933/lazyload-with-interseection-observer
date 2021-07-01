import e from"intersection-observer-polyfill";module.exports=function(o,r,t){const s=r,n=document.querySelectorAll(`${o}.${r}`),c={rootMargin:"0px",threshold:1},i=new e((e,o)=>{e.forEach(e=>{if(e.isIntersecting){const{target:r}=e;r[t]=r.dataset.src,r.classList.remove(s),o.unobserve(r)}})});n.forEach(e=>{i.observe(e,c)})};
//# sourceMappingURL=lazyload-elements.modern.js.map
