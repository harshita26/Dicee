number1=Math.random();
number_img1=Math.floor(number1*6)+1;
var image1 = document.getElementById('myImage1');
image1.src = "images/dice"+number_img1+".png";
console.log(image1.src);

number2=Math.random();
number_img2=Math.floor(number2*6)+1;
var image2 = document.getElementById('myImage2');
image2.src = "images/dice"+number_img2+".png";

if(number_img1>number_img2){
    var text=document.getElementById("winnerPlayer").innerHTML="🚩 Play 1 Wins!";
}else if(number_img1==number_img2){
    text=document.getElementById("winnerPlayer").innerHTML="Draw!";
}else{
    text=document.getElementById("winnerPlayer").innerHTML="Player 2 Wins! 🚩";
}