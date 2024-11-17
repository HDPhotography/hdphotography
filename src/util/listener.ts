export function on_load(callback: () => (() => void) | void) {
  function register() {
    const cleanup = callback();
    if (cleanup) {
      document.addEventListener("astro:before-swap", cleanup, { once: true });
    }
  }

  // initial load
  register();
  // on page change
  document.addEventListener("astro:after-swap", register);
}
