const $loginBtn = $('.nav-member').text('Login');
const $loginSubmitBtn = $('.submit');
const $loginPage = $('.login');

$loginBtn.on('click', () => {

  toggleHidden($loginPage);
});
$loginSubmitBtn.on('click', () => {

  toggleHidden($loginPage);
})

$(document).ready(function(){
  $(".menu-button").click(function(){
  $(".menu-bar").toggleClass( "open" );
  })
  })

function toggleHidden(page) {
  page.toggleClass('hidden');

}