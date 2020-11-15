  var randomNumber1 = Math.random() * 6;
  var x = Math.floor(randomNumber1) + 1;
  var randomDice = "Dice" + x + ".png";
  var randomImage = "E:/Web Development/DOM/images/" + randomDice;
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImage);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDice2 = "Dice" + randomNumber2 + ".png";
  var randomImage2 = "E:/Web Development/DOM/images/" + randomDice2;
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImage2);
  if (randomDice > randomDice2) {
    document.querySelector("h1").textContent = "🏳️ Player 1 wins";
  }
  else if(randomDice < randomDice2) {
    document.querySelector("h1").textContent = "🏳️ Player 2 wins";
  }
else {
  document.querySelector("h1").textContent = "😐DRAW!"
}
