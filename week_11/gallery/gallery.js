function change(button) {
    const thumbnail = button.querySelector("img");
    const largeImage = document.getElementById("large");
    largeImage.src = thumbnail.src;
    largeImage.alt = thumbnail.alt;
}

function setBgColor(color) {
    document.body.classList.remove("dark-mode");
    document.body.style.backgroundColor = color;
}

function setDarkMode() {
    document.body.style.backgroundColor = "";
    document.body.classList.add("dark-mode");
}

document.getElementById("custom-color-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const colorInput = document.getElementById("custom-color");
    const message = document.getElementById("custom-color-message");
    const color = colorInput.value.trim();

    if (!/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(color)) {
        colorInput.setAttribute("aria-invalid", "true");
        message.textContent = "Enter a hex color such as #abc or #aabbcc.";
        return;
    }

    colorInput.removeAttribute("aria-invalid");
    message.textContent = "";
    setBgColor(color);
});

document.getElementById("custom-color").addEventListener("input", () => {
    document.getElementById("custom-color").removeAttribute("aria-invalid");
    document.getElementById("custom-color-message").textContent = "";
});
