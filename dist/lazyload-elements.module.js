import e from"intersection-observer-polyfill";module.exports=function(o,r,t){var n=r,i=document.querySelectorAll(o+"."+r),s={rootMargin:"0px",threshold:1},c=new e(function(e,o){e.forEach(function(e){if(e.isIntersecting){var r=e.target;r[t]=r.dataset.src,r.classList.remove(n),o.unobserve(r)}})});i.forEach(function(e){c.observe(e,s)})};
//# sourceMappingURL=lazyload-elements.module.js.map
