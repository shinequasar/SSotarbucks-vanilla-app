//-------검색창-------//
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 돋보기모양이 속한 search영역 아무곳이나 누르면 focus됨
searchEl.addEventListener('click', function () { 
   searchInputEl.focus();
});

//focus 되었을 때
searchInputEl.addEventListener('focus', function (){
   searchEl.classList.add('focused');
   searchInputEl.setAttribute('placeholder', '통합검색');
});

//focus 해제(blur) 되었을 때
searchInputEl.addEventListener('blur', function (){
   searchEl.classList.remove('focused');
   searchInputEl.setAttribute('placeholder', '');
});



//-------뱃지-------//
const badgeEl = document.querySelector('header .badges');

//lodash 라이브러리를 이용 => _.throttle(실행할 함수, 시간제한)
window.addEventListener('scroll', _.throttle(function () { 
   console.log(window.scrollY);
   if(window.scrollY > 500) {
      gsap.to(badgeEl, .6, {  //배지 숨기기 => 애니메이션 라이브러리사용 => gsap.to(요소, 지속시간, 옵션);
         opacity:0,
         display: 'none'
      });
   }else{
      gsap.to(badgeEl, .6, { //배지 보이기
         opacity:1,
         display: 'block'
      });
   }
},300));


//-------section 애니메이션-------//
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl,index){
   gsap.to(fadeEl, 1,{
      delay: (index+1) * .7,  //n번째 * 0.7초 뒤 해당 함수 실행
      opacity:1
   });
});


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
   direction: 'vertical',
   autoplay : true,
   loop: true
});
new Swiper('.promotion .swiper',{
   slidesPerView:3, //한번에 보여줄 슬라이드 개수
   spaceBetween: 10, // 슬라이드 사이 여백
   centeredSlides: true, // 1번 슬라이드가 가운데 보이기
   loop: true ,
   autoplay:{
      delay:4000 //4초
   },
   pagination:{
      el: '.promotion .swiper-pagination', //페이지 번호요소 선택자
      clickable:true,
      navigation:{
         prevEl:'.promotion .swiper-prev',
         nextEl:'.promotion .swiper-next'
      }
   }
});
new Swiper('.awards .swiper',{
   autoplay: true,
   loop:true,
   spaceBetween: 30,
   slidesPerView: 5,
   navigation:{
      prevEl:'.awards .swiper-prev',
      nextEl:'.awards .swiper-next'
   }
});



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function () {
   isHidePromotion = !isHidePromotion; //반대값 반환
   if(isHidePromotion){
      //숨김처리
      promotionEl.classList.add('hide');
   }else{
      //보이기
      promotionEl.classList.remove('hide');
   }
});

function random(min, max){
   return parseFloat((Math.random() * (max-min)+min).toFixed(2)) 
}

function floatingObject(selector,delay, size){
   // gsap.to(요소, 시간, 옵션)
   gsap.to(selector,random(1.5,2.5),{
      y: size,
      repeat: -1,
      yoyo:true, //에니메이션 역재생
      esse: Power1.easeInOut,
      delay: random(0,delay)
   });
}
floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,15);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl){
   new ScrollMagic
      .Scene({
         triggerElement:spyEl, //보여짐 여부를 감시할 요소를 지정
         triggerHook: .8
      })
      .setClassToggle(spyEl, 'show')
      .addTo(new ScrollMagic.Controller());
});