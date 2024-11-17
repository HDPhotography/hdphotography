type OnLoadOptions = {
  callback: () => void;
  cleanup?: () => void;
};

export function on_load({ callback, cleanup }: OnLoadOptions) {
  function register() {
    callback();
    if (cleanup) {
      document.addEventListener("astro:before-swap", cleanup, { once: true });
    }
  }

  // initial load
  register();
  // on page change
  document.addEventListener("astro:after-swap", register);
}
