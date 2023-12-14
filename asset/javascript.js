let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showItem(index) {
    if (index < 0) {
        currentIndex = totalItems - 1;
    } else if (index >= totalItems) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const translateValue = -currentIndex * 100 + '%';
    document.querySelector('.carousel-inner').style.transform = 'translateX(' + translateValue + ')';
}

function nextItem() {
    showItem(currentIndex + 1);
}

function prevItem() {
    showItem(currentIndex - 1);
}

// Ganti angka 3000 dengan interval yang diinginkan dalam milidetik (misalnya, 3000 untuk 3 detik)
setInterval(nextItem, 1);