
var msg1 =document.getElementById("message1")
var msg2 =document.getElementById("message2")
var msg3 =document.getElementById("message3")
var answer=Math.floor(Math.random()*50);

var no_of_guess=0;
var guesses_num=[];


function play(){
    var user_guess = document.getElementById("guess").value;

    if(user_guess<1 || user_guess>50){
        alert("Please enter a number between 1 to 50");
    }else{
        guesses_num.push(user_guess);
        no_of_guess = no_of_guess+1;
    }

    if(user_guess < answer){
        msg1.textContent="Your number is very Small , Please enter Higher number !!";
        msg1.style.backgroundColor="red";
        msg1.style.color="white"
        msg2.textContent="No.of guesses : "+no_of_guess;
        msg3.textContent="Guessed number are : "+guesses_num;
    }
    else if(user_guess > answer){
        msg1.textContent="Your number is very High , Please enter Lower number !!";
        msg2.textContent="No.of guesses : "+no_of_guess;
        msg3.textContent="Guessed number are : "+guesses_num;
    }
    else if(user_guess == answer){
        msg1.textContent= "Yahhh....Congratulations you WIN !!";
        msg1.style.backgroundColor="green";
        msg1.style.color="yellow"
        msg1.style.outline="2px solid black";
        msg2.textContent="The number was "+answer;
        msg3.textContent="You guessed it in "+no_of_guess+" guesses";
    }
}


