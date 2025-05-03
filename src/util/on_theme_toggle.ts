import { on_load } from "../util/listener";

export default function on_theme_toggle() {
  document.documentElement.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );
}
on_load(() => {
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", on_theme_toggle);
  return () => {
    themeToggle.removeEventListener("click", on_theme_toggle);
  };
});
