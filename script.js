document.getElementById('heartButton').addEventListener('click', function() {
    const heartsContainer = document.querySelector('.hearts-container');

    // Buat 50 hati
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw'; // Posisi horizontal acak
        heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Durasi animasi acak
        heart.style.width = Math.random() * 30 + 10 + 'px'; // Ukuran hati acak
        heart.style.height = heart.style.width; // Pastikan proporsi tetap
        heartsContainer.appendChild(heart);

        // Hapus hati setelah animasi selesai
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
});
