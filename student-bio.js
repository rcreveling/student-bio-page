document.getElementById("contact-link").onclick = function displaycontactinfo() {}

function displaycontactinfo() {
    if (document.getElementById("contact-box").style.display === "hidden") {
        document.getElementById("contact-box").style.display = "block";
    } else {
        document.getElementById("contact-box").style.display = "hidden";
    }
}
