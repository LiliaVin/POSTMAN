const age_1 = 10;
const age_2 = 18;
const age_3 = 60;

const checkAge = function(age){
    age = Number(age)
    if (!isNaN(age)) {

    if (age < age_2) {
    console.log ( "You dont have access cause your age is "+ age + ". Its less then " + age_2)
}   else if (age >= age_2 && age < age_3){
    console.log("Welcome!")
}   else if ( age > age_3){
    console.log( "Keep calm! and go sleep")
}   else {
    console.log("Technical work")
} 
}   else {console.log ("Not integer")}
}
checkAge(17)
checkAge("22ddddd")
checkAge("34")

let agePrompt =prompt ("Enter age")
checkAge(agePrompt)
