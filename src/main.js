import { fetchImages } from './js/pixabay-api.js';
import {
    renderImages,
    show_load_ind,
    hide_load_ind,
    show_err_mess,
    show_warn_mess,
} from './js/render-functions.js';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const query = searchInput.value.trim();
    if (query === '') {
        hide_load_ind();
        show_warn_mess('Please enter a search query');
        return;
    }

    show_load_ind();

    fetchImages(query)
        .then(data => {
            hide_load_ind();
            if (data.hits.length === 0) {
                show_err_mess(
                    'Sorry, there are no images matching your search query. Please try again!'
                );
            } else {
                renderImages(data.hits);
            }
        })
        .catch(error => {
            hide_load_ind();
            show_err_mess('Failed to fetch images. Please try again later.');
        });
});