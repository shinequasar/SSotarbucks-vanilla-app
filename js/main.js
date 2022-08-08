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


const badgeEl = document.querySelector('header .badges');

//lodash 라이브러리를 이용 => _.throttle(실행할 함수, 시간제한)
window.addEventListener('scroll', _.throttle(function () { 
   console.log(window.scrollY);
   if(window.scrollY > 500) {
      badgeEl.style.display = 'none';
   }else{
      badgeEl.style.display = 'block';
   }
},300));