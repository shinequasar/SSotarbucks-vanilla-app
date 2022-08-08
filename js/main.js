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

window.addEventListener('scroll', function () {
   console.log('scroll!');
});