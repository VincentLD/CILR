const cvInput = document.querySelector('#cvInput');
const cvOutput = document.querySelector('.cvOutput');
const cvDelete = document.querySelector('.cvCross');

const charteInput = document.querySelector('#charteInput');
const charteOutput = document.querySelector('.charteOutput');
const charteDelete = document.querySelector('.charteCross');

cvInput.addEventListener('change', (e) => {
	let filename = '';
	filename = e.target.value.replace(/^C:\\fakepath\\/i, '');
	cvOutput.innerHTML = filename;
	console.log(e.target.value);
});

charteInput.addEventListener('change', (e) => {
	let filename = '';
	filename = e.target.value.replace(/^C:\\fakepath\\/i, '');
	charteOutput.innerHTML = filename;
});

cvDelete.addEventListener('click', () => {
	cvInput.value = '';
	cvOutput.innerHTML = 'Aucun fichier sélectionné';
});

charteDelete.addEventListener('click', () => {
	charteInput.value = '';
	charteOutput.innerHTML = 'Aucun fichier sélectionné';
});
