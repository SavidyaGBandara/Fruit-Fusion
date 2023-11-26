document.body.onload = () => {
    document.body.classList.add("loaded");
};

const elm_header = document.querySelector("header");
const elm_lnd_main = document.querySelector("#lnd > img.lnd-main");
const elm_lnd_text = document.querySelector("#lnd > section");

var prev_scroll_pos = 0;
window.addEventListener("scroll", () => {
    if (scrollY < window.innerHeight) {
        elm_lnd_main.style.scale = 1.25 - 0.0005 * scrollY;
    }

    if (scrollY > window.innerHeight / 2) {
        elm_header.classList.add("visible");
        elm_lnd_text.classList.add("visible");
    } else {
        elm_header.classList.remove("visible");
        elm_lnd_text.classList.remove("visible");
    }

    if (scrollY < window.innerHeight * 2) return;

    if (scrollY > prev_scroll_pos) {
        elm_header.classList.remove("visible");
    } else {
        elm_header.classList.add("visible");
    }
    prev_scroll_pos = scrollY;
});

var selected_product_cat = 0;
const elm_product_cats = document.querySelectorAll("#products > section > div");
const elm_products = document.querySelector("#products > div");
const carousel_names = ["cocktails", "tea", "juices", "milkshakes", "smoothies"];
elm_product_cats.forEach((element) => {
    element.addEventListener("click", () => {
        window.location.href = "./product.html?type=" + carousel_names[element.dataset.index];
    });
    element.addEventListener("mouseover", () => {
        elm_product_cats[selected_product_cat].classList.remove("selected");
        selected_product_cat = element.dataset.index;
        elm_product_cats[selected_product_cat].classList.add("selected");
    });
});
