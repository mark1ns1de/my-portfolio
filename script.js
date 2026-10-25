// Перемикач світлої / темної теми
const toggleButton = document.getElementById("theme-toggle");

function applyTheme(theme) {
    document.body.classList.toggle("dark", theme === "dark");
    toggleButton.textContent = theme === "dark" ? "☀️ Світла тема" : "🌙 Темна тема";
}

// Відновлюємо тему, яку користувач обрав минулого разу
let savedTheme = "light";
try {
    savedTheme = localStorage.getItem("theme") || "light";
} catch (e) {}
applyTheme(savedTheme);

toggleButton.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
    applyTheme(newTheme);
    try {
        localStorage.setItem("theme", newTheme);
    } catch (e) {}
});

// Контактна форма з перевіркою полів
const form = document.getElementById("contact-form");

function showError(field, message) {
    document.getElementById(field.id + "-error").textContent = message;
    field.classList.toggle("invalid", message !== "");
}

function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    let isValid = true;

    if (name.value.trim().length < 2) {
        showError(name, "Ім'я має містити щонайменше 2 символи");
        isValid = false;
    } else {
        showError(name, "");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        showError(email, "Введіть коректний email, наприклад you@example.com");
        isValid = false;
    } else {
        showError(email, "");
    }

    if (message.value.trim().length < 10) {
        showError(message, "Повідомлення має містити щонайменше 10 символів");
        isValid = false;
    } else {
        showError(message, "");
    }

    return isValid;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const success = document.getElementById("form-success");

    if (validateForm()) {
        success.textContent = "✅ Дякую! Повідомлення успішно надіслано (демо).";
        form.reset();
    } else {
        success.textContent = "";
    }
});
