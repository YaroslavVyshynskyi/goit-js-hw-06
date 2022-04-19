const counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');

const decrementValue = () => {
    counterValue -= 1;
    return counterValue;
};


const incrementButton = document.querySelector('[data-action="increment"]');


const incrementValue = () => {
    counterValue += 1;
    return counterValue;
};

const value = document.querySelector(".value");
value.textContent = counterValue;

counterValue.addEventListener("click", decrementValue);
counterValue.addEventListener("click", incrementValue);