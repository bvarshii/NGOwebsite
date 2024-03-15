function loadNewImage() {
    var newImage = document.createElement('img');
    newImage.src = "https://i.pinimg.com/564x/4c/46/7d/4c467df6050d61cfbe8586747cd1eecc.jpg";
    newImage.classList.add('new-image');
    newImage.onload = function() {
        newImage.classList.add('loaded');
    };
    document.querySelector('.hero-container').appendChild(newImage);
}

window.onload = function() {
    loadNewImage();
};
