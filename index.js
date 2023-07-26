var randomNumber1=Math.floor(Math.random()*6)+1;

var randomImg="dice"+randomNumber1+".png";

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",randomImg);

//Now going for the second dice

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImg2="dice"+randomNumber2+".png";

var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src",randomImg2);

//Changing the HTML content of h1 tag to declare which player is the winner
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Match draw!🚩";
}
else
{
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}