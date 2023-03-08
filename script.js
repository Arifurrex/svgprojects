const logo = document.querySelectorAll('#logo path');
console.log(logo.length);
let len = logo.length;
for (let i = 0; i < len; i++){
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}