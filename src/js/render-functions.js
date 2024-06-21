import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.getElementById('gallery');

export function renderImages(images) {
    gallery.innerHTML = '';

    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });

    images.forEach(image => {
        const card = document.createElement('li');
        card.classList.add('card');

        const link = document.createElement('a');
        link.setAttribute('href', image.largeImageURL);

        const img = document.createElement('img');
        img.setAttribute('src', image.webformatURL);
        img.setAttribute('alt', image.tags);

        const infoListHTML = `
      <ul class="info-list">
        <li>
            <p class="info-title">Likes</p>
            <p class="info-data">${image.likes}</p>
        </li>
        <li>
            <p class="info-title">Views</p>
            <p class="info-data">${image.views}</p>
        </li>
        <li>
            <p class="info-title">Comments</p>
            <p class="info-data">${image.comments}</p>
        </li>
        <li>
            <p class="info-title">Downloads</p>
            <p class="info-data">${image.downloads}</p>
        </li>
      </ul>
    `;

        link.appendChild(img);
        card.appendChild(link);
        card.insertAdjacentHTML('beforeend', infoListHTML);
        gallery.appendChild(card);
    });

    lightbox.refresh();
}

export function showLoadingIndicator() {
    hideLoadingIndicator();
    const loading = document.createElement('span');
    loading.classList.add('loader');
    gallery.append(loading);
}

export function hideLoadingIndicator() {
    gallery.innerHTML = '';
}

export function showErrorMessage(message) {
    iziToast.error({
        message: message,
        position: 'bottomCenter',
    });
}

export function showWarningMessage(message) {
    iziToast.warning({
        message: message,
        position: 'bottomCenter',
    });
}