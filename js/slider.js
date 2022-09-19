export function addSlider() {
    let position = 0;
    const sliderLine = document.querySelector('.slider-line');

    document.querySelector('.slider-next').addEventListener('click', function() {
        position += 310;
        if (position > 830) {
            position = 0;
        };

        sliderLine.style.right = position + 'px';
    });

    document.querySelector('.slider-prev').addEventListener('click', function() {
        position -= 310;
        if (position < 0) {
            position = 620;
        };

        sliderLine.style.right = position + 'px';
    });
};
