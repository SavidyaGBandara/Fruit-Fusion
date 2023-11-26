const carousel = [5, 4, 6, 5, 5];
var product_det = {
    cocktails: [
        "blue_lagoon_cocktail",
        "mojito_cocktail",
        "mai_tai_cocktail",
        "piña_colada_cocktail",
        "margarita_cocktail",
    ],
    tea: ["blueberry_tea", "lemon_ginger_tea", "peach_tea", "strawberry_black_tea"],
    juices: ["apple_juice", "blueberry_juice", "lime_juice", "orange_juice", "pineapple_juice", "watermelon_juice"],
    milkshakes: [
        "banana_milkshake",
        "blueberry_milkshake",
        "mango_milkshake",
        "pineapple_milkshake",
        "strawberry_milkshake",
    ],
    smoothies: [
        "avocado_and_banana_smoothie",
        "mango_pineapple_smoothie",
        "minty_watermelon_smoothie",
        "strawberry_banana_smoothie",
        "tropical_mango_passion_smoothie",
    ],
};
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
                '<a href="./product.html?type=' +
                carousel_names[element.dataset.index] +
                "&item=" +
                product_det[carousel_names[element.dataset.index]][i] +
                '"><img data-index="' +
                i +
                '" src="./carousel/' +
                element.dataset.index +
                "/" +
                i +
                '.png" style="animation-delay: ' +
                (i + 2) +
                '00ms;"></a>';
        }
    });
});

elm_product_cats[0].click();
