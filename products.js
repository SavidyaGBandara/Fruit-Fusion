const carousel = [5, 4, 6, 5, 5];
const carousel_names = ["cocktails", "tea", "juices", "milkshakes", "smoothies"];
var selected_product_cat = 0;
const elm_product_cats = document.querySelectorAll("#products > section > div");
const elm_products = document.querySelector("#products > div");
elm_product_cats.forEach((element) => {
    element.addEventListener("click", () => {
        if (element.dataset.index === selected_product_cat) {
            window.location.href = "./product.html?type=" + carousel_names[element.dataset.index];
            return;
        }
        elm_product_cats[selected_product_cat].classList.remove("selected");
        selected_product_cat = element.dataset.index;
        elm_product_cats[selected_product_cat].classList.add("selected");
        elm_products.innerHTML = "";
        for (let i = 1; i <= carousel[element.dataset.index]; i++) {
            elm_products.innerHTML +=
                '<img data-index="' +
                i +
                '" src="./carousel/' +
                element.dataset.index +
                "/" +
                i +
                '.png" style="animation-delay: ' +
                (i + 2) +
                '00ms;">';
        }
    });
});

elm_product_cats[0].click();
