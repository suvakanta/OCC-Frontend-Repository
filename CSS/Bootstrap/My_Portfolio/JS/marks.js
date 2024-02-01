let score = parseInt(prompt('Enter the score:'));
if(score>=90){
    console.log("The grade for the score is: ", score, "A");
}
else if(score>=80 && score<90){
    console.log("The grade for the score is: ", score, "B");
}
else if(score>=70 && score<80){
    console.log("The grade for the score is: ", score, "C");
}
else if(score>=60 && score<70){
    console.log("The grade for the score is: ", score, "D");
}
else{
    console.log("The grade for the score is: ", score, "F");
    }
