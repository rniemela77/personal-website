<template>
    <div class="app-background">
        <div class="grain-animation"></div>
        <div class="grain-layer grain-layer-1"></div>
        <div class="grain-layer grain-layer-2"></div>
        <div class="grain-layer grain-layer-3"></div>
    </div>
</template>

<style scoped>
.app-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: #1a1a1a;
    overflow: hidden;
}

.app-background::after {
  content: "";
  position: fixed;
  top: 0; 
  left: 0;
  width: 100vw; 
  height: 100vh;
  pointer-events: none;   /* Let clicks pass through */
  z-index: 9999;          /* Above all content */

  /* 1) Inline SVG filter generating fractal noise, sized to 200×200px so it tiles */
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>  <filter id='noise'>    <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1'/>  </filter>  <rect width='100%' height='100%' filter='url(%23noise)'/></svg>");

  background-repeat: repeat;
  background-position: 0 0;

  /* 2) Adjust opacity to control grain intensity */
  /* opacity: 0.05; */
  mix-blend-mode: multiply;
  animation: grain 1s steps(10) infinite;
}
</style>