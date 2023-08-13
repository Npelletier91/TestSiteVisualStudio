// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

const move = document.getElementById('move');

move.addEventListener('click', () => {

    const randomX = Math.floor(Math.random() * 100);
    const randomY = Math.floor(Math.random() * 100);

    move.style.transform = `translate(${randomX}px, ${randomY}px)`;
});