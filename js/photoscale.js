export function toScalePhoto() {
    const open = document.querySelector('.scale-window');
    const openPhotoSchool = document.querySelector('.image-school');
    const openPhotoNotebook = document.querySelector('.image-notebook');
    const openPhotoCamera = document.querySelector('.image-camera');
    const openPhotoFoot = document.querySelector('.image-foot ');
    const openPhotoMedicine = document.querySelector('.image-medicine');
    const openPhotoInstrument = document.querySelector('.image-instrument');
    const openPhotoLetters = document.querySelector('.image-letters');
    const openPhotoSushi = document.querySelector('.image-sushi');
    const closePhoto = document.querySelector('.scale-window');

    openPhotoSchool.addEventListener('click', function() {
            open.classList.add('open-photo-school'); 
    });

    openPhotoNotebook.addEventListener('click', function() {
        open.classList.add('open-photo-notebook'); 
    });

    openPhotoCamera.addEventListener('click', function() {
        open.classList.add('open-photo-camera'); 
    });

    openPhotoFoot.addEventListener('click', function() {
        open.classList.add('open-photo-foot'); 
    });

    openPhotoMedicine.addEventListener('click', function() {
        open.classList.add('open-photo-medicine'); 
    });

    openPhotoInstrument.addEventListener('click', function() {
        open.classList.add('open-photo-instrument'); 
    });

    openPhotoLetters.addEventListener('click', function() {
        open.classList.add('open-photo-letters'); 
    });

    openPhotoSushi.addEventListener('click', function() {
        open.classList.add('open-photo-sushi'); 
    });

    closePhoto.addEventListener('click', function() {
        open.classList.remove(
            'open-photo-school', 
            'open-photo-notebook', 
            'open-photo-camera',
            'open-photo-foot',
            'open-photo-medicine',
            'open-photo-instrument',
            'open-photo-letters',
            'open-photo-sushi'
            );
    });
};
