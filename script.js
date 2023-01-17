const btn = document.querySelector('.btn');
const socialMedia = document.querySelector('.social-media');
const coloredSVG = document.querySelector('.colored-svg');

btn.addEventListener('click', function() {
  if (socialMedia.style.display !== "none") {
    socialMedia.style.display = "none";
    btn.classList.remove('hover');
    coloredSVG.style.filter = '';
  } else {
    socialMedia.style.display = "block";
    btn.classList.add('hover');
    coloredSVG.style.filter = 'brightness(0) invert(1)';
  }
});




