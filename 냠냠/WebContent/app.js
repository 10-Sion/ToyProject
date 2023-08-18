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

    $sliderUl.parent().find('a.control_prev').off('click').on('click', function () {
      moveLeft();
      return false; // 이동 버튼 클릭 시 링크 이동 방지
    });

    $sliderUl.parent().find('a.control_next').off('click').on('click', function () {
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
    $('html, body').animate({
      scrollTop: $slider.offset().top
    }, 500);
  });
});
