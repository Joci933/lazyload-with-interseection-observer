# Lazyload Elements

The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

Historically, detecting visibility of an element, or the relative visibility of two elements in relation to each other, has been a difficult task for which solutions have been unreliable and prone to causing the browser and the sites the user is accessing to become sluggish

## Usage
`import lazyLoadElements from 'lazyload-elements'`

### For iframe
`<iframe loading="lazy" class="lazy-iframe" width="100%" height="425" src="" data-src="https://www.youtube.com/embed/ScMzIvxBSi4?rel=0?version=3&enablejsapi=1" frameborder="0" allowfullscreen></iframe>`

`lazyLoadElements("iframe", "lazy-iframe", "src");`


### For images
`<img class="lazy-img" data-src="https://i.picsum.photos/id/645/200/300.jpg?hmac=fiKW3Nj8r0CWJQY3S-kkeT8PAfvKhA8igd9GIRk41Yw" src="" alt="Lorem">`

`lazyLoadElements("img", "lazy-img", "src");`

---

## Dependency

[IntersectionObserver Polyfill](https://www.npmjs.com/package/intersection-observer-polyfill#installation)
