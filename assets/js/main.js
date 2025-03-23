const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function load(path, selector) {
    fetch(path)
        .then(function (response) {
            return response.text();
        })
        .then(function (htmls) {
            $(selector).innerHTML = htmls;
        })
        .finally(function () {
            window.dispatchEvent(new Event('template-loaded'));
        });
}
