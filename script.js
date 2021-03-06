const addBtn = document.querySelector('#tag-add-btn');
const tagInput = document.querySelector('#tag-input');
const tagList = document.querySelector('#tag-list');

addBtn.addEventListener('click', (event) => {
    tagList.insertAdjacentHTML('beforeend',
        `<div class="tag">
        <span class="tag-text">${tagInput.value}</span>
        <button class="tag-delete-btn">X</button>
    </div>`);
    tagInput.value = '';
});

tagList.addEventListener('click', (event) => {

    if (event.target.tagName === 'BUTTON') {
        event.target.closest('DIV').remove();
    }
});