let i = 1;

let swipePhoto = document.querySelector("#swipePhoto");

function slide() {
  swipePhoto.setAttribute("src", `./photos/photo${i}.jpeg`);
  i++;
  if (i > 2) {
    i = 1;
  }
}

setInterval("slide()", 3000);

document.getElementById("left-button").addEventListener("click", function () {
  i--;
  if (i <= 1) {
    i = 1;
  }
  swipePhoto.setAttribute("src", `./photos/photo${i}.jpeg`);
});
document.getElementById("right-button").addEventListener("click", function () {
  i++;
  if (i > 2) {
    i = 1;
  }
  swipePhoto.setAttribute("src", `./photos/photo${i}.jpeg`);
});
