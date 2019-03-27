function contactdisplay() {
    var x = document.getElementById("contact-info");
    if (x.style.display === "hidden") {
        x.style.display = "block";
    } else {
        x.style.display = "hidden";
    }
}
document.getElementById("contact-link").onclick = contactdisplay();

