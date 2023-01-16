const btn = document.querySelector('.btn');
const socialMedia = document.querySelector('.social-media')

btn.addEventListener('click', function() {
        if (socialMedia.style.display !== "none") {
          socialMedia.style.display = "none";
        } else {
          socialMedia.style.display = "block";
        }
});