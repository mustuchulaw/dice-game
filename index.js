var randomNumber=Math.floor(Math.random()*6)+1;
var randomdiceImage="dice"+randomNumber+".png";
var randomImageSource="images/"+ randomdiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdiceImage2="Dice"+randomNumber2+".png";
var randomImageSource2="images/"+ randomdiceImage2;
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImageSource2);

if(randomNumber > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 won!";
}
else if(randomNumber < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 won!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}