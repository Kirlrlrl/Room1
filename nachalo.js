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

function showMessage() {
    const message = document.getElementById("message");
    message.style.display = "block";

message.classList.add("show");
}

if (sessionStorage.getItem("showAppleMessage") === "yes") {
    showMessage();
    sessionStorage.removeItem("showAppleMessage");
}