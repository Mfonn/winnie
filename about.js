document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll("h1, h2, p");

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("visible");
        }, index * 200);
    });
});
