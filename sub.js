//장바구니 버튼 누르면 모달 켜지게 하기
const shoppingBag = document.getElementById('shopping_bag');
const modal = document.getElementById('modal_all');
const body = document.querySelector('body');
const shoppingContinue = document.getElementById('continue_shopping');

shoppingBag.addEventListener('click',()=>{
  modal.style.display='block';
});

//모달 x 버튼 누르면 모달 꺼지게 하기
//계속 쇼핑하기 누르면 모달 꺼지게 하기
const closeModal = document.getElementById('close_icon_modal');
closeModal.addEventListener('click',()=>{
  modal.style.display='none';
})
shoppingContinue.addEventListener('click',()=>{
  modal.style.display='none';
})


//찜 버튼
const heart = document.querySelector('#heart_heart');
const circle = document.querySelector('#heart_click');
circle.onclick = function () {
    heart.classList.toggle('fill_color');
}

//tooltip
const tooltip = document.getElementById('tooltip');
const textTooltip = document.getElementById('text_with_tooltip');
textTooltip.addEventListener('mouseover',showTooltip);
textTooltip.addEventListener('mouseout',hideTooltip);


function showTooltip() {
    tooltip.style.display = 'block';
}
function hideTooltip() {
    tooltip.style.display = 'none';
}


//quantity 박스 수량 & 가격 변경
const quanMinus = document.getElementById('quantity_minus');
const quanPlus = document.getElementById('quantity_plus');
let quanCurrent = document.getElementById('quantity_current');
let price = document.querySelector('.price');
let num = 1;
let priceCurrent = 0;

quanMinus.addEventListener('click', quanCount);
quanPlus.addEventListener('click', quanCount);

function quanCount(event){
  if(num>1&&quanMinus===event.target){
    num--;
    priceCurrent = num*29000;
    
  }else if(num<30&&quanPlus===event.target){
    num++;
    priceCurrent = num*29000;
  }  
    priceCurrent = priceCurrent.toLocaleString()
   price.innerText = priceCurrent;
  quanCurrent.innerText = num;
}

//x누르면 quantity박스 사라지며, 값 초기화
const quantityBox = document.getElementById('article_option_quantity');
const closeIcon = document.getElementById('close_icon');
closeIcon.onclick = function(){
    quantityBox.style.display = 'none';
    price.innerText = 0;
    num=1;
    quanCurrent.innerText=num;
    white.checked=false;
    pink.checked=false;
    red.checked=false;
}

//색상 선택시 quantity박스 등장
//색상 선택시 quantity박스 색상 변경
const white = document.getElementById('color_white');
const red = document.getElementById('color_red');
const pink = document.getElementById('color_pink');
const colorSelect = document.getElementById('color_select');

white.addEventListener('click', function() {
  if (white.checked) {
    colorSelect.innerText = '하양색';
    quantityBox.style.display = 'block';
  }
});
red.addEventListener('click', function() {
  if (red.checked) {
    colorSelect.innerText = '빨강색';
    quantityBox.style.display = 'block';
  }
});
pink.addEventListener('click', function() {
  if (pink.checked) {
    colorSelect.innerText = '분홍색';
    quantityBox.style.display = 'block';
  }
});




//요소 등장하면 nav 색상 변경

const product = document.getElementById('article_middle_all');
const productNav = document.getElementById('nav_product'); 
const reviewNav = document.getElementById('nav_review');
const review = document.getElementById('review');
const qandaNav = document.getElementById('nav_qanda');
const qanda = document.getElementById('QandA');
const bottomAllNav = document.getElementById('nav_delivery');
const bottomAll = document.getElementById('bottom_all');

document.addEventListener('scroll', ()=>{navCheck(product, productNav);});
document.addEventListener('scroll', ()=>{navCheck(review, reviewNav);});
document.addEventListener('scroll', ()=>{navCheck(qanda, qandaNav);});
document.addEventListener('scroll', ()=>{navCheck(bottomAll, bottomAllNav);});

function navCheck(element, elementNav){
  if(window.innerHeight>element.getBoundingClientRect().top+window.innerHeight-176&&
  element.getBoundingClientRect().bottom-176>0){
    elementNav.classList.add('navigation_line');
  }else{
    elementNav.classList.remove('navigation_line');
  }
}

//button 누를때 알맞는 색상의 꽃 보여주기
const whiteButton = document.getElementById('white_button');
const redButton = document.getElementById('red_button');
const pinkButton = document.getElementById('pink_button');

whiteButton.addEventListener('click', showDiv);
redButton.addEventListener('click', showDiv);
pinkButton.addEventListener('click', showDiv);

const whitePic = document.getElementById('middle_pic_white');
const redPic = document.getElementById('middle_pic_red');
const pinkPic = document.getElementById('middle_pic_pink');
const colorButton = document.querySelectorAll(".select_color_button");

function showDiv(event) {
    if (whiteButton == event.target) {
        whitePic.style.display = 'block';
        redPic.style.display = 'none';
        pinkPic.style.display = 'none';
    } else if (redButton === event.target) {
        whitePic.style.display = 'none';
        redPic.style.display = 'block';
        pinkPic.style.display = 'none';
    } else if (pinkButton === event.target) {
        whitePic.style.display = 'none';
        redPic.style.display = 'none';
        pinkPic.style.display = 'block';
    }
}

const colorButtons = document.querySelectorAll('.select_color_button');

colorButtons.forEach(function (colorButton) {
    colorButton.addEventListener("click", function () {
        colorButtons.forEach(function (buttons) {
            buttons.classList.remove('button_active');
        });
        colorButton.classList.add('button_active');
    });
});


//추천식물 버튼 누를때마다 사진 바뀌기

const prevButton = document.getElementById('recommend_left');
const nextButton = document.getElementById('recommend_right');
const items = document.getElementById('recommend_align');

let boxLeft = 0;
let currentIndex = 0;

prevButton.addEventListener('click', prev);
nextButton.addEventListener('click', next);

function next() {
    if (currentIndex >= 0 && currentIndex < 4) {
        boxLeft -= 255;
        items.style.left = boxLeft + 'px';
        currentIndex++;
    }
}

function prev() {
    if (currentIndex > 0 && currentIndex <= 4) {
        boxLeft += 255;
        items.style.left = boxLeft + 'px';
        currentIndex--;
    }
}


//Q&A누를때마다 표 보이기
const questionTitles = document.querySelectorAll('.question_customer_title');
const questionDetails = document.querySelectorAll('.question_customer_detail');
const answerTitles = document.querySelectorAll('.question_answer');
const answerDetails = document.querySelectorAll('.question_answer_detail');


questionTitles.forEach(function(questionTitle, index) {
  questionTitle.addEventListener('click', function() {
    questionDetails[index].classList.toggle('showtable');
  });
});

answerTitles.forEach(function(answerTitle, index) {
  answerTitle.addEventListener('click', function() {
    answerDetails[index].classList.toggle('showtable');
  });
});