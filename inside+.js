

alert("пока ты ешь одну половину яблока и долго смотришь в стену, приползает гусеница")

const linkT = document.getElementById("linkT");
const screenCover = document.getElementById("screenCover");

linkT.addEventListener("click", function(event) {
    // Проверяем, разблокирована ли ссылка
    if (sessionStorage.getItem("linkUnlocked") !== "yes") {
        event.preventDefault();


    }

    event.preventDefault();

    screenCover.classList.add("active");

    setTimeout(function() {
        window.location.href="start.html";
    }, 3000);
});