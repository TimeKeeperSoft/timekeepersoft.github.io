// Mobile menu toggle
document.getElementById('hamburger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('main-nav').classList.toggle('active');
    document.getElementById('nav-overlay').classList.toggle('active');
});

// Закрытие меню при клике на оверлей
document.getElementById('nav-overlay').addEventListener('click', function () {
    document.getElementById('hamburger').classList.remove('active');
    document.getElementById('main-nav').classList.remove('active');
    this.classList.remove('active');
});

// Detect OS and update download button
function detectOS() {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];

    if (windowsPlatforms.indexOf(platform) !== -1) {
        return 'Windows';
    } else if (/Linux/.test(platform)) {
        return 'Linux';
    }

    return 'Unknown';
}

const os = detectOS();
const downloadBtn = document.getElementById('main-download-btn');

if (os !== 'Unknown') {
    downloadBtn.textContent = `Скачать для ${os}`;
    downloadBtn.href = `download.html#${os.toLowerCase()}`;
}

// Update header on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
        header.style.backgroundColor = 'rgba(40, 40, 40, 0.6)';
    } else {
        header.style.backgroundColor = 'rgba(40, 40, 40, 0.5)';
    }
});