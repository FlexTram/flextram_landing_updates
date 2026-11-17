/* Click-to-load YouTube player. Markup:
   <div class="yt" data-id="VIDEO_ID" data-title="Title">
     <picture>…thumbnail…</picture>
     <a class="yt-play" href="https://www.youtube.com/watch?v=VIDEO_ID" aria-label="Play video: Title">…</a>
   </div>
   Without JS the link opens YouTube. With JS it swaps in the
   youtube-nocookie player in place, so nothing loads from YouTube until a
   visitor asks for it. Fires a GA4 video_play event. */
(function () {
  var warmed = false;
  function warm() {
    if (warmed) return; warmed = true;
    ['https://www.youtube-nocookie.com', 'https://www.google.com', 'https://i.ytimg.com'].forEach(function (h) {
      var l = document.createElement('link');
      l.rel = 'preconnect'; l.href = h; l.crossOrigin = '';
      document.head.appendChild(l);
    });
  }
  function play(box) {
    var id = box.getAttribute('data-id');
    var title = box.getAttribute('data-title') || 'FlexTram video';
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) +
      '?autoplay=1&rel=0&playsinline=1';
    f.title = title;
    f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    f.allowFullscreen = true;
    f.referrerPolicy = 'strict-origin-when-cross-origin';
    box.innerHTML = '';
    box.appendChild(f);
    f.focus();
    if (typeof gtag === 'function') {
      gtag('event', 'video_play', {
        video_id: id,
        video_title: title,
        video_location: location.pathname
      });
    }
  }
  document.querySelectorAll('.yt[data-id]').forEach(function (box) {
    var a = box.querySelector('.yt-play');
    if (!a) return;
    a.addEventListener('pointerover', warm, { once: true, passive: true });
    a.addEventListener('focus', warm, { once: true });
    a.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
      e.preventDefault();
      play(box);
    });
  });
})();
