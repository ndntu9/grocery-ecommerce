window.addEventListener('template-loaded', function () {
    const themeToggleBtn = $('.user-actions__theme-toggle');

    themeToggleBtn.onclick = function () {
        themeToggleBtn.classList.toggle('dark');
        $('html').classList.toggle('dark');
    };
});
