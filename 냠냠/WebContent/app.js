const $loginBtn = $('#loginBtn');
const $registerBtn = $('#registerBtn');
const $loginPage = $('.login');
const $form = $('.form');
const $forgotPasswordForm = $('.forgot-password-form');

//  로그인창 클릭 시 나타남
$loginBtn.on('click', () => {
  toggleHidden($loginPage);
  showLoginForm();

  scrollToForm($loginPage);
});

// Register 버튼 클릭 시 나타남
$registerBtn.on('click', () => {
  toggleHidden($loginPage);
  showRegisterForm();

  scrollToForm($loginPage);
});

// 비밀번호 찾기 버튼 클릭 시 나타남
$('.forgot-password-link').on('click', () => {
  toggleHidden($loginPage);
  toggleHidden($forgotPasswordForm);
});

// 뒤로 가기(로그인 폼으로 돌아가기)
$('#backToLogin').on('click', () => {
  showLoginForm();
});

// 로그인 / 회원가입 창 전환
$('.message a').click(function () {

  if ($(this).hasClass('forgot-password-link')) {
    $forgotPasswordForm.show(500);

    $('.login-form').hide(500);
    $('.register-form').hide(500);

  } else {
    $('form').animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
    $forgotPasswordForm.hide();
  }
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
      500
    );
  }
});

//  회원가입 유효성검사
function validateForm() {
  // 이름
  const nameInput = $('#registerName');    //  이름 입력란
  const namePattern = /^[가-힣a-zA-Z]+$/; // 한글 또는 영문 이름 허용

  // 비밀번호
  const passwordInput = $('#registerPW');  //  비밀번호 입력란
  const passwordPattern = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*\d)(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*\d)(?=.*[a-z])(?=.*[^\w\d\s])).{7,30}$/;

  // 이메일
  const emailInput = $('#registerEmail');  //  이메일 입력란
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // 이름 유효성 검사
  if (!namePattern.test(nameInput.val())) {
    alert('올바른 이름을 입력하세요.');
    nameInput.val('');
    nameInput.focus();
    return false;
  }

  // 비밀번호 유효성 검사
  if (!passwordPattern.test(passwordInput.val())) {
    alert('비밀번호는 최소 7자 이상이어야 하며, 숫자, 소문자, 대문자, 특수 문자를 포함해야 합니다.');
    passwordInput.val('');
    passwordInput.focus();
    return false;
  }

  // 이메일 유효성 검사
  if (!emailPattern.test(emailInput.val())) {
    alert('올바른 이메일 주소를 입력하세요.');
    emailInput.val('');
    emailInput.focus();
    return false;
  }

  // 모든 유효성 검사를 통과한 경우
  return true;
}


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
  $('.login-form').show();
  $('.register-form').hide();
  $('.forgot-password-form').hide();
}

function showRegisterForm() {
  $('.register-form').show(500);
  $('.login-form').hide();
  $('.forgot-password-form').hide();
}

// 로그인 폼으로 스크롤하는 함수
function scrollToForm($form) {
  $('html, body').animate(
    {
      scrollTop: $form.offset().top,
    },
    500
  );
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

//  마이페이지 슬라이더 처리
$(document).ready(function () {
  // 슬라이더 초기화 함수
  function initializeSlider($sliderUl) {
    const slideCount = $sliderUl.find('li').length;
    const slideWidth = $sliderUl.find('li').width();
    const sliderUlWidth = slideCount * slideWidth;

    // 처음 슬라이드(1번 위치)로 이동
    $sliderUl.css({ width: sliderUlWidth, marginLeft: 0 });

    function moveLeft() {
      $sliderUl.animate(
        {
          left: +slideWidth,
        },
        200,
        function () {
          $sliderUl.find('li:last-child').prependTo($sliderUl);
          $sliderUl.css('left', '');
          // 여기에 화면 이동 등 추가 작업 가능
        }
      );
    }

    function moveRight() {
      $sliderUl.animate(
        {
          left: -slideWidth,
        },
        200,
        function () {
          $sliderUl.find('li:first-child').appendTo($sliderUl);
          $sliderUl.css('left', '');
          // 여기에 화면 이동 등 추가 작업 가능
        }
      );
    }

    $sliderUl
      .parent()
      .find('a.control_prev')
      .off('click')
      .on('click', function () {
        moveLeft();
        return false; // 이동 버튼 클릭 시 링크 이동 방지
      });

    $sliderUl
      .parent()
      .find('a.control_next')
      .off('click')
      .on('click', function () {
        moveRight();
        return false; // 이동 버튼 클릭 시 링크 이동 방지
      });
  }

  $('.data-item').click(function () {
    const index = $(this).index('.data-item');

    // 기존의 .item-details 내용 초기화
    $('.item-details .slider').hide();

    // 선택된 섹션의 슬라이더만 표시
    const sliderId = ['#saved-list', '#memo-list', '#shared-list'][index];
    const $slider = $(sliderId + ' .slider');
    $slider.show();

    // 슬라이더 초기화 및 이벤트 핸들러 등록
    const $sliderUl = $slider.find('ul');
    initializeSlider($sliderUl);

    // 슬라이더가 표시된 후에 해당 섹션으로 스크롤
    $('html, body').animate(
      {
        scrollTop: $slider.offset().top,
      },
      500
    );
  });
});

// 스크롤 시 내비게이션 바의 상단고정
$(document).ready(function () {
  const $nav = $('nav');
  const navOffset = $nav.offset().top;
  let isNavFixed = false;

  $(window).scroll(function () {
    const scrollPos = $(window).scrollTop();

    if (scrollPos >= navOffset && !isNavFixed) {
      $nav.addClass('fixed-nav');
      
      isNavFixed = true;
    } 
    
    // 스크롤 위치가 최상단일 때 초기 스타일로
    else if (scrollPos === 0 && isNavFixed) {
      $nav.removeClass('fixed-nav');
      isNavFixed = false;
    }
  });
});




