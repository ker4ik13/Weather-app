function toggleSkeleton(time) {
    if (document.querySelector('.main')) {
        setTimeout(() => {
            document.querySelector('.header__city').classList.toggle('skeleton');
            document.querySelector('.header__main').classList.toggle('skeleton');
            document.querySelector('.header__weather').classList.toggle('skeleton');
            document.querySelector('.main__title').classList.toggle('skeleton');
            document.querySelector('.footer__title').classList.toggle('skeleton');
            document.querySelectorAll('.weather__item').forEach(item => {
                item.classList.toggle('skeleton');
            });
            document.querySelectorAll('.footer__items').forEach(item => {
                item.classList.toggle('skeleton');
            });
        }, time);
    }
}

export default toggleSkeleton;
