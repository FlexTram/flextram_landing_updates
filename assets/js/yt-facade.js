/* Click-to-load YouTube player. Markup:
   <div class="yt" data-id="VIDEO_ID" data-title="Title">
     <picture>…thumbnail…</picture>
     <a class="yt-play" href="https://www.youtube.com/watch?v=VIDEO_ID" aria-label="Play video: Title">…</a>
   </div>
   Without JS the link opens YouTube. With JS it swaps in the
   youtube-nocookie player in place, so nothing loads from YouTube until a
   visitor asks for it. Fires a GA4 video_play event.

   Apple browsers (Safari, and every browser on iPhone/iPad) ignore autoplay
   in a freshly inserted iframe, which would make visitors tap twice. There we
   start the video through YouTube's IFrame Player API instead (the approach
   lite-youtube uses); if that script fails to load, we fall back to the plain
   iframe and the visitor taps YouTube's own play button. */
(function () {
  var useApi = /Apple/.test(navigator.vendor || '') || window.__ytForceApi === true;
  var warmed = false, apiPromise = null;

  function warm() {
    if (warmed) return; warmed = true;
    var hosts = ['https://www.youtube-nocookie.com', 'https://www.google.com', 'https://i.ytimg.com'];
    if (useApi) hosts.push('https://www.youtube.com');
    hosts.forEach(function (h) {
      var l = document.createElement('link');
      l.rel = 'preconnect'; l.href = h; l.crossOrigin = '';
      document.head.appendChild(l);
    });
  }

  function loadApi() {
    if (apiPromise) return apiPromise;
    apiPromise = new Promise(function (resolve, reject) {
      if (window.YT && window.YT.Player) return resolve();
      var prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function () { if (prev) prev(); resolve(); };
      var s = document.createElement('script');
      s.src = 'https://www.youtube.com/iframe_api';
      s.onerror = reject;
      document.head.appendChild(s);
      setTimeout(reject, 5000);
    });
    return apiPromise;
  }

  function plainIframe(box, id, title) {
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
  }

  function apiPlayer(box, id, title) {
    var holder = document.createElement('div');
    box.innerHTML = '';
    box.appendChild(holder);
    loadApi().then(function () {
      new window.YT.Player(holder, {
        host: 'https://www.youtube-nocookie.com',
        videoId: id,
        width: '100%',
        height: '100%',
        playerVars: { autoplay: 1, playsinline: 1, rel: 0 },
        events: {
          onReady: function (e) {
            var f = e.target.getIframe();
            if (f) f.title = title;
            e.target.playVideo();
          }
        }
      });
    }, function () {
      plainIframe(box, id, title);
    });
  }

  function play(box) {
    var id = box.getAttribute('data-id');
    var title = box.getAttribute('data-title') || 'FlexTram video';
    if (useApi) apiPlayer(box, id, title); else plainIframe(box, id, title);
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
    a.addEventListener('touchstart', warm, { once: true, passive: true });
    a.addEventListener('focus', warm, { once: true });
    a.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
      e.preventDefault();
      play(box);
    });
  });
})();
