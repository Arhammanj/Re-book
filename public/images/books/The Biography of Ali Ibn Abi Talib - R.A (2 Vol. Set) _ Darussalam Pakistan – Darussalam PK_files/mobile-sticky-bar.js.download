const mobileStickyBar = document.querySelector('.mobile-sticky-bar');

function showmobileStickyBar() {


  const endScreenOnScroll = document.body.offsetHeight - window.innerHeight * 1.5;

  if (document.documentElement.scrollTop > (window.innerHeight / 2) && document.documentElement.scrollTop < endScreenOnScroll) {
    mobileStickyBar.classList.add('active');
  } else {
    mobileStickyBar.classList.remove('active');
  }
}

window.addEventListener('scroll', () => {
  showmobileStickyBar();
});