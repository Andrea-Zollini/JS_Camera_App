const camera = document.querySelector('#camera');
const video = document.createElement('video');
const canvas = document.createElement('canvas');
const shutterButton = document.createElement('button');
const cameraIcon = document.createElement('i');
const imageContainer = document.createElement('div');

video.setAttribute('id', 'video');
canvas.setAttribute('id', 'canvas');
canvas.setAttribute('width', 640);
canvas.setAttribute('height', 480);
shutterButton.setAttribute('id', 'shutter');
cameraIcon.classList.add('fa-solid', 'fa-camera');
imageContainer.classList.add('image_container');

camera.append(video);
camera.append(shutterButton);
document.body.append(canvas);
shutterButton.append(cameraIcon);
document.body.append(imageContainer);

const mediaDevices = navigator.mediaDevices;
mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
        video.play();
    });

shutterButton.addEventListener('click', () => {
    camera.classList.add('effect');
    setTimeout(() => {
        camera.classList.toggle('effect')
    }, 400);


    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const url = canvas.toDataURL('image/png');
    const image = document.createElement('img');
    image.setAttribute('width', 200);
    image.setAttribute('src', url);
    imageContainer.append(image);
});

