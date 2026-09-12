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

(function () {
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var links = document.querySelectorAll('[data-flood]');
    if (!links.length) return;

    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
            if (reduceMotion) return;
            e.preventDefault();
            var href = link.getAttribute('href');
            var color = link.dataset.flood;
            var isDoor = link.classList.contains('door');
            var title = link.querySelector('h2') ? link.querySelector('h2').textContent.trim() : link.textContent.trim();
            var rect = link.getBoundingClientRect();

            var flood = document.createElement('div');
            flood.className = 'flood';
            flood.dataset.tone = color === '#800000' ? 'red' : 'film';
            flood.style.background = color;
            flood.style.setProperty('--t', rect.top + 'px');
            flood.style.setProperty('--l', rect.left + 'px');
            flood.style.setProperty('--r', (window.innerWidth - rect.right) + 'px');
            flood.style.setProperty('--b', (window.innerHeight - rect.bottom) + 'px');
            var t = document.createElement('div');
            t.className = 'flood-title';
            t.textContent = title;
            flood.appendChild(t);
            document.body.appendChild(flood);

            document.body.classList.add('is-leaving');
            link.classList.add('is-chosen');

            var pencilDelay = isDoor ? 380 : 0;
            setTimeout(function () {
                flood.getBoundingClientRect();
                flood.classList.add('is-open');
                setTimeout(function () { window.location.href = href; }, 620);
            }, pencilDelay);
        });
    });

    window.addEventListener('pageshow', function (e) {
        if (!e.persisted) return;
        document.querySelectorAll('.flood').forEach(function (f) { f.remove(); });
        document.body.classList.remove('is-leaving');
        document.querySelectorAll('.is-chosen').forEach(function (d) { d.classList.remove('is-chosen'); });
    });
})();
