const markAsRead = document.querySelector('.top__nav-mark');
const topNavTitle = document.querySelector('.top__nav-title');
const notNums = document.querySelector('.not__num');

const dots = document.querySelectorAll('.dot');


markAsRead.addEventListener("click", () => {
    dots.forEach(dot => {
        dot.style.display = 'none';
    })

    notNums.style.display = 'none';
})