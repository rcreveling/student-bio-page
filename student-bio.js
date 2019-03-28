document.getElementById("contact-link").onclick = function display-contact-info()

function display-contact-info() {
    if (document.getElementById("contact-box").style.display === "hidden") {
        document.getElementById("contact-box").style.display = "block";
    } else {
        document.getElementById("contact-box").style.display = "hidden";
    }
}
