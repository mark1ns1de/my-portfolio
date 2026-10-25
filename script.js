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
