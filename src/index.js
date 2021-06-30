import IntersectionObserver from "intersection-observer-polyfill";

function lazyLoadElements(target, targetClassName, attribute) {
  const lazyLoadClass = targetClassName;
  const lazyImages = document.querySelectorAll(`${target}.${targetClassName}`);

  const options = {
    rootMargin: "0px",
    threshold: 1,
  };

  const imageObserver = new IntersectionObserver((entries, options) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const { target } = entry;
        target[attribute] = target.dataset.src;
        target.classList.remove(lazyLoadClass);
        options.unobserve(target);
      }
    });
  });

  lazyImages.forEach((image) => {
    imageObserver.observe(image, options);
  });
}

module.exports = lazyLoadElements;
