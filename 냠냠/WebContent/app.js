const $loginBtn = $('#loginBtn');
const $registerBtn = $('#registerBtn');
const $loginPage = $('.login');
const $form = $('.form');

//  로그인창 클릭 시 나타남
$loginBtn.on('click', () => {
  toggleHidden($loginPage);
  showLoginForm();
});

// Register 버튼 클릭 시 나타남
$registerBtn.on('click', () => {
  toggleHidden($loginPage);
  showRegisterForm();
});

//  로그인 / 회원가입 창 전환
$('.message a').click(function () {
  $('form').animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
});

// 로그인 창 block 상태에서 다른 영역 클릭 시 숨김처리
$(document).on('click', (e) => {
  if (
    !$form.is(e.target) &&
    $form.has(e.target).length === 0 &&
    !$form.hasClass('hidden') &&
    !$loginBtn.is(e.target) &&
    !$registerBtn.is(e.target)
  ) {
    $loginPage.addClass('hidden');
  }
});

/* 로그인 창 스크롤 반응 */
$(window).scroll(() => {
  const position = $(window).scrollTop();
  if (!$loginPage.hasClass('hidden')) {
    $form.stop().animate(
      {
        top: position + 200 + 'px',
      },
      550
    );
  }
});

//  메인 페이지 메뉴창
$(document).ready(function () {
  $('.menu-button').click(function () {
    $('.menu-bar').toggleClass('open');
  });
});

//  보조 함수
function toggleHidden(page) {
  page.removeClass('hidden');
}

function showLoginForm() {
  $('.login-form').show(500);
  $('.register-form').hide(500);
}

function showRegisterForm() {
  $('.register-form').show(500);
  $('.login-form').hide(500);
}

//  마이페이지 리스트 분류 처리
$(document).ready(function () {
  $('.data-item').click(function () {
    const index = $(this).index('.data-item');

    $('.item-details').css('display', 'block');

    $('.item-details .item').hide();
    $('.item-details .item').eq(index).show();
  });
});
