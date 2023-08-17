const $loginBtn = $('.nav-member').text('Login');
const $loginSubmitBtn = $('.submit');
const $loginPage = $('.login');

$loginBtn.on('click', () => {

  toggleHidden($loginPage);
});
$loginSubmitBtn.on('click', () => {

  toggleHidden($loginPage);
})



function toggleHidden(page) {
  page.toggleClass('hidden');

}