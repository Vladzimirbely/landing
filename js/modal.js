const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.open-modal');
const confirmModalButton = document.querySelector('.confirm');
const closeModalButton = document.querySelector('.close');

openModalButton.addEventListener('click', function (e) {
    modal.classList.add('open');
    let time = document.getElementById('date');
    function getTime () {
        return new Date().toString();
    }
    setInterval (
        () => time.innerHTML = getTime(), 1000);
});

confirmModalButton.addEventListener('click', function (e) {
    modal.classList.remove('open');
    let time2 = document.getElementById('additional-txt');
    function getTime () {
        return new Date().toString();
    }
    setInterval (
        () => time2.innerHTML = getTime(), 1000);
});

closeModalButton.addEventListener('click', function (e) {
    modal.classList.remove('open');
});
