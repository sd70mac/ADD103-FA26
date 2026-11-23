const themeKey = "railway-photo-album-theme";
const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

try {
  const storedTheme = window.localStorage.getItem(themeKey);
  if (storedTheme === "light" || storedTheme === "dark") {
    root.dataset.theme = storedTheme;
  }
} catch (error) {
  console.warn("Could not read the saved color theme.", error);
}

if (themeToggle) {
  const isDark = () =>
    root.dataset.theme === "dark" ||
    (root.dataset.theme !== "light" && systemPrefersDark.matches);

  const updateToggle = () => {
    const darkModeEnabled = isDark();
    themeToggle.setAttribute("aria-pressed", String(darkModeEnabled));
    themeToggle.textContent = darkModeEnabled
      ? "Switch to Light Mode"
      : "Switch to Dark Mode";
  };

  updateToggle();
  themeToggle.addEventListener("click", () => {
    const nextTheme = isDark() ? "light" : "dark";
    root.dataset.theme = nextTheme;
    updateToggle();

    try {
      window.localStorage.setItem(themeKey, nextTheme);
    } catch (error) {
      console.warn("Could not save the color theme preference.", error);
    }
  });
}
