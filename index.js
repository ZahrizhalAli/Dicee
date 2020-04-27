var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dicee1 = "images/dice" + randomNumber1 +".png";
var dicee2 = "images/dice" + randomNumber2 +".png";


document.querySelector(".img1").setAttribute("src", dicee1);
document.querySelector(".img2").setAttribute("src", dicee2);

if (randomNumber1 == randomNumber2)
{
  document.querySelector("h1").innerHTML = "Draw";
}
else if(randomNumber1 < randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player2 Win <i class='fas fa-flag fas-2x'></i>";

}
else
{
  document.querySelector("h1").innerHTML = "<i class='fas fa-flag fas-2x'></i> Player1 Win";

}
