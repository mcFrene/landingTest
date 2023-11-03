document.querySelector('.faq-accordion').addEventListener('click', (event) => {
    if(event.target.closest('.faq-accordion__item')){
        event.target.closest('.faq-accordion__item').classList.toggle('faq-accordion__item--active');
    }
});

document.querySelector('.btn-burger').addEventListener('click', () => {
    document.querySelector('.section-header').classList.toggle('section-header--active-nav');
    
    let body = document.querySelector('body');
    if(!body.style.overflowY)
        body.style.overflowY = "hidden";
    else
        body.style.overflowY = "";
});

window.addEventListener('resize', () => {
    document.querySelector('.section-header').classList.remove('section-header--active-nav');
    let body = document.querySelector('body');
    if(body.style.overflowY)
        body.style.overflowY = "";
});

