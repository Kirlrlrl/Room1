

document.getElementById("linkX")
    .addEventListener("click", function() {
        sessionStorage.setItem("linkUnlocked", "yes");
        sessionStorage.setItem("showAppleMessage", "yes");
    });

