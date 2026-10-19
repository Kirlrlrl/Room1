function updateLink() {
    const link = document.getElementById("linkA");

    function isUnlocked() {
        return sessionStorage.getItem("linkUnlocked") === "yes";
    }

    link.setAttribute("aria-disabled", String(!isUnlocked()));

    link.onclick = function(event) {
        if (!isUnlocked()) {
            event.preventDefault();

        }
    };
}

updateLink();


document.getElementById("linkA")
    .addEventListener("mouseover", (event) => {
        event.target.style.color = "powderblue";
        setTimeout( () => {
            event.target.style.color = "transparent";
        }, 1500);
    })
