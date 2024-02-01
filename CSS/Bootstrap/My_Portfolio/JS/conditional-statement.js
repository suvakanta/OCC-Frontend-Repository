//Control Flow Structures
//Conditinal Statements


//Conditionals if
//if statement
let age =15;
if (age >=18){
    console.log("You are eligible to vote!");

}else{
    console.log("You are not eligible to vote!");

}

//if-else if-else
let temprature =20;
if (temprature < 0){
    console.log("It's freezing!");

}else if(temprature>=0 && temprature <20){
    console.log("It's cool outside!");

}else{
    console.log("It's a warm day");
}

//Conditionals : Switch statement
let day ="Sunday";
switch (day){
    case "Monday":
        console.log("Its the start of the week");
        break;
    case "Friday":
        console.log("Its the end of the week");
        break;
    default:
        console.log("Its a regular day");
        break;

}