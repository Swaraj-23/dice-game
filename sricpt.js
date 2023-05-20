function myFunction(){
    var randomNumber1 = Math.ceil(Math.random()*6);

    var randomImg = "dice" + randomNumber1  + ".png";
    var randImgSrc = "images/" + randomImg;
    
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randImgSrc);
    
    var randomNumber2 = Math.ceil(Math.random()*6);
    var randImgSrc2 = "images/dice" + randomNumber2 + ".png";
    
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", randImgSrc2);
    
    if(randomNumber1 > randomNumber2)
    {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins ";
    }
    
    else if(randomNumber1 == randomNumber2)
    {
        document.querySelector("h1").innerHTML = "Draw";
    }
    
    else{
        document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
    }
}



