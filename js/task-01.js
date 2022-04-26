// ----- 1. кількість елекментів li.item -----


const items = document.querySelectorAll(".item");
console.log("Number of categories: ", items.length);

// ----- 2. текст заголовку елемента та кількість елементів в категорії -----

const element = items.forEach(item => { 
    const itemTitle = item.firstElementChild;
    console.log("Category: ", itemTitle.textContent);

    const itemList = itemTitle.nextElementSibling.children;
    console.log("Elements: ", itemList.length);
});




// ----- через навігацію по DOM ----- //
console.log("=========================================");

const elements = document.querySelector("#categories").children;
console.log("Number of categories: ", elements.length);

const firstElement = document.querySelector("#categories").firstElementChild;
// console.log("firstElement: ",firstElement);

const firstElementTitle = firstElement.firstElementChild;
console.log("Category: ",firstElementTitle.textContent);

const firstElementList = firstElementTitle.nextElementSibling.children;
console.log("Elements: ", firstElementList.length);

const secondElement = firstElement.nextElementSibling;
// console.log("secondElement: ", secondElement);

const secondElementTitle = secondElement.firstElementChild;
console.log("Category: ", secondElementTitle.textContent);

const secondElementList = secondElementTitle.nextElementSibling.children;
console.log("Elements: ", secondElementList.length);

const thirdElement = secondElement.nextElementSibling;
// console.log("thirdElement: ", thirdElement);

const thirdElementTitle = thirdElement.firstElementChild;
console.log("Category: ", thirdElementTitle.textContent);

const thirdElementList = thirdElementTitle.nextElementSibling.children;
console.log("Elements: ", thirdElementList.length);
