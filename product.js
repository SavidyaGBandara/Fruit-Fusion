const url_params = new URL(window.location.href).searchParams;
var itemType = url_params.get("type");

if (!itemType || typeof products == undefined)
    window.location.href =
        window.location.origin + window.location.pathname.substring(0, window.location.pathname.length - 12);

if (!Object.keys(products).includes(itemType)) itemType = Object.keys(products)[0];
const items = products[itemType];
var curr_item = 0;

const item_i = {
    len: items.length - 1,
    i: 0,
    next: function () {
        this.i < this.len ? this.i++ : (this.i = 0);
        return this.i;
    },
    prev: function () {
        this.i > 0 ? this.i-- : (this.i = this.len);
        return this.i;
    },
};

var prev_expand_pos;
var expanded = null;
const elm_exp_contents = document.querySelectorAll("#det > p");
function expand(pos) {
    if (expanded === null) {
        elm_exp_contents[pos].classList.add("expand");
        expanded = pos;
        return;
    }

    elm_exp_contents[expanded].classList.remove("expand");
    if (expanded != pos) {
        elm_exp_contents[pos].classList.add("expand");
        expanded = pos;
    } else {
        expanded = null;
    }
}

const elm_intro = document.querySelector("#intro");
const elm_image = document.querySelector("#product-image");
const elm_title = document.querySelector("#intro > h1");
const elm_price = document.querySelector("#intro > h2");
const elm_tagLine = document.querySelector("#intro > p");
const elm_pictures = document.querySelector("#det > div").children;
const elm_ingredients = document.querySelector("#det > p.ingredients");
const elm_desc = document.querySelector("#det > p.desc");

function setItem(i) {
    let item = items[i];
    elm_image.src = "./products/" + itemType + "/" + item.name.toLowerCase().replaceAll(" ", "_") + "/" + item.pics[0];
    elm_title.innerHTML = item.name;
    elm_price.innerHTML = item.price;
    elm_tagLine.innerHTML = item.tag_line;
    elm_intro.classList.toggle("ent1");
    elm_intro.classList.toggle("ent2");
    elm_pictures[0].src =
        "./products/" + itemType + "/" + item.name.toLowerCase().replaceAll(" ", "_") + "/" + item.pics[1];
    elm_pictures[1].src =
        "./products/" + itemType + "/" + item.name.toLowerCase().replaceAll(" ", "_") + "/" + item.pics[2];
    elm_pictures[2].src =
        "./products/" + itemType + "/" + item.name.toLowerCase().replaceAll(" ", "_") + "/" + item.pics[3];
    elm_desc.innerHTML = item.desc;
    elm_ingredients.innerHTML = item.ingredients;
    // console.log(item);
}

function switchItem(dir) {
    if (dir == "l") {
        item_i.prev();
    } else {
        item_i.next();
    }
    setItem(item_i.i);
}

setItem(item_i.i);
