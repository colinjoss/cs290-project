var picture = document.getElementById('carousel');
var allPhotos = ['images/pic_1.jpg', 'images/pic_2.jpg', 'images/pic_3.jpg'];
var index = 0;

document.getElementById('button1').addEventListener('click', buttonRight);
document.getElementById('button2').addEventListener('click', buttonLeft);

window.setInterval(rotatePhoto, 5000);  // Rotates every 5 seconds

function rotatePhoto() {
    function updateIndex() {
        index++;
        if (index > 2) { index = 0 };  // Loop back to 0 if index exceeds 2
    };
    updateIndex();  // Closure means index keeps going up
    picture.setAttribute('src', allPhotos[index]);
};

function buttonLeft () {
    index--;  // Decrements index
    if (index < 0) { index = 2};
    picture.setAttribute('src', allPhotos[index]);
};

function buttonRight () {
    index++;  // Increments index
    console.log(index, allPhotos[index])
    if (index > 2) {index = 0};
    picture.setAttribute('src', allPhotos[index]);
};
