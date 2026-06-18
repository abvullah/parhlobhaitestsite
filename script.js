function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const btn = document.getElementById('darkToggleBtn');
    if (btn) {
        btn.textContent = document.body.classList.contains('dark') ? '☀️ Light' : '🌙 Dark';
    }
    localStorage.setItem('parhlobhai-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

function setActiveNav() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === current) {
            link.classList.add('active');
        }
    });
}

window.onload = function() {
    const saved = localStorage.getItem('parhlobhai-theme');
    const btn = document.getElementById('darkToggleBtn');
    if (saved === 'dark') {
        document.body.classList.add('dark');
        if (btn) btn.textContent = '☀️ Light';
    } else {
        document.body.classList.remove('dark');
        if (btn) btn.textContent = '🌙 Dark';
    }
    setActiveNav();
};