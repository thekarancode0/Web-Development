
let count = document.querySelector('.count');
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let reset = document.querySelector('.reset')
let input = document.querySelector('.input')

plus.addEventListener('click', () => {
    let value = parseInt(count.innerHTML);
    count.innerHTML = value + parseInt(input.value);
});

minus.addEventListener('click', () => {
    let value = parseInt(count.innerHTML);
    count.innerHTML = value - parseInt(input.value);
});

reset.addEventListener('click', () => {
    count.innerHTML = '0';
})
