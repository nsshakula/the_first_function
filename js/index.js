let message = () => console.log("Я учу JavaScript!");
message();

const galleryCard = document.getElementById("flower");

function addBtnBack() {
  galleryCard.src = "./assets/image/snowdrop.jpg";
}

function addBtnForward() {
  galleryCard.src = "./assets/image/primroses.jpg";
}
