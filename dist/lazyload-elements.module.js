import e from"intersection-observer-polyfill";window.addEventListener("load",function(){function r(r,o,n){var t=o,i=document.querySelectorAll(r+"."+o),a={rootMargin:"0px",threshold:1},c=new e(function(e,r){e.forEach(function(e){if(e.isIntersecting){var o=e.target;o[n]=o.dataset.src,o.classList.remove(t),r.unobserve(o)}})});i.forEach(function(e){c.observe(e,a)})}r("iframe","lazy-iframe","src"),r("a","lazy-href","href")});
//# sourceMappingURL=lazyload-elements.module.js.map
