let max = prompt("enter a maximum no : ");

const random = Math.floor(Math.random()*max)+1;

let guees_no = prompt("guess the no : ");

while(true){
    if( guees_no == "quit"){
        console.log("user quited");
    break;
    }
    else if (guees_no < random){
        console.log("no entered is too small");
    }
    else{
        console.log("no entered is too large");
    }
    
    if(guees_no == random){
        console.log("Congrats u won!, random no is correct.");
        break;
    }
    else{
        guees_no = prompt("your guess is wrong pls try again");
    }
}