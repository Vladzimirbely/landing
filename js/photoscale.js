export function toScalePhoto() {
    const worksDiv = document.querySelector('.works');

        worksDiv.addEventListener('click', (event) => {
            let {target} = event;

            while (!target.classList.contains('img-gallery-item')) {
                target = target.parentElement;
            };

            target.classList.toggle('active');
            
        });   
};
