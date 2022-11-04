const markAsRead = document.querySelector('.top__nav-mark');
const topNavTitle = document.querySelector('.top__nav-title');
const notNums = document.querySelector('.not__num');
const notifications = document.querySelectorAll('.notification__section-notification');

const dots = document.querySelectorAll('.dot');


markAsRead.addEventListener("click", () => {
    dots.forEach(dot => {
        dot.style.display = 'none';
    })

    notifications.forEach(notification => {
        if (!notification.classList.contains('read')) {
            notification.classList.add('read');
            console.log(notification);
        }
    })

    notNums.style.display = 'none';
})