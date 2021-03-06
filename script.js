const addBtn = document.querySelector('#tag-add-btn');
const tagInput = document.querySelector('#tag-input');
const tagList = document.querySelector('#tag-list');
const readOnly = document.querySelector('#read-only');
const newListBtn = document.querySelector('#new-list-btn');

document.addEventListener('DOMContentLoaded', (event) => {
    let keys = Object.keys(localStorage);
    keys.sort();
    for (let key of keys) {
        tagList.insertAdjacentHTML('beforeend',
            `<div class="tag" id=${key}>
                <span class="tag-text">${localStorage.getItem(key)}</span>
                <button class="tag-delete-btn">×</button>
            </div>`);
    }
});

addBtn.addEventListener('click', () => {
    if (!tagInput.value) return;
    const index = Date.now();
    tagList.insertAdjacentHTML('beforeend',
        `<div class="tag" id=${index}>
            <span class="tag-text">${tagInput.value}</span>
            <button class="tag-delete-btn">×</button>
        </div>`);
    localStorage.setItem(index, tagInput.value);
    tagInput.value = '';
});

tagList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        event.target.closest('DIV').remove();
        const index = event.target.closest('DIV').id;
        localStorage.removeItem(index);
    }
});

readOnly.addEventListener('change', () => {
    const buttons = document.querySelectorAll('button');
    if (readOnly.checked) {
        Array.from(buttons).map(elem => elem.disabled = true)
    } else {
        Array.from(buttons).map(elem => elem.disabled = false)
    }
});

newListBtn.addEventListener('click', () => {
    localStorage.clear();
    const tags = document.querySelectorAll('.tag');
    Array.from(tags).map(elem => elem.remove());
});

