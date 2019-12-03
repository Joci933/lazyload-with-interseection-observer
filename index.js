import IntersectionObserver from 'intersection-observer-polyfill';

window.addEventListener("load", function () {

  const lazyLoadClass = 'lazy-load-image';
  const lazyImages = document.querySelectorAll(`img.${lazyLoadClass}`)

  const options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1
  }

  const imageObserver = new IntersectionObserver((entries, options) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const { target } = entry
        target.src = target.dataset.src
        target.classList.remove(lazyLoadClass);
        options.unobserve(target);
      }
    })
  });

  lazyImages.forEach(image => {
    imageObserver.observe(image, options);
  })
})