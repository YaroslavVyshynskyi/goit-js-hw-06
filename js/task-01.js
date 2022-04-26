const items = document.querySelectorAll(".item");
console.log("Number of categories: ", items.length);

const element = items.forEach(item => { 
    const itemTitle = item.firstElementChild;
    console.log("Category: ", itemTitle.textContent);

    const itemList = itemTitle.nextElementSibling.children;
    console.log("Elements: ", itemList.length);
});
