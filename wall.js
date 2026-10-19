alert("об этом было много мыслей," +
    " но можно" +
    " ничего и не делать")



document.getElementById("linkT")
    .addEventListener("click", function() {
        sessionStorage.setItem("linkUnlockedA", "yes");
        sessionStorage.setItem("showAppleMessage", "yes");
    });

document.getElementById("linkT")
.addEventListener("mouseover", (event) => {
event.target.style.color = "rgb(218 218 221)";
setTimeout( () => {
    event.target.style.color = "transparent";
    }, 3000);
})

document.getElementById("linkT1")
    .addEventListener("click", function() {
        sessionStorage.setItem("linkUnlockedA", "yes");
        sessionStorage.setItem("showAppleMessage", "yes");
    });

document.getElementById("linkT1")
    .addEventListener("mouseover", (event) => {
        event.target.style.color = "rgb(218 218 221)";
        setTimeout( () => {
            event.target.style.color = "transparent";
        }, 3000);
    })
