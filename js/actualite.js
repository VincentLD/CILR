/* PAGE ACTUALITES */
const tabs = document.querySelectorAll('.tabnav__li');
const content = document.querySelectorAll('.actu__content');
let index = 0;

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		if (tab.classList.contains('tabnav__li--active')) return;
		tab.classList.add('tabnav__li--active');

		index = tab.getAttribute('data-index');

		tabs.forEach((tab) => {
			tab.getAttribute('data-index') !== index
				? tab.classList.remove('tabnav__li--active')
				: '';
		});

		content.forEach((item) => {
			item.getAttribute('data-index') == index
				? item.classList.add('actu__content--active')
				: item.classList.remove('actu__content--active');
		});
	});
});
