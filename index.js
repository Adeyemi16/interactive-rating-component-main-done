// const a = document.getElementById('firstButton');
// const b = document.getElementById('secondButton');

const first = document.getElementById("firstButton");
const second = document.getElementById("secondButton");
const third = document.getElementById("thirdButton");
const fourth = document.getElementById("fourthButton");
const fifth = document.getElementById("fifthButton")



first.addEventListener('click', () => {
    let value = document.getElementById("firstButton").innerText;
    console.log(value);
    document.getElementById("firstA").innerText= " You selected 1 out of 5";
})

second.addEventListener('click', () => {
    let value = document.getElementById("secondButton").innerText;
    console.log(value);
    document.getElementById("firstA").innerText= " You selected 2 out of 5";
})


third.addEventListener('click', () => {
    let value = document.getElementById("thirdButton").innerText;
    console.log(value);
    document.getElementById("firstA").innerText= " You selected 3 out of 5";
})

fourth.addEventListener('click', () => {
    let value = document.getElementById("fourthButton").innerText;
    console.log(value);
    document.getElementById("firstA").innerText= " You selected 4 out of 5";
})

fifth.addEventListener('click', () => {
    let value = document.getElementById("fifthButton").innerText;
    console.log(value);
    document.getElementById("firstA").innerText= " You selected 5 out of 5";
})





const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    let first = document.getElementById("firstMain");
    let second = document.getElementById("secondMain")
    first.classList.add("remove");
    second.classList.remove("remove")
})

