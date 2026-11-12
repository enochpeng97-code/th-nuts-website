(() => {
  const video = document.querySelector('.cashew-video');
  const toggle = document.getElementById('cashewVideoToggle');
  if (!video || !toggle) return;
  function sync() {
    toggle.innerHTML = video.paused
      ? '<span data-en>Play video</span><span data-zh>播放视频</span>'
      : '<span data-en>Pause video</span><span data-zh>暂停视频</span>';
  }
  toggle.addEventListener('click', async () => {
    if (video.paused) { try { await video.play(); } catch { sync(); } }
    else video.pause();
  });
  video.addEventListener('play', sync);
  video.addEventListener('pause', sync);
  video.addEventListener('error', sync);
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video.autoplay = false;
    video.pause();
  }
  sync();
})();
