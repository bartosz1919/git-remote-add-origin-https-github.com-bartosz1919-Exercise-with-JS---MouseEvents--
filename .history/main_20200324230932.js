const btn = document.querySelector("button");
const li = document.querySelectorAll("li");



btn.addEventListener("click", () => {
    let size = 10;


    for (let i = 0; i < li.length; i++) {
        li[i].style.display = "block";
        li[i].style.fontSize = '${size++}px';

        console.log(size);


    }



})