

const linkT = document.getElementById("linkT");
const screenCover = document.getElementById("screenCover");

linkT.addEventListener("click", function(event) {

    if (sessionStorage.getItem("linkUnlockedA") !== "yes") {
        event.preventDefault();
        screenCover.classList.add("active");

        setTimeout(function() {
            window.location.href="index.html";
        }, 3000);


    }
    else {


    }


});

const linkT1 = document.getElementById("linkT1");

linkT.addEventListener("click", function(event) {

    if (sessionStorage.getItem("linkUnlockedA") !== "yes") {
        event.preventDefault();
        screenCover.classList.add("active");

        setTimeout(function() {
            window.location.href="index.html";
        }, 3000);


    }
    else {


    }


});
