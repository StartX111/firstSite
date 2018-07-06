var modal = document.getElementById('modal');
var modalImg = document.getElementById('modal-img');

document.body.addEventListener('click', function (event) {
    var imgPath = event.target.src;
    if (imgPath) {
        modalImg.src = imgPath;
        modal.classList.add('active');
    } else {
        modal.classList.remove('active');
    }
});