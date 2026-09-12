document.querySelectorAll('[data-website-preview]').forEach((preview) => {
  preview.addEventListener('toggle', () => {
    const frame = preview.querySelector('iframe');
    if (preview.open) {
      frame.src = frame.dataset.src;
    } else {
      frame.removeAttribute('src');
    }
  });
});
