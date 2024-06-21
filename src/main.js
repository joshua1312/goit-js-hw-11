import { fetchImages } from './js/pixabay-api.js';
import {
    renderImages,
    showLoadingIndicator,
    hideLoadingIndicator,
    showErrorMessage,
    showWarningMessage,
} from './js/render-functions.js';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const query = searchInput.value.trim();
    if (query === '') {
        hideLoadingIndicator();
        showWarningMessage('Please enter a search query');
        return;
    }

    showLoadingIndicator();

    fetchImages(query)
        .then(data => {
            hideLoadingIndicator();
            if (data.hits.length === 0) {
                showErrorMessage(
                    'Sorry, there are no images matching your search query. Please try again!'
                );
            } else {
                renderImages(data.hits);
            }
        })
        .catch(error => {
            hideLoadingIndicator();
            showErrorMessage('Failed to fetch images. Please try again later.');
        });
});