// import index from './index'

// let boxEl = document.querySelector('.box');


// console.log(boxEl);

//  boxEl.addEventListener('click', function(){
//     console.log('click');
// });

// boxEl.classList.add('active');
// let isContains = boxEl.classList.contains('active');
// console.log(isContains)

// boxEl.classList.remove('active');
//  isContains = boxEl.classList.contains('active');
// console.log(isContains)

// const boxEls = document.querySelectorAll('.box');
// console.log(boxEls);

//찾은 요소들 반복해서 함수 실행
//익명 함수를 인수로 추가
//boxEls.forEach(function(){});

//첫번째 매개변수(boxEl) : 반복중인 요소.
//두번째 매개변수(index) : 반복 중인 번호
//boxEls.forEach(function(boxEl,index){});
//
//출력 
// boxEls.forEach(function(boxEl,index){
//     //boxEl.classList.add(`order-${index + 1}`);
//     console.log(index, boxEl);
// })


// const  boxEl = document.querySelector('.box');

// console.log(boxEl.textContent);
// boxEl.textContent = 'jaeehee!'
// console.log(boxEl.textContent);

const a = 'Hello~!'
const b = a.split('').reverse().join('');
console.log(a);
console.log(b);
