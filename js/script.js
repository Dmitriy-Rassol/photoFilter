'use strict';
const items = document.querySelectorAll('.filter-item');
const itemBox = document.querySelectorAll('.itemBox');


items.forEach(item => {
    item.addEventListener('click', (e) => {
        const value = item.dataset.filter;
        const target = e.target;
        itemBox.forEach(img => {
            if (img.classList[1] !== value) {
                img.classList.add('visually-hidden');
            } else {
                img.classList.remove('visually-hidden');
            }

            if (value === 'all') {
                img.classList.remove('visually-hidden');
            }
        });
        if (target) {
            items.forEach(item => {
                item.classList.remove('active');
            });
            target.classList.add('active');
        }
    });
});



