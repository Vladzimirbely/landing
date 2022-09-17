export function upPage() {
    let scroll = document.querySelector('.up-page__btn')
    window.addEventListener('scroll', function() {      
        scroll.classList.toggle('active', window.scrollY > 600);
    });
    
    scroll.onclick = function() {
        window.scrollTo(0, 0);
    };
};
