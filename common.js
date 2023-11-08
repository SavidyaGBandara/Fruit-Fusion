const elm_header = document.querySelector("header");

var prev_scroll_pos = 0;
window.addEventListener("scroll", () => {
    if (scrollY < 20) return;

    if (scrollY > prev_scroll_pos) {
        elm_header.classList.remove("visible");
    } else {
        elm_header.classList.add("visible");
    }
    prev_scroll_pos = scrollY;
});

// const elm_searchBar = document.querySelector("body > header > div > input");
// var search_bar_timer = 1;
// setInterval(() => {
//     if (search_bar_timer) {
//         search_bar_timer = 0;
//         return;
//     }
//     elm_searchBar.classList.remove("visible");
// }, 1500);

// document.querySelector("body > header > div > img").addEventListener("mouseover", () => {
//     search_bar_timer = 1;
//     elm_searchBar.classList.add("visible");
// });
