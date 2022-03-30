const deleteBtn = document.querySelector('.btn--delete');

deleteBtn.addEventListener('click', () => {
  return confirm('Êtes-vous sûr de cette suppression ?');
})