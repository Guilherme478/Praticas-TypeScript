"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function adicionarNumeros(num1, num2) {
    return num1 + num2;
}
if (button) {
    button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(adicionarNumeros(Number(input1.value), Number(input2.value)));
        }
    });
}