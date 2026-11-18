/* Submit Formspree forms in the background.
   Formspree ignores the `_next` redirect on our plan and leaves visitors on its
   own formspree.io "Thanks!" page, so our thank-you pages and conversion events
   never fired (found 2026-11-17). This sends the form with fetch and, only after
   Formspree confirms, takes the visitor where `_next` says:
     - data-success="inline" (homepage): stay on the page, fire the conversion,
       show the confirmation banner and scroll to it.
     - otherwise: go to the `_next` thank-you page, which fires its own event.
   If the background send fails for any reason (network, Formspree rejects AJAX,
   reCAPTCHA), the form is submitted the old way, so a lead is never lost.
   Usage: <form data-ajax-submit ...> on a Formspree form with a `_next` field. */
(function () {
  document.querySelectorAll('form[data-ajax-submit]').forEach(function (form) {
    var btn = form.querySelector('[type="submit"]');
    var btnText = btn ? btn.innerHTML : '';

    function nativeSubmit() {
      // HTMLFormElement.submit() skips submit listeners, so this cannot loop.
      HTMLFormElement.prototype.submit.call(form);
    }

    function restoreButton() {
      if (!btn) return;
      btn.disabled = false;
      btn.innerHTML = btnText;
    }

    form.addEventListener('submit', function (e) {
      if (e.defaultPrevented) return;          // another script stopped it
      if (!window.fetch || !window.FormData) return; // very old browser: native post
      e.preventDefault();
      if (btn) {
        btn.disabled = true;
        btn.textContent = btn.getAttribute('data-submit') || 'Sending…';
      }
      var nextField = form.querySelector('input[name="_next"]');
      var next = nextField ? nextField.value : '';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (data) {
          if (!res.ok || data.ok === false || (data.errors && data.errors.length)) throw new Error('rejected');
          success(next);
        });
      }).catch(function () {
        restoreButton();
        nativeSubmit();
      });
    });

    function success(next) {
      if (form.getAttribute('data-success') === 'inline') {
        if (typeof gtag === 'function') {
          gtag('event', 'form_submit_success', { form_id: form.id || 'form' });
        }
        document.documentElement.className += ' form-submitted';
        form.reset();
        restoreButton();
        var banner = document.querySelector('.contact-success');
        if (banner && banner.scrollIntoView) banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      window.location.assign(next || '/');
    }
  });
})();
