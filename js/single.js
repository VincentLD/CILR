const deleteBtn = document.querySelector('.btn--delete');

deleteBtn.addEventListener('click', () => {
  return confirm('Êtes-vous sur de vouloir supprimer cet évènement ?');
})