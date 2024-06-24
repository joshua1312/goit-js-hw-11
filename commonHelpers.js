import{S as f,i as d}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function u(n){const t=`https://pixabay.com/api/?${new URLSearchParams({key:"44481780-b4b938698ada11f180983274a",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(t).then(o=>{if(!o.ok)throw new Error("Failed to fetch images");return o.json()}).catch(o=>{throw new Error("Failed to fetch images")})}const c=document.getElementById("gallery");function m(n){c.innerHTML="";const s=new f(".gallery a",{captionsData:"alt",captionDelay:250});n.forEach(t=>{const o=document.createElement("li");o.classList.add("card");const e=document.createElement("a");e.setAttribute("href",t.largeImageURL);const r=document.createElement("img");r.setAttribute("src",t.webformatURL),r.setAttribute("alt",t.tags);const i=`
      <ul class="info-list">
        <li>
            <p class="info-title">Likes</p>
            <p class="info-data">${t.likes}</p>
        </li>
        <li>
            <p class="info-title">Views</p>
            <p class="info-data">${t.views}</p>
        </li>
        <li>
            <p class="info-title">Comments</p>
            <p class="info-data">${t.comments}</p>
        </li>
        <li>
            <p class="info-title">Downloads</p>
            <p class="info-data">${t.downloads}</p>
        </li>
      </ul>
    `;e.appendChild(r),o.appendChild(e),o.insertAdjacentHTML("beforeend",i),c.appendChild(o)}),s.refresh()}function p(){a();const n=document.createElement("span");n.classList.add("loader"),c.append(n)}function a(){c.innerHTML=""}function l(n){d.error({message:n,position:"bottomCenter"})}function h(n){d.warning({message:n,position:"bottomCenter"})}const g=document.getElementById("search-form"),y=document.getElementById("search-input");g.addEventListener("submit",n=>{n.preventDefault();const s=y.value.trim();if(s===""){a(),h("Please enter a search query");return}p(),u(s).then(t=>{a(),t.hits.length===0?l("Sorry, there are no images matching your search query. Please try again!"):m(t.hits)}).catch(t=>{a(),l("Failed to fetch images. Please try again later.")})});
//# sourceMappingURL=commonHelpers.js.map
