



let countChar  = 0;
let counterChar = document.getElementById("char");

counterChar.onclick = () => {
    countChar++;
console.log(`Clicks: ${countChar}`)
if (countChar >= 2) {
    counterChar.src = "apple2r.png";
}
    if (countChar >= 5) {
        counterChar.onclick=window.location.href="appleinside.html";
    }


}


    const cursor = document.querySelector(".custom-cursor");

    document.addEventListener("mousemove", (event) => {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
});

