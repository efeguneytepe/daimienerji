let currentIndex = 1;
const totalPhotos = 2; // Fotoğraf sayısını buraya ekleyin

const swipePhoto = document.querySelector("#swipePhoto");

function updatePhoto(index) {
  swipePhoto.setAttribute("src", `./photos/photo${index}.jpeg`);
}

function slide() {
  currentIndex++;
  if (currentIndex > totalPhotos) {
    currentIndex = 1;
  }
  updatePhoto(currentIndex);
}

const slideInterval = setInterval(slide, 3000);

document.getElementById("left-button").addEventListener("click", function () {
  clearInterval(slideInterval); // Sol butona tıkladığında otomatik geçişi durdur
  currentIndex--;
  if (currentIndex < 1) {
    currentIndex = totalPhotos;
  }
  updatePhoto(currentIndex);
  // Yeniden başlatma (isteğe bağlı)
  setInterval(slide, 3000);
});

document.getElementById("right-button").addEventListener("click", function () {
  clearInterval(slideInterval); // Sağ butona tıkladığında otomatik geçişi durdur
  currentIndex++;
  if (currentIndex > totalPhotos) {
    currentIndex = 1;
  }
  updatePhoto(currentIndex);
  // Yeniden başlatma (isteğe bağlı)
  setInterval(slide, 3000);
});

// İlk fotoğrafı yükle
updatePhoto(currentIndex);
