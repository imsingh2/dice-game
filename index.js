var randomNumber= Math.floor((Math.random()*6)+1);
var randomNumber2= Math.floor((Math.random()*6)+1);

if(randomNumber>randomNumber2){
              document.querySelector("h1").textContent="Player 1 Win";
}

else if(randomNumber<randomNumber2){
              document.querySelector("h1").textContent="Player 2 Win";

}

else {
              document.querySelector("h1").textContent="Draw";
}

var imagine1= "./images/dice"+randomNumber+".png";
document.querySelectorAll("img")[0].setAttribute("src", imagine1);

var imagine2= "./images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", imagine2);
