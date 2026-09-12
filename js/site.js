(function () {
    document.documentElement.classList.add("js");
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var year = document.getElementById('footerYear');
    if (year) year.textContent = String(new Date().getFullYear());

    var menu = document.getElementById('menu');
    var openBtn = document.getElementById('menuOpen');
    var closeBtn = document.getElementById('menuClose');
    if (menu && openBtn && closeBtn) {
        openBtn.addEventListener('click', function () { menu.showModal(); });
        closeBtn.addEventListener('click', function () { menu.close(); });
        menu.addEventListener('click', function (e) {
            if (e.target === menu || e.target.closest('a')) menu.close();
        });
    }

    var revealables = document.querySelectorAll('.reveal, .developing, .shoot-list, .brief');
    if (revealables.length) {
        if (reduceMotion || !('IntersectionObserver' in window)) {
            revealables.forEach(function (el) { el.classList.add('is-in'); });
        } else {
            var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('is-in');
                    io.unobserve(entry.target);
                });
            }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
            revealables.forEach(function (el) { io.observe(el); });
        }
    }

    var loops = document.querySelectorAll('video[data-loop]');
    if (loops.length) {
        var vio = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var v = entry.target;
                if (entry.isIntersecting) {
                    if (v.dataset.src) { v.src = v.dataset.src; delete v.dataset.src; v.load(); }
                    if (!reduceMotion) v.play().catch(function () {});
                } else if (!v.paused) {
                    v.pause();
                }
            });
        }, { rootMargin: '200px 0px' });
        loops.forEach(function (v) { vio.observe(v); });
    }
})();
