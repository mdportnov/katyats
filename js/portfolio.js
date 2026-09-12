(function () {
    var player = document.getElementById('player');
    var video = document.getElementById('playerVideo');
    var caption = document.getElementById('playerCaption');
    var closeBtn = document.getElementById('playerClose');
    if (!player || !video) return;

    function open(btn) {
        var frame = btn.closest('.frame');
        var loop = frame.querySelector('video');
        if (loop && !loop.paused) loop.pause();
        video.src = btn.dataset.full;
        video.poster = btn.dataset.poster || '';
        caption.querySelector('.edge-print').innerHTML = '<b>' + btn.dataset.num + '</b>';
        caption.querySelector('h3').textContent = btn.dataset.title;
        player.showModal();
        video.muted = false;
        video.currentTime = 0;
        video.play().catch(function () {});
    }

    function close() {
        if (player.open) player.close();
    }

    player.addEventListener('close', function () {
        video.pause();
        video.removeAttribute('src');
        video.load();
    });
    player.addEventListener('click', function (e) { if (e.target === player || e.target.classList.contains('player-inner')) close(); });
    closeBtn.addEventListener('click', close);
    video.addEventListener('click', function () { this.paused ? this.play() : this.pause(); });

    document.querySelectorAll('.frame-play').forEach(function (btn) {
        btn.addEventListener('click', function () { open(btn); });
    });
})();
