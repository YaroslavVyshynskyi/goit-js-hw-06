const counterValue = {
    value: 0,
    decrement() {
        this.value -= 1;
    },

    increment() {
        this.value += 1;
    },
};

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

const decrementValue = () => { 
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
};

const incrementValue = () => {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
};

decrementButton.addEventListener("click", decrementValue);
incrementButton.addEventListener("click", incrementValue);