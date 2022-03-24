const label = document.querySelector('#file');
const image = document.querySelector('#output');

label.addEventListener('change', (e) => {
  image.src = URL.createObjectURL(e.target.files[0]);
});