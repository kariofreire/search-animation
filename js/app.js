const searchButton = document.querySelector('.search-btn');
const searchContainer = document.querySelector('.search');

searchButton.addEventListener('click', () => {
	searchContainer.classList.toggle('active');
});