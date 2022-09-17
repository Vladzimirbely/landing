export function startModal() {

    const modal = document.querySelector('.modal');
    const openModalButton = document.querySelector('.open-modal');
    const confirmModalButton = document.querySelector('.confirm');
    const closeModalButton = document.querySelector('.close');
    let pageIntervalId;
    let modalIntervalId;

    openModalButton.addEventListener('click', function (e) {
        modal.classList.add('open');

        const time = document.querySelector('#date');

        modalIntervalId = setInterval (() => time.textContent = getTime(), 1000);
    });

    confirmModalButton.addEventListener('click', function (e) {
        modal.classList.remove('open');
        clearInterval(modalIntervalId);
        clearInterval(pageIntervalId);

        const time = document.querySelector('#additional-txt');
        
        pageIntervalId = setInterval (() => time.textContent = getTime(), 1000);
    });

    closeModalButton.addEventListener('click', function (e) {
        modal.classList.remove('open');
    });

    function getTime () {
        return new Date().toString();
    };
};


