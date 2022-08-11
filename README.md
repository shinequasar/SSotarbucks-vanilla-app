## ☕ 쏘타벅스를 지어보자!
- vanilla html, css, js 로 개발하는 쏘타벅스
- 개인연습용 플젝
- 배포환경 : Netlify 
- 배포 URL :  [https://silver-marigold-a6b265.netlify.app/](https://silver-marigold-a6b265.netlify.app/)

</br>
---
 </br></br>

### 프로젝트 구조 (개발 중)

```
starbucks
├─ css
│  └─ main.css
├─ favicon.ico
├─ favicon.png
├─ images
│  └─ images
├─ index.html
└─ js
   └─ main.js
   └─ youtube.js

```
</br></br>

---

</br></br>
## ☕ 쏘타벅스에서 사용한 API
### 1) Youtube ifram api
(https://developers.google.com/youtube/iframe_api_reference?hl=ko)


</br></br>
## ☕ 쏘타벅스에서 사용한 라이브러리 및 CDN

### 1) reset-css 
(https://www.jsdelivr.com/package/npm/reset-css)
- 각 브라우저의 기본스타일 초기화

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">
```
</br>

### 2) lodash.js
(https://swiperjs.com/get-started)
- 다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
</br>

### 3) grap
(https://cdnjs.com/libraries/gsap)
- GSAP(The GreenSock Animation Platform): 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js" integrity="sha512-VEBjfxWUOyzl0bAwh4gdLEaQyDYPvLrZql3pw1ifgb6fhEvZl9iDDehwHZ+dsMzA0Jfww8Xt7COSZuJ/slxc4Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollToPlugin.min.js" integrity="sha512-lZACdYsy0W98dOcn+QRNHDxFuhm62lfs8qK5+wPp7X358CN3f+ml49HpnwzTiXFzETs4++fADePDI+L2zwlm7Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
</br>

### 4) Swiper 8
(https://swiperjs.com/get-started)
- Swiper : 하드웨어 가속 전환과 여러 기본 동작을 갖춘 현대적인 슬라이드 라이브러리

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
/>

<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
```

- swiper 기본 사용레이아웃
```html
<!-- Slider main container -->
<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    ...
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
```
</br>


### 5) ScrollMagic 
(https://cdnjs.com/libraries/ScrollMagic)
(http://scrollmagic.io/)
- 스크롤에 의해 동적인 움직임을 주는 스크롤 인터렉션을 구현하는 라이브러리
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
</br>

### 6) Google Material Icons
- 구글에서 제공하는 머터리얼 아이콘
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```
📌 using
```html
<div class="material-icons">upload</div>
```
</br>

### 7) Google Fonts
- Google Fonts에서 제공하는 글꼴 중 나눔고딕 사용.
```
  font-family: 'Nanum Gothic', sans-serif;
```
