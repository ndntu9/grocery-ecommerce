const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function load(templates) {
    const promises = templates.map(function (template) {
        return fetch(template.path)
            .then(function (response) {
                return response.text();
            })
            .then(function (html) {
                $(template.selector).innerHTML = html;
            });
    });

    Promise.all(promises).then(function () {
        window.dispatchEvent(new Event('template-loaded'));
    });
}
